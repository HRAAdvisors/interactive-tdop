// App.js
import { useEffect } from 'react';
import '@mantine/core/styles.css';
import NavbarPlain from '@/components/NavbarPlain';
import HeroLayout from '@/components/HeroLayout';
import { animateScroll as scroll } from 'react-scroll';
import GeoScrollytelling from '@/pages/geoScrollytelling/GeoScrollytelling';

const GeoIntro = () => {
  useEffect(() => {
    scroll.scrollTo(0, {});
  }, []);

  return (
    <>
      <NavbarPlain />
      <HeroLayout
        leftButtonLink='/'
        leftButtonText='Interactive TDOP'
        rightButtonLink='/dataDashboards'
        rightButtonText='Data Dashboards'
      />
      <GeoScrollytelling />
    </>
  );
};

export default GeoIntro;
