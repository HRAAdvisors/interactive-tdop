/* tslint:disable */
import { useRef, useState } from 'react';
import { Map } from 'mapbox-gl';
import _ from 'lodash';
import ChoroplethMap from './ui/ChoroplethMap';
import { bbox } from '@turf/turf';
import { ChartId, DataPointGeneratorName, SegmentId } from '@/types/ChartIds';
import { getColorStops } from '@/utils/getColorStop';
import Legend from './ui/Legend';
import { useGetGeoJSON } from '@/utils/customHooks';

interface MapContainerProps {
  chartId?: ChartId;
  segmentId?: SegmentId;
  dataPointerGenerator?: DataPointGeneratorName;
  shouldDropdownShow?: boolean;
  mapSource?: string;
}

const MapContainer = ({
  chartId = ChartId.TXAccess,
  dataPointerGenerator = DataPointGeneratorName.noInternetProportion,
  segmentId = SegmentId.counties,
  shouldDropdownShow = true,
  mapSource = 'Source',
}: MapContainerProps) => {
  const mapRef = useRef<Map>();

  const params = [
    {
      geoId: '48',
      id: chartId,
      regionSetup: {
        peers: 'none',
        segments: segmentId,
      },
    },
  ];

  const [selectedCounty, setSelectedCounty] = useState('');
  const { geoJsonFeatures, boundaryData } = useGetGeoJSON(params, dataPointerGenerator);

  const colorStops = geoJsonFeatures ? getColorStops(geoJsonFeatures) : null;

  // console.log(boundaryData);

  const counties = boundaryData?.boundaries
    ? _.map(boundaryData.boundaries, (item) => ({
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
        <>
          <ChoroplethMap
            geoJSONFeatureCollection={geoJsonFeatures}
            colorStops={getColorStops(geoJsonFeatures)}
            mapRef={mapRef}
          >
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
          <div className='my-4 text-xs'>
            {' '}
            <span className='uppercase underline'>Source</span>: {mapSource}
          </div>
          <div className='pb-8'>{colorStops && <Legend colorStops={colorStops} />}</div>
        </>
      )}
    </>
  );
};

export default MapContainer;
