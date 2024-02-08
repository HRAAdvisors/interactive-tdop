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
        leftButtonLink='/interactivetdop'
        leftButtonText='Texas Digital Opportunity Plan'
        rightButtonLink='/data-dashboards'
        rightButtonText='Data Dashboards'
        imageHero='img/1.jpg'
      />
      <GeoScrollytelling />
    </>
  );
};

export default GeoIntro;
