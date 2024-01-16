// App.js
import { ReactNode, useEffect, useState } from 'react';
import '@mantine/core/styles.css';
import GeoScrollView from '@/components/GeoScrollView';

const GeoIntro = () => {
  const [_currentSection, setCurrentSection] = useState(0);
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'instant',
    });
  }, []);

  // const scrollToSection = (sectionName: string) => {
  //   scroller.scrollTo(sectionName, {
  //     duration: 800,
  //     delay: 0,
  //     smooth: 'easeInOutQuart',
  //     offset: -50, // Adjust as needed
  //   });
  // };
  return (
    <>
      {/* {showNav && <Navbar />} */}

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
