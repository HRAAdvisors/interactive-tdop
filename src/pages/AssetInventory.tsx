// App.js
// import { useEffect, useState } from 'react';
// import HeroLayout from '@/components/HeroLayout';
// import { animateScroll as scroll } from 'react-scroll';
// import GeoScrollytelling from '@/pages/geoScrollytelling/GeoScrollytelling';
// import Navbar from '@/components/Navbar';
import Navbar from '@/components/Navbar';
import SideNav from '@/components/SIdeNav';

const AssetInventory = () => {
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
      <Navbar shouldShowAllTime={true} />
      <SideNav />
    </>
  );
};

export default AssetInventory;
