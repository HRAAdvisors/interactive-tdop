import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import SideNav from '@/components/SIdeNav';
import AssetInventory from '@/components/assetInventoryNew';

import HeroLayout from '@/components/HeroLayout';
import assetInventoryHero from '@/assets/AssetHero.jpg';
import AboutAssetInventory from '@/components/assetInventoryNew/AboutAssetInventory';

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
                Welcome! This site offers an interactive tool to explore the digital opportunity
                resources currently operating in the state of Texas.
              </strong>{' '}
              <br></br>
              <br></br>
              Scroll below, filter using the dropdown menus, and click through the results to find
              support for your digital opportunity need across Texas.
            </p>
          </>
        }
        imageHero={assetInventoryHero}
      />
      <div className='w-full  pt-16 mx-auto'>
        <div className='w-full flex flex-col'>
          <AssetInventory />
          <AboutAssetInventory />
        </div>
      </div>
      {/* <div className='bg-[#ececec] grid md:grid-cols-12'>
        <div className='flex flex-col md:col-start-3 px-4 md:px-0 md:col-span-12'>
          <p className='py-8'>© 2024 Texas Broadband Development Office | All rights reserved</p>
        </div>
      </div> */}
    </>
  );
};

export default AssetInventoryPage;
