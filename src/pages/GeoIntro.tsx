// App.js
import { useEffect } from 'react';
import '@mantine/core/styles.css';
import NavbarPlain from '@/components/NavbarPlain';
import HeroLayout from '@/components/HeroLayout';
import { animateScroll as scroll } from 'react-scroll';
import GeoScrollytelling from '@/components/GeoScrollytelling';

const GeoIntro = () => {
  useEffect(() => {
    scroll.scrollTo(0, {});
  }, []);

  return (
    <>
      <NavbarPlain />
      <HeroLayout />
      <GeoScrollytelling />
    </>
  );
};

export default GeoIntro;
