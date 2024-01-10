/* tslint:disable */
import { useRef, useEffect, useState } from 'react';
import mapboxgl, { Map } from 'mapbox-gl';
import { bbox } from '@turf/turf';
import 'mapbox-gl/dist/mapbox-gl.css';
import { useGetBoundaryDataBulkMutation, useGetChartDataBulkMutation } from '@/services/map';

mapboxgl.accessToken =
  'pk.eyJ1IjoiZWRkaWVqb2VhbnRvbmlvIiwiYSI6ImNscGhtbmo1cTAzbjcyanRiMG9wcWJuZWIifQ.yG4IQ3nHdGUlgZCBkq9-Jw';

const getAggregateData = (choroplethData: any) =>
  choroplethData
    ? choroplethData.data.reduce((acc: any, item: any) => {
        const geoId = item.geo_id;
        if (!acc[geoId]) {
          acc[geoId] = {};
        }
        Object.keys(item).forEach((key) => {
          if (key !== 'geo_id') {
            acc[geoId][`${key}_${item.internet_access_type}`] = item[key];
          }
        });

        return acc;
      }, {})
    : {};

const transformToGeoJSON = (aggregatedChoroplethData: any, boundaryDataArray: any) => {
  const features = [];
  boundaryDataArray.forEach((boundaryItem) => {
    const geoId = boundaryItem.geoId;

    if (aggregatedChoroplethData[geoId]) {
      const noInternetProportion =
        aggregatedChoroplethData[geoId]['households_no_internet'] /
        aggregatedChoroplethData[geoId]['households_total_households'];

      features.push({
        type: 'Feature',
        geometry: boundaryItem.feature.geometry,
        properties: {
          ...aggregatedChoroplethData[geoId],
          ...boundaryItem.feature.properties,
          noInternetProportion, // Add the calculated proportion to the properties
        },
      });
    } else {
      // console.log(`No matching choropleth data for geoId: ${geoId}`);
    }
  });

  const geojsonData = {
    type: 'FeatureCollection',
    features,
  };

  return geojsonData;
};

const MapContainer = () => {
  const mapContainer = useRef(null);
  const map = useRef<Map>(null);
  const [isMapInit, setIsMapInit] = useState(false);
  const [selectedCounty, setSelectedCounty] = useState('');
  const [geoJsonFeatures, setGeoJsonFeatures] = useState([]);

  const [getBoundaries, { data: boundaryData = null, isLoading: isLoadingBoundary }] =
    useGetBoundaryDataBulkMutation();
  const [getChartData, { data: choroplethData = null, isLoading: isLoadingChartData }] =
    useGetChartDataBulkMutation();

  useEffect(() => {
    const init = async () => {
      await getBoundaries().unwrap();
      await getChartData().unwrap();

      if (map.current || !mapContainer.current) return;
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/light-v11',
        center: [-99.7431, 31.2672], // Coordinates for Austin, Texas
        zoom: 4.75,
      });
      setIsMapInit(true);
    };

    init();
  }, []);
  // console.log(boundaryData);

  useEffect(() => {
    if (!map.current || !boundaryData || !choroplethData) return;
    const boundaryDataArray = Object.values(boundaryData);
    const aggregatedChoroplethData = getAggregateData(choroplethData);
    const geojsonData = transformToGeoJSON(aggregatedChoroplethData, boundaryDataArray);

    setGeoJsonFeatures(geojsonData);

    map.current.on('load', () => {
      if (map.current) {
        if (map.current.getSource('regionData')) {
          map.current.removeLayer('regionLayer');
          map.current.removeSource('regionData');
        }

        map.current.addSource('regionData', {
          type: 'geojson',
          data: geojsonData,
        });

        map.current.addLayer(
          {
            id: 'regionLayer',
            type: 'fill',
            source: 'regionData',
            paint: {
              'fill-color': [
                'step',
                ['get', 'noInternetProportion'], // Convert 'households' to a number
                '#ffffff',
                0.05,
                '#C9DCF7',
                0.15,
                '#96AFD3',
                0.25,
                '#6481B0',
                0.35,
                '#32548C',
                0.45,
                '#002768',
              ],
              'fill-opacity': 0.9,
            },
          },
          'settlement-subdivision-label',
        );

        const tooltip = new mapboxgl.Popup({
          closeButton: false,
          closeOnClick: false,
        });

        map.current.on('mousemove', 'regionLayer', (e) => {
          if (e.features.length > 0) {
            const feature = e.features[0];

            // Set tooltip contents
            tooltip
              .setLngLat(e.lngLat)
              .setHTML(
                `      
                             <strong class="font-sans uppercase">${feature.properties.NAME} County</strong>
                             <hr class="my-2"/>
                             Share of households with No Internet Subscription: 
                             <span class="font-bold">${feature.properties.noInternetProportion}</span>
                             `,
              )
              .addTo(map.current as Map);

            // Highlight the hovered feature
            map.current?.setPaintProperty('regionLayer', 'fill-opacity', [
              'case',
              ['==', ['get', 'noInternetProportion'], feature?.properties?.noInternetProportion],
              0.8, // Darken the selected region
              0.6, // Original opacity for others
            ]);
          }
        });

        map.current.on('mouseleave', 'regionLayer', () => {
          tooltip.remove();
          // Reset the layer style on mouse leave
          map.current?.setPaintProperty('regionLayer', 'fill-opacity', 0.6);
        });
      }
    });
  }, [isMapInit, choroplethData]);

  const counties = boundaryData
    ? Object.values(boundaryData).map((item) => ({
        name: item.feature.properties.NAME,
        data: item.feature,
      }))
    : [];

  const handleCountySelect = (even: any) => {
    const countyName = event?.target.value;
    setSelectedCounty(countyName);

    const selectedCountyData = counties.find((county) => county.name === countyName);

    if (selectedCountyData && map.current) {
      const bounds = bbox(selectedCountyData.data.geometry);
      map.current.fitBounds(
        [
          [bounds[0], bounds[1]],
          [bounds[2], bounds[3]],
        ],
        {
          padding: 20,
        },
      );
    }
  };

  return (
    <div className='relative w-full h-screen'>
      <select
        value={selectedCounty}
        onChange={handleCountySelect}
        className='absolute top-10 left-0 m-5 h-10 z-10 shadow-xl bg-black text-white'
      >
        <option value='' className='bg-black'>
          Zoom to...
        </option>
        {counties.map((county, index) => (
          <option key={index} value={county.name} className='bg-black'>
            {county.name}
          </option>
        ))}
      </select>
      <div ref={mapContainer} className='h-full w-full' />
    </div>
  );
};

export default MapContainer;
