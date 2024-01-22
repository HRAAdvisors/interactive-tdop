/* tslint:disable */
import { useRef, useEffect, useState } from 'react';
import { Map } from 'mapbox-gl';
import _ from 'lodash';
import { transformToGeoJSON } from '@/utils/transformGeoJSON';
import ChoroplethMap from './ui/ChoroplethMap';
import { bbox } from '@turf/turf';
import { DataPointGeneratorName } from '@/types/ChartIds';
import { useLazyGetBoundaryDataBulkQuery, useLazyGetChartDataBulkQuery } from '@/services/map';

const MapContainer = () => {
  const mapRef = useRef<Map>();
  const [selectedCounty, setSelectedCounty] = useState('');
  const [geoJsonFeatures, setGeoJsonFeatures] =
    useState<GeoJSON.FeatureCollection<GeoJSON.Geometry> | null>(null);

  const [getBoundaries, { data: boundaryData }] = useLazyGetBoundaryDataBulkQuery();
  const [getChartData] = useLazyGetChartDataBulkQuery();

  useEffect(() => {
    const init = async () => {
      const boundaryies = await getBoundaries().unwrap();
      const choroplethData = await getChartData().unwrap();
      const geoJSON = transformToGeoJSON(
        boundaryies,
        choroplethData,
        DataPointGeneratorName.noInternetProportion,
      );
      setGeoJsonFeatures(geoJSON);
    };

    init();
  }, []);
  // console.log(boundaryData);

  const counties = boundaryData
    ? _.map(boundaryData, (item) => ({
        name: item.feature.properties.NAME,
        data: item.feature,
      }))
    : [];

  const handleCountySelect: React.ChangeEventHandler<HTMLSelectElement> = (event) => {
    if (mapRef.current) {
      const countyName = event?.target.value;
      setSelectedCounty(countyName);

      const selectedCountyData = counties.find((county) => county.name === countyName);

      if (selectedCountyData?.data && mapRef.current) {
        const bounds = bbox(selectedCountyData?.data);
        mapRef.current.fitBounds(
          [
            [bounds[0], bounds[1]],
            [bounds[2], bounds[3]],
          ],
          {
            padding: 20,
          },
        );
      }
    }
  };

  return (
    <>
      {geoJsonFeatures && (
        <ChoroplethMap geoJSONFeatureCollection={geoJsonFeatures} mapRef={mapRef}>
          <select
            value={selectedCounty}
            onChange={handleCountySelect}
            className='absolute top-10 left-0 m-5 h-20 z-10 shadow-xl bg-black text-white'
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
        </ChoroplethMap>
      )}
    </>
  );
};

export default MapContainer;
