import { EventHandler, MouseEventHandler, SyntheticEvent, useRef, useState } from 'react';
import ChoroplethMap, { ChoroplethMapProps } from './ChoroplethMap';
import mapboxgl from 'mapbox-gl';

interface SplitPaneMapProps {
  leftMapProps: Partial<ChoroplethMapProps>;
  righMapProps: Partial<ChoroplethMapProps>;
  containerClassName?: string;
}

const SplitPaneMap = ({ leftMapProps, righMapProps, containerClassName }: SplitPaneMapProps) => {
  const [paneWidths, setPaneWidths] = useState([50, 50]); // Initial widths
  const dividerRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [center, setCenter] = useState<[number, number]>([-98.491142, 29.424349]);
  const [zoom, setZoom] = useState<number>(10);

  const handleDragStart: EventHandler<SyntheticEvent<any, TouchEvent | MouseEvent>> = (e) => {
    e.preventDefault();
    document.addEventListener('mousemove', handleDragMove);
    document.addEventListener('mouseup', handleDragEnd);
    document.addEventListener('touchmove', handleTouchMove);
    document.addEventListener('touchend', handleDragEnd);
  };

  const handleDragMove: (this: Document, ev: MouseEvent) => any = (e) => {
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (e.touches.length === 1) {
      e.preventDefault();
      handleMove(e.touches[0].clientX);
    }
  };

  const handleMove = (clientX: number) => {
    if (dividerRef.current && containerRef.current) {
      const dividerRect = dividerRef.current.getBoundingClientRect();
      const containerRect = containerRef.current.getBoundingClientRect();
      const x = clientX - containerRect.left;
      const leftPaneWidth = ((x - dividerRect.width / 2) / containerRect.width) * 100;
      if (leftPaneWidth <= 100 && leftPaneWidth >= 0) {
        setPaneWidths([leftPaneWidth, 100 - leftPaneWidth]);
      }
    }
  };

  const handleDragEnd = () => {
    document.removeEventListener('mousemove', handleDragMove);
    document.removeEventListener('mouseup', handleDragEnd);
    document.removeEventListener('touchmove', handleTouchMove);
    document.removeEventListener('touchend', handleDragEnd);
  };

  return (
    <div className={`relative flex justify-around ${containerClassName}`} ref={containerRef}>
      <div
        className='w-full relative z-10 h-full bg-green-200 overflow-hidden'
        style={{ width: `${paneWidths[0]}%` }}
      >
        <div className='h-full' style={{ width: containerRef.current?.clientWidth }}>
          {leftMapProps.geoJSONFeatureCollection && (
            <ChoroplethMap
              center={center}
              zoom={zoom}
              toolTipClass='z-50 absolute'
              anchor='right'
              onMove={() => {
                if (leftMapProps?.mapRef?.current) {
                  setCenter([
                    parseFloat(leftMapProps.mapRef.current.getCenter().lng.toFixed(4)),
                    parseFloat(leftMapProps.mapRef.current.getCenter().lat.toFixed(4)),
                  ]);
                  setZoom(parseFloat(leftMapProps.mapRef.current.getZoom().toFixed(2)));
                }
              }}
              onLoad={(mapRef) => {
                mapRef.scrollZoom.disable();
              }}
              syncCenterAndZoom={true}
              geoJSONFeatureCollection={leftMapProps.geoJSONFeatureCollection}
              shouldTooltipShow={true}
              showFeatureNameInTooltip={false}
              shouldFitBounds={false}
              {...leftMapProps}
            />
          )}
        </div>
      </div>
      <div
        className='absolute z-20 w-4 h-full bg-transparent'
        style={{ left: `${paneWidths[0]}%` }}
      >
        <div className='shadow bg-white w-2 h-full relative'>
          <div
            ref={dividerRef}
            onMouseDown={handleDragStart}
            onTouchStart={handleDragStart}
            className='caret-container bg-white w-4 h-20 cursor-ew-resize'
            style={{ top: '50%', left: '-50%' }}
          ></div>
        </div>
      </div>
      <div
        className='w-full h-full  bg-red-200 overflow-hidden'
        style={{ width: `${paneWidths[1]}%` }}
      >
        <div
          className='h-full absolute left-0'
          style={{ width: containerRef.current?.clientWidth }}
        >
          {righMapProps.geoJSONFeatureCollection && (
            <ChoroplethMap
              center={center}
              zoom={zoom}
              onMove={() => {
                if (righMapProps?.mapRef?.current) {
                  setCenter([
                    parseFloat(righMapProps.mapRef.current.getCenter().lng.toFixed(4)),
                    parseFloat(righMapProps.mapRef.current.getCenter().lat.toFixed(4)),
                  ]);
                  setZoom(parseFloat(righMapProps.mapRef.current.getZoom().toFixed(2)));
                }
              }}
              onLoad={(map) => {
                map.addControl(new mapboxgl.NavigationControl({ showCompass: false }));
                map.scrollZoom.disable();
              }}
              toolTipClass='z-50'
              geoJSONFeatureCollection={righMapProps.geoJSONFeatureCollection}
              syncCenterAndZoom={true}
              shouldTooltipShow={true}
              showFeatureNameInTooltip={false}
              shouldFitBounds={false}
              {...righMapProps}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default SplitPaneMap;
