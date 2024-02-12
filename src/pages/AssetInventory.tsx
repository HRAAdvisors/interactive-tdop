// App.js
// import { useEffect, useState } from 'react';
// import HeroLayout from '@/components/HeroLayout';
// import { animateScroll as scroll } from 'react-scroll';
// import GeoScrollytelling from '@/pages/geoScrollytelling/GeoScrollytelling';
// import Navbar from '@/components/Navbar';
import AssetInventory from '@/components/AssetInventory/Index';
import Navbar from '@/components/Navbar';
import SideNav from '@/components/SIdeNav';

const AssetInventoryPage = () => {
  return (
    <>
      <Navbar shouldShowAllTime={true} />
      <SideNav />
      <div className='w-full py-4 mx-auto'>
        <AssetInventory />
      </div>
    </>
  );
};

export default AssetInventoryPage;
