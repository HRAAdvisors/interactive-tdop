import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import SideNav from '@/components/SIdeNav';
// import { GrGroup } from 'react-icons/gr';
// import AboutContent from '@/components/AboutContent';

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar shouldShowAllTime={true} />
      <SideNav />
      <div className='z-20 w-full h-full bg-[#FFFDF6] md:overflow-x-hidden'>
        <div className='block lg:grid lg:grid-cols-12'>
          <div className='flex flex-col justify-center content-center pt-24 md:pt-24 p-4 lg:pt-[5.5rem] md:col-span-5 md:col-start-2'>
            <p className='text-[#111] text-xs uppercase tracking-widest'>
              Texas Broadband Development Office
            </p>
            <h1 className='md:text-6xl sm:text-2xl text-2xl font-semibold pt-6 uppercase tracking-widest'>
              The Digital Opportunity Hub
            </h1>
            <hr className='h-1 my-6'></hr>
            <p className='text-md my-2'>
              <a
                href='https://comptroller.texas.gov/programs/broadband/'
                className='underline md:hover:text-[#ececec] transition-colors duration-300'
              >
                The State of Texas Broadband Development Office (BDO)
              </a>{' '}
              developed this accessible, interactive platform to invite participation in the
              advancement of digital opportunity for all Texans. The Hub complements the publication
              of the Texas Digital Opportunity Plan. The BDO developed this site in partnership
              with {' '}
              <a
                href='https://www.hraadvisors.com/'
                className='underline md:hover:text-[#ececec] transition-colors duration-300'
              >
                HR&A Advisors.
              </a>
            </p>
            <p className='text-md my-2'>
              The Texas Digital Opportunity Hub utilizes data from public datasets including the
              Census Bureau's{' '}
              <a
                href='https://www.census.gov/data/developers/data-sets/acs-5year/2021.html'
                className='underline md:hover:text-[#ececec] transition-colors duration-300'
              >
                American Community Survey 5-Year Estimates
              </a>{' '}
              and the Federal Communication Commission's{' '}
              <a
                href='https://www.fcc.gov/BroadbandData'
                className='underline md:hover:text-[#ececec] transition-colors duration-300'
              >
                Broadband Data Collection
              </a>
              , as well as the{' '}
              <a
                href='https://comptroller.texas.gov/programs/broadband/outreach/communities/docs/tdops-survey.pdf'
                className='underline md:hover:text-[#ececec] transition-colors duration-300'
              >
                2023 Texas Digital Opportunity Survey
              </a>{' '}
              and the{' '}
              <a
                href='https://comptroller.texas.gov/programs/broadband/outreach/communities/docs/drmts-preview.pdf'
                className='underline md:hover:text-[#ececec] transition-colors duration-300'
              >
                2023 Texas Digital Resources Mapping Tool Survey (DRMTS)
              </a>
              .
            </p>
            <p className='text-md my-2'>
              The Hub offers resources to understand the current state of digital opportunity in
              Texas and the State’s plan to expand it for all Texans; to build opportunities and
              solutions for Texas communities and geographies; and to find digital opportunity
              resources across the state.
            </p>
            <p className='text-md mt-2 mb-8'>
              BDO invites your feedback on the Hub{' '}
              <a
                className='underline md:hover:text-[#ececec] transition-colors duration-300'
                href='mailto:digital.opportunity@cpa.texas.gov'
              >
                here
              </a>
              .
            </p>
          </div>
          <div className='flex flex-col md:col-start-8 md:col-span-5 object-cover'>
            <img src='img/About.jpg' className='h-[50vh] md:h-full 2xl:h-screen object-cover' />
          </div>
        </div>
      </div>
      {/* <AboutContent
        Icon={GrGroup}
        text="The Hub offers resources to understand the current state of digital opportunity in Texas and the State's plan to expand it for all Texas; to build opportunities and solutions for Texas communities and geographies; and to find digital opportunity resources across the state. BDO invites your feedback on the Hub here."
      />
      <AboutContent Icon={GrGroup} text='Loremipsum' /> */}
      <div className='bg-[#ececec] grid md:grid-cols-12'>
        <div className='flex flex-col md:col-start-3 px-4 md:px-0 md:col-span-12'>
          <p className='py-8'>© 2024 Texas Broadband Development Office | All rights reserved</p>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
