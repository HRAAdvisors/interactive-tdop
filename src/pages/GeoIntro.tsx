// App.js
import { useEffect } from 'react';
import HeroLayout from '@/components/HeroLayout';
import GeoScrollytelling from '@/pages/geoScrollytelling/GeoScrollytelling';
import Navbar from '@/components/Navbar';
import SideNav from '@/components/SIdeNav';

const GeoIntro = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <SideNav />
      <HeroLayout
        landingText={
          <>
            <p>
              <strong>
                Welcome! This site provides in-depth information about the digital divide and
                digital opportunity in Texas.
              </strong>{' '}
              <br></br>
              <br></br>
              Scroll to explore the big picture, read Texas's plan, access the Digital Opportunity
              Resource Finder, or dive deeper into data for your community.
            </p>
          </>
        }
        imageHero='img/1.jpg'
      />
      <GeoScrollytelling />
    </>
  );
};

export default GeoIntro;
