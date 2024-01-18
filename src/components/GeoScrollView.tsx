import { useRef, useEffect, useState } from 'react';
import { Map } from 'mapbox-gl';
import {
  GeoData,
  useGetBoundaryDataBulkMutation,
  useGetChartDataBulkMutation,
} from '@/services/map';
import _ from 'lodash';
import { getAggregateChartData, transformToGeoJSON } from '@/utils/transformGeoJSON';
import ChoroplethMap from './ui/ChoroplethMap';
import AOS from 'aos';
import { animateScroll as scroll } from 'react-scroll';
import { DataPointGeneratorName } from '@/types/ChartIds';

interface GeoScrollViewProps {
  cardContent: (
    geoFeatureCollection: GeoJSON.FeatureCollection<GeoJSON.Geometry>,
  ) => React.ReactNode | string;
  input?: GeoData[];
}

const GeoScrollView = ({ cardContent, input }: GeoScrollViewProps) => {
  const mapRef = useRef<Map>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isScrollingUp, setIsScrollingUp] = useState(false);

  const [geoJsonFeatures, setGeoJsonFeatures] =
    useState<GeoJSON.FeatureCollection<GeoJSON.Geometry> | null>(null);

  const [getBoundaries] = useGetBoundaryDataBulkMutation();
  const [getChartData] = useGetChartDataBulkMutation();

  useEffect(() => {
    const init = async () => {
      const boundaryies = await getBoundaries(input).unwrap();
      const choroplethData = await getChartData(input).unwrap();
      const geoJSON = transformToGeoJSON(
        boundaryies,
        choroplethData,
        DataPointGeneratorName.hispeedShare,
      );
      setGeoJsonFeatures(geoJSON);
    };

    init();
  }, []);

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
    <div className='h-screen w-full' ref={containerRef}>
      {geoJsonFeatures && (
        <ChoroplethMap
          padding={{
            left: Math.round((containerRef.current?.clientWidth ?? 100) * 0.5),
            right: 30,
            top: 20,
            bottom: 20,
          }}
          geoJSONFeatureCollection={geoJsonFeatures}
          mapRef={mapRef}
        >
          <div
            className='max-w-2xl px-10 py-6 bg-white rounded-lg shadow-md w-96 z-10 top-44 left-32 absolute min-h-[400px]'
            data-aos={isScrollingUp ? 'fade-down' : 'fade-up'}
            data-aos-duration='750'
            onWheel={scrollToEnd}
          >
            <div className='mt-2'>{cardContent(geoJsonFeatures)}</div>
          </div>
        </ChoroplethMap>
      )}
    </div>
  );
};

export default GeoScrollView;
