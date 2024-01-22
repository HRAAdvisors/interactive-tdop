import { useEffect, useRef, useState } from 'react';
import _ from 'lodash';
import { transformToGeoJSON } from '@/utils/transformGeoJSON';
import ChoroplethMap from './ui/ChoroplethMap';
import { Map } from 'mapbox-gl';
import { Scrollama, Step } from 'react-scrollama';
import GeoScrollCard from './GeoScrollCard';
import { DataPointGeneratorName } from '@/types/ChartIds';
import { useLazyGetBoundaryDataBulkQuery, useLazyGetChartDataBulkQuery } from '@/services/map';

const contents = [
  {
    id: 1,
    data: [
      {
        geoId: '48',
        id: '6582102b903ab0943c07dbf8',
        regionSetup: {
          peers: 'none',
          segments: 'county',
        },
      },
    ],
    dataPointName: DataPointGeneratorName.noInternetProportion,
    getContent: (_geoJSONData?: GeoJSON.FeatureCollection<GeoJSON.Geometry>) => (
      <>
        <div className='mt-2'>
          <h1 className='mt-2 text-lg font-semibold text-gray-800'>First Card</h1>
          <p className='mt-2 text-gray-600 '>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora expedita dicta totam
            aspernatur doloremque. Excepturi iste iusto eos enim reprehenderit nisi, accusamus
            delectus nihil quis facere in modi ratione libero!
          </p>
        </div>
      </>
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
        id: '65a6952ca3f05308cc4f280c',
        regionSetup: {
          peers: 'none',
          segments: 'county',
        },
      },
    ],
    dataPointName: DataPointGeneratorName.hispeedShare,
    getContent: (_geoJSONData?: GeoJSON.FeatureCollection<GeoJSON.Geometry>) => (
      <>
        <div className='mt-2'>
          <h1 className='mt-2 text-lg font-semibold text-gray-800'>Sceond</h1>

          <p className='mt-2 text-gray-600 s'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora expedita dicta totam
            aspernatur doloremque. Excepturi iste iusto eos enim reprehenderit nisi, accusamus
            delectus nihil quis facere in modi ratione libero!
          </p>
        </div>
      </>
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
  const mapRef = useRef<Map>(null);

  const [input, setInput] = useState<any>(_.first(contents));

  const [geoJsonFeatures, setGeoJsonFeatures] = useState<
    GeoJSON.FeatureCollection<GeoJSON.Geometry> | undefined
  >();

  const [getBoundaries] = useLazyGetBoundaryDataBulkQuery();
  const [getChartData] = useLazyGetChartDataBulkQuery();

  useEffect(() => {
    const init = async () => {
      const boundaryies = await getBoundaries(input.data).unwrap();
      const choroplethData = await getChartData(input.data).unwrap();
      const geoJSON = transformToGeoJSON(boundaryies, choroplethData, input.dataPointName);

      const dataPoint = _.map(geoJSON.features, (f) => f.properties?.dataPoint);
      console.log(dataPoint);
      setGeoJsonFeatures(geoJSON);
    };

    init();
  }, [input]);

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
            <div>
              <GeoScrollCard>
                <>{d.getContent(geoJsonFeatures)}</>
              </GeoScrollCard>
            </div>
          </Step>
        ))}
      </Scrollama>
    </div>
  );
};

export default GeoScrollytelling;
