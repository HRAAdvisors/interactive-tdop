import { useEffect, useRef, useState } from 'react';
import _ from 'lodash';
import AOS from 'aos';
import { animateScroll as scroll } from 'react-scroll';
import { useGetBoundaryDataBulkMutation, useGetChartDataBulkMutation } from '@/services/map';
import { getAggregateChartData, transformToGeoJSON } from '@/utils/transformGeoJSON';
import ChoroplethMap from './ui/ChoroplethMap';
import { Map } from 'mapbox-gl';
import { Scrollama, Step } from 'react-scrollama';

interface GeoScrollCardProps {
  children: React.ReactNode | React.ReactNode[] | string;
}

const GeoScrollCard = ({ children }: GeoScrollCardProps) => {
  const [isScrollingUp, setIsScrollingUp] = useState<boolean>(Boolean);
  const containerRef = useRef<HTMLDivElement>(null);

  const scrollToEnd: React.WheelEventHandler<HTMLElement> = _.debounce((e) => {
    const containerElm = containerRef.current;

    if (containerElm) {
      e.preventDefault();
      if (e.deltaY > 0) {
        setIsScrollingUp(true);
        AOS.refresh();
        scroll.scrollTo(containerElm.offsetTop + containerElm.offsetHeight);
      } else if (e.deltaY < 0) {
        setIsScrollingUp(false);
        AOS.refresh();
        scroll.scrollTo(containerElm.offsetTop - containerElm.offsetHeight);
      }
    }
  }, 100);

  return (
    <div className='h-screen z-10 relative bg-transparent' ref={containerRef}>
      <div
        className='max-w-2xl px-10 py-6 bg-white rounded-lg shadow-md w-96 top-44 left-32 absolute min-h-[400px]'
        data-aos={isScrollingUp ? 'fade-down' : 'fade-up'}
        data-aos-duration='750'
        onWheel={scrollToEnd}
      >
        <div className='mt-2'>{children}</div>
      </div>
    </div>
  );
};

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
  },
];

// interface GeoScrollViewProps {
//   cardContent?: (
//     geoFeatureCollection: GeoJSON.FeatureCollection<GeoJSON.Geometry>,
//   ) => React.ReactNode | string;
// }

const GeoScrollView = () => {
  const mapRef = useRef<Map>(null);

  const [input, setInput] = useState<any>(_.first(contents)?.data);

  const [geoJsonFeatures, setGeoJsonFeatures] =
    useState<GeoJSON.FeatureCollection<GeoJSON.Geometry> | null>(null);

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
            <div className='h-screen'>
              <GeoScrollCard>
                <>lol</>
              </GeoScrollCard>
            </div>
          </Step>
        ))}
      </Scrollama>
    </div>
  );
};

export default GeoScrollView;
