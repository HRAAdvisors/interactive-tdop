/* tslint:disable */
import mapboxgl, { Map } from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { useRef } from 'react';

mapboxgl.accessToken =
  'pk.eyJ1IjoiZWRkaWVqb2VhbnRvbmlvIiwiYSI6ImNscGhtbmo1cTAzbjcyanRiMG9wcWJuZWIifQ.yG4IQ3nHdGUlgZCBkq9-Jw';

const ChoroplethMap = () => {
  const mapContainerRef = useRef(null);
  const map = useRef<Map>(null);

  return (
    <div className='relative w-full h-full'>
      {/* <select
        value={selectedCounty}
        onChange={handleCountySelect}
        className='absolute top-10 left-0 m-5 h-10 z-10 shadow-xl bg-black text-white'
      >
        <option value='' className='bg-black'>
          Zoom to...
        </option>
        {counties.map((county, index) => (
          <option key={index} value={county.name} className='bg-black'>
            {county.name}
          </option>
        ))}
      </select> */}
      <div ref={mapContainerRef} className='h-full w-full' />
    </div>
  );
};

export default ChoroplethMap;
