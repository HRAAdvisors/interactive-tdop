import { useEffect, useRef, useState } from 'react';
import _ from 'lodash';
import { transformToGeoJSON } from '@/utils/transformGeoJSON';
import ChoroplethMap from './ui/ChoroplethMap';
import { Map } from 'mapbox-gl';
import { Scrollama, Step } from 'react-scrollama';
import { ChartId, DataPointGeneratorName } from '@/types/ChartIds';
import { useGetBoundaryDataBulkQuery, useGetChartDataBulkQuery } from '@/services/map';

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
    getContent: (_geoJSONData?: GeoJSON.FeatureCollection<GeoJSON.Geometry>) => (
      <div className='mt-2'>
        <h3 className='text-xl font-bold uppercase my-5 font-montserrat'>Subscription</h3>
        <div className='mt-2 text-xl font-helvetica'>
          <p>31% of Texas households do not subscribe to high-speed internet at home.</p>
          <p>
            Statewide, region A, region, and region C have the lowest rates of high-speed internet
            subscription at home.
          </p>
        </div>
      </div>
    ),
    colorStops: [
      { step: 0.05, color: '#C9DCF7' },
      { step: 0.15, color: '#96AFD3' },
      { step: 0.25, color: '#6481B0' },
      { step: 0.35, color: '#32548C' },
      { step: 0.45, color: '#002768' },
    ],
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
    getContent: (_geoJSONData?: GeoJSON.FeatureCollection<GeoJSON.Geometry>) => (
      <div className='mt-2'>
        <h3 className='text-xl font-bold uppercase my-5 font-montserrat'>Access</h3>
        <div className='mt-2 text-xl font-helvetica'>
          <p className='py-2'>
            31% of Texas households do not subscribe to high-speed internet at home.
          </p>
          <p className='py-2'>
            Statewide, region A, region, and region C have the lowest rates of high-speed internet
            subscription at home.
          </p>
        </div>
      </div>
    ),
    colorStops: [
      { step: 0.21, color: '#C9DCF7' },
      { step: 0.51, color: '#96AFD3' },
      { step: 0.61, color: '#6481B0' },
      { step: 0.71, color: '#32548C' },
      { step: 0.81, color: '#002768' },
    ],
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
    <div className='w-full'>
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
            colorStops={input?.colorStops}
            geoJSONFeatureCollection={geoJsonFeatures}
            mapRef={mapRef}
          />
        </div>
      )}
      <Scrollama
        offset={0.5}
        onStepEnter={({ data }: any) => {
          setInput(data); // Set the input based on the received data
        }}
      >
        {_.map(contents, (d, i) => (
          <Step data={d} key={i + 1} debug>
            <div className='h-screen lg:w-1/2 w-full z-10 relative bg-transparent'>
              <div className='max-w-sm px-10 py-6 bg-white rounded-lg shadow-md w-full absolute min-h-[400px] lg:inset-1/3'>
                <div className='mt-2'>{d.getContent(geoJsonFeatures)}</div>
              </div>
            </div>
          </Step>
        ))}
      </Scrollama>
    </div>
  );
};

export default GeoScrollytelling;
