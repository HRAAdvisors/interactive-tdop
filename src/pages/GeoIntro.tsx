// App.js
import { ReactNode, useEffect, useState } from 'react';
import '@mantine/core/styles.css';
import { Element } from 'react-scroll';
import { useInView } from 'react-intersection-observer';
import Navbar from '@/components/Navbar';
import GeoScrollView from '@/components/GeoScrollView';

const FadeInSection = ({ children }: { children: ReactNode }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.01, // Adjust as needed
  });

  const props = {
    style: {
      opacity: inView ? 1 : 0,
      transition: 'opacity 0.5s',
    },
  };

  return (
    <div ref={ref} {...props}>
      {children}
    </div>
  );
};

const GeoIntro = () => {
  const [_currentSection, setCurrentSection] = useState(0);
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2; // Adjust as needed
      const newSection = Math.floor(scrollPosition / window.innerHeight);
      setCurrentSection(newSection);
      setShowNav(newSection >= 1);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
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
      {showNav && <Navbar />}
      <Element name='GeoScroll 1'>
        <FadeInSection>
          <GeoScrollView
            cardContent={() => (
              <>
                <h1 className='title-font text-lg font-medium text-gray-900 mb-3'>The Catalyzer</h1>
                <p>XX% of Texas households do not access to high-speed internet at home.</p>
                <p>
                  Statewide, region A, region, and region C have the lowest rates of high-speed
                  internet access at home.
                </p>
              </>
            )}
          />
        </FadeInSection>
      </Element>
      <Element name='Geo Scroll 2'>
        <FadeInSection>
          <GeoScrollView
            cardContent={() => (
              <>
                <h1 className='title-font text-lg font-medium text-gray-900 mb-3'> Plan</h1>
                <p>31% of Texas households do not subscribe to high-speed internet at home.</p>
                <p>
                  Statewide, region A, region, and region C have the lowest rates of high-speed
                  internet subscription at home.
                </p>
              </>
            )}
          />
        </FadeInSection>
      </Element>
      <Element name='Geo Scroll 2'>
        <FadeInSection>
          <GeoScrollView
            cardContent={() => (
              <>
                <h1 className='title-font text-lg font-medium text-gray-900 mb-3'>The Catalyzer</h1>
                <p>asas subscribe to high-speed internet at home.</p>
                <p>
                  Statewide, region A, region, and region C have the lowest rates of high-speed
                  internet subscription at home.
                </p>
              </>
            )}
          />
        </FadeInSection>
      </Element>
    </>
  );
};

export default GeoIntro;
