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
        imageHero='img/Cover.webp'
        title='Digital Opportunity for Texans'
      />
      <GeoScrollytelling />
      <div className='grid bg-[#ececec] md:grid-cols-12'>
        <div className='flex flex-col md:col-start-3 px-4 md:px-0 md:col-span-12'>
          <p className='py-8'>© 2024 Texas Broadband Development Office | All rights reserved</p>
        </div>
      </div>
    </>
  );
};

export default GeoIntro;
