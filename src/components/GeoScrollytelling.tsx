import { useEffect, useRef, useState } from 'react';
import _ from 'lodash';
import { transformToGeoJSON } from '@/utils/transformGeoJSON';
import ChoroplethMap from './ui/ChoroplethMap';
import { Map } from 'mapbox-gl';
import { Scrollama, Step } from 'react-scrollama';
import { ChartId, DataPointGeneratorName } from '@/types/ChartIds';
import { useGetBoundaryDataBulkQuery, useGetChartDataBulkQuery } from '@/services/map';
import { getColorStops } from '@/utils/getColorStop';
import Legend from './ui/Legend';
import SplitPaneMapContainer from './SplitPaneMapContainer';

const contents = [
  {
    id: 1,
    data: [
      {
        geoId: '48',
        id: ChartId.TXAccess,
        regionSetup: {
          peers: 'none',
          segments: 'county',
        },
      },
    ],
    dataPointName: DataPointGeneratorName.noInternetProportion,
    getContent: (geoJSONData?: GeoJSON.FeatureCollection<GeoJSON.Geometry>) => (
      <div className='mt-2'>
        <h3 className='text-xl font-bold uppercase my-5 font-montserrat'>Subscription</h3>
        <div className='mt-2 text-xl font-helvetica text-justify'>
          <p className='py-2'>
            31% of Texas households do not subscribe to high-speed internet at home.
          </p>
          <p className='py-2'>
            Statewide, region A, region, and region C have the lowest rates of high-speed internet
            subscription at home.
          </p>
          <div className='mt-2'></div>
          {geoJSONData && <Legend colorStops={getColorStops(geoJSONData)} />}
          <p className='mt-2 font-bold text-xs'>
            Percent of Households with high-speed access at home
          </p>
          <p className='text-xs'>Source: Federal Communications Commission (FCC)</p>
        </div>
      </div>
    ),
  },
  {
    id: 2,
    data: [
      {
        geoId: '48',
        id: ChartId.TXAdoption,
        regionSetup: {
          peers: 'none',
          segments: 'county',
        },
      },
    ],
    dataPointName: DataPointGeneratorName.hispeedShare,
    getContent: (geoJSONData?: GeoJSON.FeatureCollection<GeoJSON.Geometry>) => (
      <div className='mt-2'>
        <h3 className='text-xl font-bold uppercase my-5 font-montserrat'>Subscription</h3>
        <div className='mt-2 text-xl font-helvetica text-justify'>
          <p className='py-2'>
            31% of Texas households do not subscribe to high-speed internet at home.
          </p>
          <p className='py-2'>
            Statewide, region A, region, and region C have the lowest rates of high-speed internet
            subscription at home.
          </p>
          <div className='mt-2'></div>
          {geoJSONData && <Legend colorStops={getColorStops(geoJSONData)} />}
          <p className='mt-2 font-bold text-xs'>
            Percent of Households with high-speed internet at home
          </p>
          <p className='text-xs'>Source: ACS 5-Year Estimates, 2017-2021</p>
        </div>
      </div>
    ),
  },
];

const GeoScrollytelling = () => {
  const mapRef = useRef<Map>();

  const [input, setInput] = useState<any>(_.first(contents));

  const [geoJsonFeatures, setGeoJsonFeatures] = useState<
    GeoJSON.FeatureCollection<GeoJSON.Geometry> | undefined
  >();

  const { data: boundaryData } = useGetBoundaryDataBulkQuery(input.data);
  const { data: choroplethData } = useGetChartDataBulkQuery(input.data);
  useEffect(() => {
    if (boundaryData && choroplethData && choroplethData.id == input.data[0].id) {
      const geoJSON = transformToGeoJSON(boundaryData, choroplethData, input.dataPointName);
      setGeoJsonFeatures(geoJSON);
    }
  }, [boundaryData, choroplethData]);

  return (
    <div className='w-full relative' style={{ height: `${(_.size(contents) + 1) * 100}vh` }}>
      {geoJsonFeatures && (
        <div
          className='h-screen w-full sticky inset-0 float-left'
          // style={{
          //   transform: 'translatey(-100vh)',
          //   transformOrigin: '0% 0%',
          // }}
        >
          <ChoroplethMap
            padding={{
              left: Math.round((window.innerWidth ?? 100) * 0.5),
              right: 30,
              top: 20,
              bottom: 20,
            }}
            onLoad={() => {
              mapRef.current?.scrollZoom.disable();
            }}
            colorStops={getColorStops(geoJsonFeatures)}
            geoJSONFeatureCollection={geoJsonFeatures}
            mapRef={mapRef}
          />
        </div>
      )}
      <div className='absolute  w-full top-0 bottom-0'>
        <Scrollama
          offset={0.5}
          onStepEnter={({ data }: any) => {
            if (data) setInput(data); // Set the input based on the received data
          }}
        >
          {_.map(contents, (d, i) => (
            <Step data={d} key={i + 1}>
              <div className='h-screen w-full lg:w-1/2 z-10 bg-transparent flex justify-center items-center'>
                <div className='max-w-sm px-12 py-8 bg-white z-30 rounded-lg shadow-md w-full  min-h-[400px]'>
                  {d.getContent(geoJsonFeatures)}
                </div>
              </div>
            </Step>
          ))}
          <Step>
            <SplitPaneMapContainer />
          </Step>
        </Scrollama>
      </div>
    </div>
  );
};

export default GeoScrollytelling;
