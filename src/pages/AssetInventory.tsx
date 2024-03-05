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
                Welcome to the Resource Finder - an interactive tool for exploring the digital
                opportunity resources available in Texas.
              </strong>{' '}
              <br></br>
              <br></br>
              Scroll, filter using the dropdown menus, and click through the results to find support
              for digital opportunity needs across Texas.
            </p>
          </>
        }
        imageHero={assetInventoryHero}
        title='Texas Resource Finder'
      />
      <div className='w-full  pt-16 mx-auto'>
        <div className='w-full flex flex-col'>
          <AssetInventory />
          <AboutAssetInventory />
        </div>
      </div>
      <div className='bg-[#ececec] grid md:grid-cols-12'>
        <div className='flex flex-col md:col-start-3 px-4 md:px-0 md:col-span-12'>
          <p className='py-8'>© 2024 Texas Broadband Development Office | All rights reserved</p>
        </div>
      </div>
    </>
  );
};

export default AssetInventoryPage;
