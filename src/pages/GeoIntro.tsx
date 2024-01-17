// App.js
import { useEffect } from 'react';
import '@mantine/core/styles.css';
import NavbarPlain from '@/components/NavbarPlain';
import GeoScrollCard from '@/components/GeoScrollCard';
import HeroLayout from '@/components/HeroLayout';
import { animateScroll as scroll } from 'react-scroll';

const GeoIntro = () => {
  useEffect(() => {
    scroll.scrollTo(0, {});
  }, []);

  return (
    <>
      <NavbarPlain />
      <HeroLayout />
      <GeoScrollCard />
      <HeroLayout />
    </>
  );
};

export default GeoIntro;
