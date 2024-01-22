import { useRef, useState } from 'react';
import MapContainer from './MapContainer';

const OverlaySplitCard = () => {
  const [paneWidths, setPaneWidths] = useState([50, 50]); // Initial widths
  const dividerRef = useRef(null);
  const containerRef = useRef(null);

  const handleDragStart = (e) => {
    e.preventDefault();

    document.addEventListener('mousemove', handleDragMove);
    document.addEventListener('mouseup', handleDragEnd);
  };

  const handleDragMove = (e) => {
    const dividerRect = dividerRef.current.getBoundingClientRect();
    const totalWidth = containerRef.current.clientWidth;

    const leftPaneWidth = ((e.clientX - dividerRect.width / 2) / totalWidth) * 100;
    if (leftPaneWidth <= 100) {
      const rightPaneWidth = 100 - leftPaneWidth;
      setPaneWidths([leftPaneWidth, rightPaneWidth]);
    }
  };

  const handleDragEnd = () => {
    document.removeEventListener('mousemove', handleDragMove);
    document.removeEventListener('mouseup', handleDragEnd);
  };

  return (
    <div className='w-full h-screen'>
      <div className='w-96 relative h-96' ref={containerRef}>
        <div
          className='w-full left-0 h-full absolute p-6 bg-green-200 border border-gray-200 rounded-lg shadow'
          style={{ width: `${paneWidths[0]}%` }}
        >
          <MapContainer />
        </div>
        <div
          ref={dividerRef}
          onMouseDown={handleDragStart}
          className='absolute z-10 w-2 h-full bg-white cursor-ew-resize'
          style={{ left: `${paneWidths[0]}%` }}
        ></div>
        <div
          className='w-full right-0 h-full absolute p-6 bg-red-200 border border-gray-200 rounded-lg shadow'
          style={{ width: `${paneWidths[1]}%` }}
        >
          <MapContainer />
        </div>
      </div>
    </div>
  );
};

export default OverlaySplitCard;
