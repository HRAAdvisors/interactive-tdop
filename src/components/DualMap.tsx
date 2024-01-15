import MapContainer from './MapContainer';

const DualMap = () => {
  return (
    <div className='flex w-full h-screen'>
      <div className='w-1/2 h-full'>
        <MapContainer />
      </div>
      <div className='w-1/2 h-full'>
        <MapContainer />
      </div>
    </div>
  );
};

export default DualMap;
