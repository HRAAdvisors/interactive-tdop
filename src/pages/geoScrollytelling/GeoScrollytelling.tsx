import { useEffect, useRef, useState } from 'react';
import _ from 'lodash';
import { Map } from 'mapbox-gl';
import { Scrollama, Step } from 'react-scrollama';
import { getColorStops } from '@/utils/getColorStop';
import { useGetGeoJSON } from '@/utils/customHooks';
import { useLazyGetBoundaryDataBulkQuery, useLazyGetChartDataBulkQuery } from '@/services/map';
import contents, { GeoScrollContent, MapArgProps } from './GeoScrollyContent';
import ChoroplethMap from '@/components/ui/ChoroplethMap';

const GeoScrollytelling = () => {
  const mapRef = useRef<Map>();

  const [input, setInput] = useState<MapArgProps>(
    _.first(_.filter(contents, (c) => !!c.mapData))?.mapData!,
  );

  const { geoJsonFeatures } = useGetGeoJSON(input.args, input.dataPointName);

  const [fetchBoundary] = useLazyGetBoundaryDataBulkQuery();
  const [fetchChart] = useLazyGetChartDataBulkQuery();

  useEffect(() => {
    _.chain(contents)
      .filter((content, i) => i !== 0 && !!content.mapData)
      .forEach((content) => {
        fetchBoundary(content.mapData?.args);
        fetchChart(content.mapData?.args);
      })
      .value();
  }, []);

  return (
    <div className='w-full relative' style={{ height: `${_.size(contents) * 100}vh` }}>
      {geoJsonFeatures && (
        <div className='h-screen w-full sticky inset-0 float-left'>
          <ChoroplethMap
            padding={{
              left: Math.round(window.innerWidth * 0.5),
              right: 0,
              top: 50,
              bottom: 50,
            }}
            fitBoundFeature={
              input.getFitBoundaryFeature && input.getFitBoundaryFeature(geoJsonFeatures)
            }
            onLoad={() => {
              mapRef.current?.scrollZoom.disable();
            }}
            colorStops={getColorStops(geoJsonFeatures)}
            geoJSONFeatureCollection={geoJsonFeatures}
            mapRef={mapRef}
          />
        </div>
      )}
      <div className='absolute lg:w-1/2 w-full top-0 bottom-0'>
        <Scrollama
          offset={0.5}
          onStepEnter={({ data }: { data: GeoScrollContent }) => {
            if (data?.mapData) setInput(data.mapData); // Set the input based on the received data
          }}
        >
          {_.map(contents, (d, i) =>
            d.mapData ? (
              <Step data={d} key={i + 1}>
                <div className='h-screen w-full z-10 bg-transparent flex justify-center items-center'>
                  <div className='relative max-w-sm px-12 py-8 bg-white/90 z-10 rounded-lg shadow-md w-full min-h-[400px]'>
                    {d.getContent(geoJsonFeatures)}
                  </div>
                </div>
              </Step>
            ) : (
              <Step>
                <div className={`w-screen h-screen ${d.containerClassNames}`}>
                  {d.getContent(geoJsonFeatures)}
                </div>
              </Step>
            ),
          )}
        </Scrollama>
      </div>
    </div>
  );
};

export default GeoScrollytelling;
