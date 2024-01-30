// App.js
// import { useEffect, useState } from 'react';
import '@mantine/core/styles.css';
// import HeroLayout from '@/components/HeroLayout';
// import { animateScroll as scroll } from 'react-scroll';
// import GeoScrollytelling from '@/pages/geoScrollytelling/GeoScrollytelling';
// import Navbar from '@/components/Navbar';
import NavbarPlain from '@/components/NavbarPlain';

const AboutPage = () => {
  // const [showNav, setShowNav] = useState(false);
  // let lastScrollY = window.scrollY; // Initialize lastScrollY outside of the useEffect
  // useEffect(() => {
  //   scroll.scrollTo(0, {});
  // }, []);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const currentScrollY = window.scrollY;
  //     const isScrollingUp = currentScrollY < lastScrollY;

  //     setShowNav(isScrollingUp);
  //     lastScrollY = currentScrollY; // Update lastScrollY for the next scroll event
  //   };

  //   window.addEventListener('scroll', handleScroll);

  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

  return (
    <>
      <NavbarPlain />
    </>
  );
};

export default AboutPage;
