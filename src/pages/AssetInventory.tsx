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
      <div className='z-20 w-full h-full bg-[#FFFDF6] md:overflow-x-hidden'>
        <div className='block md:grid md:grid-cols-12'>
          <div className='flex flex-col justify-center content-center pt-24 md:pt-20 p-4 lg:pt-20 md:col-span-5 md:col-start-2'>
            <p className='text-[#111] text-xs uppercase tracking-widest'>
              Texas Broadband Development Office
            </p>
            <h1 className='md:text-6xl sm:text-2xl text-2xl font-semibold pt-6 uppercase tracking-widest'>
              Texas Digital Opportunity Hub
            </h1>
            <hr className='h-1 my-6'></hr>
            <p className='text-md my-2'>Coming soon!</p>
          </div>
          <div className='flex flex-col md:col-start-8 md:col-span-5 object-cover'>
            <img src='img/ComingSoon.jpg' className='h-[50vh] md:h-screen object-cover' />
          </div>
        </div>
      </div>
    </>
  );
};

export default AssetInventory;
