// App.js
// import { useEffect, useState } from 'react';
// import HeroLayout from '@/components/HeroLayout';
// import { animateScroll as scroll } from 'react-scroll';
// import Navbar from '@/components/Navbar';
import NavbarPlain from '@/components/NavbarPlain';
import Sidebar from '@/components/Sidebar';

const DataDashboards = () => {
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
      {/* <Navbar show={showNav} /> */}
      <NavbarPlain />
      <Sidebar />
      {/* <HeroLayout
        leftButtonLink='/'
        leftButtonText='Interactive TDOP'
        rightButtonLink='/geoIntro'
        rightButtonText='Geographic Intro'
      /> */}
      <div>
        <p className='p-80 text-4xl'>Under Development</p>
      </div>
    </>
  );
};

export default DataDashboards;
