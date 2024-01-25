/* tslint:disable */
import { useRef, useEffect, useState } from 'react';
import { Map } from 'mapbox-gl';
import _ from 'lodash';
import { transformToGeoJSON } from '@/utils/transformGeoJSON';
import ChoroplethMap from './ui/ChoroplethMap';
import { bbox } from '@turf/turf';
import { ChartId, DataPointGeneratorName } from '@/types/ChartIds';
import { useGetBoundaryDataBulkQuery, useGetChartDataBulkQuery } from '@/services/map';

interface MapContainerProps {
  chartId?: ChartId;
  dataPointerGenerator?: DataPointGeneratorName;
  shouldDropdownShow?: boolean;
}

const MapContainer = ({
  chartId = ChartId.TXAccess,
  dataPointerGenerator = DataPointGeneratorName.noInternetProportion,
  shouldDropdownShow = true,
}: MapContainerProps) => {
  const mapRef = useRef<Map>();

  const params = [
    {
      geoId: '48',
      id: chartId,
      regionSetup: {
        peers: 'none',
        segments: 'county',
      },
    },
  ];

  const [selectedCounty, setSelectedCounty] = useState('');
  const [geoJsonFeatures, setGeoJsonFeatures] =
    useState<GeoJSON.FeatureCollection<GeoJSON.Geometry> | null>(null);

  const { data: boundaries } = useGetBoundaryDataBulkQuery(params);
  const { data: choroplethData } = useGetChartDataBulkQuery(params);

  useEffect(() => {
    if (boundaries && choroplethData) {
      setGeoJsonFeatures(transformToGeoJSON(boundaries, choroplethData, dataPointerGenerator));
    }
  }, [boundaries, choroplethData]);

  // console.log(boundaryData);

  const counties = boundaries
    ? _.map(boundaries, (item) => ({
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
          {shouldDropdownShow && (
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
          )}
        </ChoroplethMap>
      )}
    </>
  );
};

export default MapContainer;
