import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import SideNav from '@/components/SIdeNav';
import AssetInventory from '@/components/assetInventoryNew';

import HeroLayout from '@/components/HeroLayout';
import assetInventoryHero from '@/assets/assetInventoryHero.png';
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
              The Texas Digital Opportunity Resource Hub is designed to help anyone find digital
              opportunity resources.
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
    </>
  );
};

export default AssetInventoryPage;
