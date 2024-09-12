// App.js
import { useEffect } from 'react';
import HeroLayout from '@/components/HeroLayout';
import GeoScrollytelling from '@/pages/geoScrollytelling/GeoScrollytelling';
import Navbar from '@/components/Navbar';
import SideNav from '@/components/SIdeNav';

const GeoIntro = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
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
              Scroll to explore the big picture, read the Texas plan, access the Digital Opportunity
              Resource Finder, or dive deeper into data for your community.
            </p>
          </>
        }
        imageHero='img/HomeHero.jpg'
        altText='A row of powerlines'
        title='Digital Opportunity for Texans'
      />
      <GeoScrollytelling />
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

export default GeoIntro;
