import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import SideNav from '@/components/SIdeNav';

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='flex flex-col'>
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
            <p className='text-md my-2'>
              <a href='https://comptroller.texas.gov/programs/broadband/' className='underline'>
                The State of Texas Broadband Development Office (BDO)
              </a>{' '}
              developed this hub to create an immersive, interactive platform to compliment the
              publication of the Texas Digital Opportunity Plan. This product was developed in
              partnership with{' '}
              <a href='https://www.hraadvisors.com/' className='underline'>
                HR&A Advisors.
              </a>
            </p>
            <p className='text-md my-2'>
              The Texas Digital Opportunity Hub was built using data from public datasets, the 2023
              Texas Digital Opportunity Survey, and the 2023 Texas Digital Resources Mapping Tool
              Survey (DRMTS).
            </p>
            <p className='text-md my-2 font-bold'>
              This is a work in progress. Do not share this product without the consent of the BDO.
            </p>
            <p className='text-md my-2'>
              Join us in creating a greater state of digital opportunity.
            </p>
          </div>
          <div className='flex flex-col md:col-start-8 md:col-span-5 object-cover'>
            <img src='img/About.jpg' className='h-[50vh] md:h-screen object-cover' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
