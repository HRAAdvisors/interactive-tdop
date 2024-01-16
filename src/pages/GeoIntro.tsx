// App.js
import { useEffect } from 'react';
import '@mantine/core/styles.css';
import GeoScrollView from '@/components/GeoScrollView';
import NavbarPlain from '@/components/NavbarPlan';

const GeoIntro = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'instant',
    });
  }, []);

  return (
    <>
      <NavbarPlain />
      <GeoScrollView
        cardContent={() => (
          <>
            <h1 className='title-font text-lg font-medium text-gray-900 mb-3'>The Catalyzer</h1>
            <p>XX% of Texas households do not access to high-speed internet at home.</p>
            <p>
              Statewide, region A, region, and region C have the lowest rates of high-speed internet
              access at home.
            </p>
          </>
        )}
      />

      <GeoScrollView
        cardContent={() => (
          <>
            <h1 className='title-font text-lg font-medium text-gray-900 mb-3'> Plan</h1>
            <p>31% of Texas households do not subscribe to high-speed internet at home.</p>
            <p>
              Statewide, region A, region, and region C have the lowest rates of high-speed internet
              subscription at home.
            </p>
          </>
        )}
      />

      <GeoScrollView
        cardContent={() => (
          <>
            <h1 className='title-font text-lg font-medium text-gray-900 mb-3'>The Catalyzer</h1>
            <p>asas subscribe to high-speed internet at home.</p>
            <p>
              Statewide, region A, region, and region C have the lowest rates of high-speed internet
              subscription at home.
            </p>
          </>
        )}
      />
    </>
  );
};

export default GeoIntro;
