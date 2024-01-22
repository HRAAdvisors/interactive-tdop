import * as turf from '@turf/turf';
import _ from 'lodash';
import mapboxgl from 'mapbox-gl';
import { Map, PaddingOptions } from 'mapbox-gl';
import { MutableRefObject, ReactNode, useEffect, useRef, useState } from 'react';

export interface ChoroplethMapProps {
  geoJSONFeatureCollection: GeoJSON.FeatureCollection<GeoJSON.Geometry>;
  mapRef?: MutableRefObject<Map | undefined>;
  layerId?: string;
  sourceId?: string;
  colorStops?: { step: number; color: string }[];
  tooltipContent?: (feature: any) => string;
  center?: mapboxgl.LngLatLike;
  children?: ReactNode;
  mapBoxExpression?: any[];
  padding?: number | PaddingOptions;
  mapContainerClassName?: string;
}

const getToolTip = (feature: any) => `
<strong class="font-sans uppercase">${feature.properties.NAME} County</strong>
<hr class="my-2"/>
Share of households with No Internet Subscription: 
<span class="font-bold">${feature.properties.dataPoint}</span>
`;

const ChoroplethMap = ({
  geoJSONFeatureCollection,
  mapRef = useRef<Map>(),
  layerId = 'regionLayer',
  sourceId = 'regionData',
  colorStops = [
    { step: 0.05, color: '#C9DCF7' },
    { step: 0.15, color: '#96AFD3' },
    { step: 0.25, color: '#6481B0' },
    { step: 0.35, color: '#32548C' },
    { step: 0.45, color: '#002768' },
  ],
  mapBoxExpression = ['to-number', ['get', 'dataPoint']],
  tooltipContent = getToolTip,
  padding = 20,
  children,
  mapContainerClassName = 'relative h-full w-full',
}: ChoroplethMapProps) => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const localGeoJSON = useRef(geoJSONFeatureCollection);

  const getCalculatedCenter = () => {
    const coOrdinate = turf.center(geoJSONFeatureCollection);
    return coOrdinate.geometry.coordinates as [number, number];
  };

  const [center] = useState<[number, number]>(getCalculatedCenter);
  const [fitBounds, setFitBound] = useState<number[]>([]);

  const fitBound = () => {
    const newBounds = turf.bbox(geoJSONFeatureCollection);
    if (!_.isEqual(newBounds, fitBounds)) {
      setFitBound(newBounds);
      mapRef.current?.fitBounds(
        [
          [newBounds[0], newBounds[1]],
          [newBounds[2], newBounds[3]],
        ],
        {
          padding,
        },
      );
    }
  };

  const addSourceAndLayer = () => {
    if (!mapRef.current) return;

    if (mapRef.current.getSource(sourceId)) {
      mapRef.current.removeLayer(layerId);
      mapRef.current.removeSource(sourceId);
    }
    fitBound();
    mapRef.current.addSource(sourceId, {
      type: 'geojson',
      data: geoJSONFeatureCollection,
    });

    mapRef.current.addLayer(
      {
        id: layerId,
        type: 'fill',
        source: sourceId,
        paint: {
          'fill-color': [
            'step', // Convert 'households' to a number
            mapBoxExpression,
            '#ffffff',
            ..._.flatMap(colorStops, (stop) => [stop.step, stop.color]),
          ],
          'fill-opacity': 0.9,
        },
      },
      'settlement-subdivision-label',
    );
  };

  const onLoad = () => {
    if (mapRef.current) {
      addSourceAndLayer();

      const tooltip = new mapboxgl.Popup({
        closeButton: false,
        closeOnClick: false,
      });

      mapRef.current.on('mousemove', layerId, (e) => {
        const feature = _.first(e.features);
        if (feature) {
          tooltip
            .setLngLat(e.lngLat)
            .setHTML(tooltipContent(feature))
            .addTo(mapRef.current as Map);

          // Highlight the hovered feature
          mapRef.current?.setPaintProperty(layerId, 'fill-opacity', [
            'case',
            ['==', ['get', 'dataPoint'], feature?.properties?.dataPoint],
            0.8,
            0.6,
          ]);
        }
      });

      mapRef.current.on('mouseleave', layerId, () => {
        tooltip.remove();
        mapRef.current?.setPaintProperty(layerId, 'fill-opacity', 0.6);
      });
    }
  };

  useEffect(() => {
    if (!geoJSONFeatureCollection || !!mapRef.current) return;

    mapRef.current = new mapboxgl.Map({
      container: mapContainerRef.current as HTMLElement,
      style: 'mapbox://styles/mapbox/light-v11',
      center: center, // Coordinates for Austin, Texas
    });
    mapRef.current.on('load', onLoad);
  }, []);

  useEffect(() => {
    if (
      !mapRef.current ||
      !mapContainerRef.current ||
      _.isEqual(localGeoJSON.current, geoJSONFeatureCollection)
    )
      return;

    // const currentCenter = mapRef.current.getCenter();

    // const calculatedCenter = getCalculatedCenter();
    // if (!_.isEqual(currentCenter, calculatedCenter)) {
    //   mapRef.current?.setCenter(calculatedCenter);
    // }

    // fitBound();

    // const sourceData = mapRef.current?.getSource(sourceId);
    // if (sourceData) {
    //   (sourceData as GeoJSONSource).setData(geoJSONFeatureCollection);
    // }
    addSourceAndLayer();
    localGeoJSON.current = geoJSONFeatureCollection;
  }, [geoJSONFeatureCollection, colorStops]);

  return (
    <div className={mapContainerClassName}>
      {children}
      <div ref={mapContainerRef} className={`h-full w-full ${mapContainerClassName}`} />
    </div>
  );
};

export default ChoroplethMap;
