// App.js
// import { useEffect, useState } from 'react';
// import HeroLayout from '@/components/HeroLayout';
// import { animateScroll as scroll } from 'react-scroll';
// import GeoScrollytelling from '@/pages/geoScrollytelling/GeoScrollytelling';
// import Navbar from '@/components/Navbar';
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import SideNav from '@/components/SIdeNav';
import AssetInventory from '@/components/assetInventoryNew';
import AssetInventoryOld from '@/components/AssetInventory/Index';

import HeroLayout from '@/components/HeroLayout';

const AssetInventoryPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Navbar shouldShowAllTime={true} />
      <SideNav />
      <HeroLayout
        landingText={
          <>
            <p>
              <strong>
                Welcome! This site provides in-depth information about the digital divide and
                digital opportunity in Texas.
              </strong>{' '}
              <br></br>
              <br></br>
              Scroll to explore the big picture, read Texas's plan, access the Digital Opportunity
              Resource Finder, or dive deeper into data for your community.
            </p>
          </>
        }
        imageHero='img/Cover.webp'
      />
      <div className='w-full  pt-16 mx-auto'>
        <div className='w-full flex'>
          {/* <AssetInventoryOld /> */}

          <AssetInventory />
        </div>
      </div>
    </>
  );
};

export default AssetInventoryPage;
