import { useRef } from 'react';
import _ from 'lodash';

interface GeoScrollCardProps {
  children: React.ReactNode | React.ReactNode[] | string;
}

const GeoScrollCard = ({ children }: GeoScrollCardProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div className='h-screen z-10 relative bg-transparent' ref={containerRef}>
      <div className='max-w-2xl px-10 py-6 bg-white rounded-lg shadow-md w-96 top-44 left-32 absolute min-h-[400px]'>
        <div className='mt-2'>{children}</div>
      </div>
    </div>
  );
};

export default GeoScrollCard;
