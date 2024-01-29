import { DataPointGeneratorName } from '@/types/ChartIds';
import { Map } from 'mapbox-gl';
import { getColorStops } from '@/utils/getColorStop';
import SplitPaneMap from './ui/SplitPaneMap';
import Legend from './ui/Legend';
import { useGetGeoJSON } from '@/utils/customHooks';
import { useRef } from 'react';

const params = [
  {
    geoId: '48',
    id: '65a6952ca3f05308cc4f280c',
    regionSetup: {
      peers: 'none',
      segments: 'county',
    },
  },
];

const SplitPaneMapContainer = () => {
  const leftMap = useRef<Map>();
  const rightMap = useRef<Map>();

  const { geoJsonFeatures: geoJsonFeaturesLeft } = useGetGeoJSON(
    params,
    DataPointGeneratorName.lowIncomeHispeedShare,
  );
  const { geoJsonFeatures: geoJsonFeaturesRight } = useGetGeoJSON(
    params,
    DataPointGeneratorName.hispeedShare,
  );

  return (
    <div className='w-full h-screen p-2 flex bg-basic flex-col lg:flex-row'>
      <div className='lg:w-1/2 w-full flex items-center justify-center'>
        <div className='lg:max-w-md px-12 py-8 bg-white z-30 rounded-lg shadow-md w-full  min-h-[400px]'>
          <div className='mt-2'>
            <h3 className='text-xl font-bold uppercase my-5'>Money Matters</h3>
            <div className='mt-2 text-md'>
              <p className='pt-2 mb-4'>
                Many people do not have high speed internet because it's too expensive.{' '}
              </p>
              <div className='flex w-full'>
                <div className='w-1/2 pr-4'>
                  {geoJsonFeaturesLeft && (
                    <Legend colorStops={getColorStops(geoJsonFeaturesLeft)} />
                  )}
                  <p className='mt-4 font-bold text-xs'>
                    Percent of Low-Income Households with no internet access{' '}
                  </p>
                </div>
                <div className='w-1/2 pl-4'>
                  {geoJsonFeaturesRight && (
                    <Legend colorStops={getColorStops(geoJsonFeaturesRight, 'red')} />
                  )}
                  <p className='mt-4 font-bold text-xs'>
                    Percent of all Households with no internet access{' '}
                  </p>
                </div>
              </div>
              <p className='text-xs py-2'>Source: ACS 5-Year Estimates, 2017-2021)</p>
            </div>
          </div>
        </div>
      </div>
      <div className='lg:w-1/2 w-full flex items-center justify-center p-2 drop-shadow'>
        <SplitPaneMap
          leftMapProps={{
            colorStops: geoJsonFeaturesLeft && getColorStops(geoJsonFeaturesLeft, 'blue'),
            geoJSONFeatureCollection: geoJsonFeaturesLeft,
            mapRef: leftMap,
          }}
          righMapProps={{
            colorStops: geoJsonFeaturesRight && getColorStops(geoJsonFeaturesRight, 'red'),
            geoJSONFeatureCollection: geoJsonFeaturesRight,
            mapRef: rightMap,
          }}
          containerClassName='max-w-[600px]'
          width='100%'
          height='80vh'
        />
      </div>
    </div>
  );
};

export default SplitPaneMapContainer;
