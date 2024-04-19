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
        altText='A bridge with lights on it.'
        title='Texas Resource Finder'
      />
      <div className='w-full  pt-16 mx-auto'>
        <div className='w-full flex flex-col'>
          <AssetInventory />
          <AboutAssetInventory />
        </div>
      </div>
      <div className='grid bg-[#ececec] md:grid-cols-12'>
        <div className='flex flex-col md:col-start-3 px-4 md:px-0 md:col-span-12'>
          <p className='pt-8 pb-4'>
            © 2024 Texas Broadband Development Office and Texas Comptroller of Public Accounts
          </p>
          <p className='pb-8'>
            All Rights Reserved |{' '}
            <a
              href='https://comptroller.texas.gov/about/policies/privacy.php'
              target='_blank'
              rel='noopener'
              className='underline md:hover:text-[#fff] md:hover:bg-[#002768] md:hover:no-underline p-[0.25rem] transition-colors duration-300'
            >
              Privacy Policy
            </a>
            |{' '}
            <a
              href='https://texas-dashboard-data.s3.amazonaws.com/Texas+Digital+Opportunity+Hub_Data.xlsx'
              target='_blank'
              rel='noopener'
              className='underline md:hover:text-[#fff] md:hover:bg-[#002768] md:hover:no-underline p-[0.25rem] transition-colors duration-300'
            >
              Data Download
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default AssetInventoryPage;
