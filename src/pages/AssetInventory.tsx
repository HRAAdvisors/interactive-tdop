// App.js
// import { useEffect, useState } from 'react';
// import HeroLayout from '@/components/HeroLayout';
// import { animateScroll as scroll } from 'react-scroll';
// import GeoScrollytelling from '@/pages/geoScrollytelling/GeoScrollytelling';
// import Navbar from '@/components/Navbar';
import { useEffect } from 'react';
import AssetInventory from '@/components/AssetInventory/Index';
import Navbar from '@/components/Navbar';
import SideNav from '@/components/SIdeNav';

const AssetInventoryPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Navbar shouldShowAllTime={true} />
      <SideNav />
      <div className='w-full max-w-screen-xl py-8 mx-auto'>
        <AssetInventory />
      </div>
    </>
  );
};

export default AssetInventoryPage;
