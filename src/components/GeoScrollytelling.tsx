import { useEffect, useRef, useState } from 'react';
import _ from 'lodash';
import { useGetBoundaryDataBulkMutation, useGetChartDataBulkMutation } from '@/services/map';
import { getAggregateChartData, transformToGeoJSON } from '@/utils/transformGeoJSON';
import ChoroplethMap from './ui/ChoroplethMap';
import { Map } from 'mapbox-gl';
import { Scrollama, Step } from 'react-scrollama';
import GeoScrollCard from './GeoScrollCard';

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
    getContent: (geoJSONData?: GeoJSON.FeatureCollection<GeoJSON.Geometry>) => (
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
  },
  {
    id: 2,
    data: [
      {
        geoId: '49',
        id: '6582102b903ab0943c07dbf8',
        regionSetup: {
          peers: 'none',
          segments: 'county',
        },
      },
    ],
    getContent: (geoJSONData?: GeoJSON.FeatureCollection<GeoJSON.Geometry>) => (
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
  },
];

const GeoScrollytelling = () => {
  const mapRef = useRef<Map>(null);

  const [input, setInput] = useState<any>(_.first(contents)?.data);

  const [geoJsonFeatures, setGeoJsonFeatures] = useState<
    GeoJSON.FeatureCollection<GeoJSON.Geometry> | undefined
  >();

  const [getBoundaries] = useGetBoundaryDataBulkMutation();
  const [getChartData] = useGetChartDataBulkMutation();

  useEffect(() => {
    const init = async () => {
      const boundaryies = await getBoundaries(input).unwrap();
      const choroplethData = await getChartData(input).unwrap();
      const aggregateChartData = getAggregateChartData(choroplethData.data);
      const geoJSON = transformToGeoJSON(
        aggregateChartData,
        boundaryies,
      ) as GeoJSON.FeatureCollection<GeoJSON.Geometry>;
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
          <Step data={d.data} key={i + 1} debug>
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
