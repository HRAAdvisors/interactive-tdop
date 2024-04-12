import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import SideNav from '@/components/SIdeNav';

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
                target='_blank'
                rel='noopener'
                className='underline md:hover:text-[#fff] md:hover:bg-[#002768] md:hover:no-underline p-[0.05rem] transition-colors duration-300'
              >
                The Texas Broadband Development Office (BDO)
              </a>{' '}
              developed this interactive tool to track progress to invite participation in the
              advancement of digital opportunity for all Texans. The Hub complements the publication
              of the Texas Digital Opportunity Plan (TDOP). The BDO developed this site in
              partnership with {' '}
              <a
                href='https://www.hraadvisors.com/'
                target='_blank'
                rel='noopener'
                className='underline md:hover:text-[#fff] md:hover:bg-[#002768] md:hover:no-underline p-[0.05rem] transition-colors duration-300'
              >
                HR&A Advisors.
              </a>
            </p>
            <p className='text-md my-2'>
              The Texas Digital Opportunity Hub uses data from public datasets including the Census
              Bureau's{' '}
              <a
                href='https://www.census.gov/data/developers/data-sets/acs-5year/2021.html'
                target='_blank'
                rel='noopener'
                className='underline md:hover:text-[#fff] md:hover:bg-[#002768] md:hover:no-underline p-[0.05rem] transition-colors duration-300'
              >
                American Community Survey 5-Year Estimates
              </a>{' '}
              and the Federal Communication Commission's{' '}
              <a
                href='https://www.fcc.gov/BroadbandData'
                target='_blank'
                rel='noopener'
                className='underline md:hover:text-[#fff] md:hover:bg-[#002768] md:hover:no-underline p-[0.05rem] transition-colors duration-300'
              >
                Broadband Data Collection
              </a>
              , as well as the{' '}
              <a
                href='https://comptroller.texas.gov/programs/broadband/outreach/communities/docs/tdops-survey.pdf'
                target='_blank'
                rel='noopener'
                className='underline md:hover:text-[#fff] md:hover:bg-[#002768] md:hover:no-underline p-[0.05rem] transition-colors duration-300'
              >
                2023 Texas Digital Opportunity Survey
              </a>{' '}
              and the{' '}
              <a
                href='https://comptroller.texas.gov/programs/broadband/outreach/communities/docs/drmts-preview.pdf'
                target='_blank'
                rel='noopener'
                className='underline md:hover:text-[#fff] md:hover:bg-[#002768] md:hover:no-underline p-[0.05rem] transition-colors duration-300'
              >
                2023 Texas Digital Resources Mapping Tool Survey (DRMTS)
              </a>
              .
            </p>
            <p className='text-md my-2'>
              The Hub offers resources in support of three outcomes: to understand the current state
              of digital opportunity in Texas and the State’s plan to expand it for all Texans; to
              build opportunities and solutions for Texas communities and geographies; and to assist
              users in finding digital opportunity resources across the state.
            </p>
            <p className='text-md mt-2 mb-8'>
              BDO invites your feedback on the Hub at{' '}
              <a
                className='underline md:hover:text-[#fff] md:hover:bg-[#002768] md:hover:no-underline p-[0.05rem] transition-colors duration-300'
                href='mailto:digital.opportunity@cpa.texas.gov'
                target='_blank'
                rel='noopener'
              >
                digital.opportunity@cpa.texas.gov.
              </a>
              .
            </p>
          </div>
          <div className='flex flex-col md:col-start-8 md:col-span-5 object-cover'>
            <img src='img/About.jpg' className='h-[50vh] md:h-full 2xl:h-screen object-cover' />
          </div>
          <div className='flex flex-col justify-center content-center py-12 md:py-18 p-4 lg:py-[5.5rem] md:col-span-10 md:col-start-2'>
            <hr className='h-1 mt-0 mb-8'></hr>
            <h1 className='md:text-6xl sm:text-2xl text-2xl font-semibold uppercase tracking-widest'>
              Frequently Asked Questions
            </h1>
            <hr className='h-1 mt-8 mb-6'></hr>
            <p className='text-xl font-bold my-2'>About the Data</p>
            <p className='text-md my-2'>
              The Texas Digital Opportunity Hub charts use data from public datasets including the
              Census Bureau's{' '}
              <a
                href='https://www.census.gov/data/developers/data-sets/acs-5year/2021.html'
                target='_blank'
                rel='noopener'
                className='underline md:hover:text-[#fff] md:hover:bg-[#002768] md:hover:no-underline p-[0.05rem] transition-colors duration-300'
              >
                American Community Survey 5-Year Estimates
              </a>{' '}
              and the Federal Communication Commission's{' '}
              <a
                href='https://www.fcc.gov/BroadbandData'
                target='_blank'
                rel='noopener'
                className='underline md:hover:text-[#fff] md:hover:bg-[#002768] md:hover:no-underline p-[0.05rem] transition-colors duration-300'
              >
                Broadband Data Collection
              </a>
              , as well as the{' '}
              <a
                href='https://comptroller.texas.gov/programs/broadband/outreach/communities/docs/tdops-survey.pdf'
                target='_blank'
                rel='noopener'
                className='underline md:hover:text-[#fff] md:hover:bg-[#002768] md:hover:no-underline p-[0.05rem] transition-colors duration-300'
              >
                2023 Texas Digital Opportunity Survey
              </a>{' '}
              and the{' '}
              <a
                href='https://comptroller.texas.gov/programs/broadband/outreach/communities/docs/drmts-preview.pdf'
                target='_blank'
                rel='noopener'
                className='underline md:hover:text-[#fff] md:hover:bg-[#002768] md:hover:no-underline p-[0.05rem] transition-colors duration-300'
              >
                2023 Texas Digital Resources Mapping Tool Survey (DRMTS)
              </a>
              . More information on the data sources, including the demographics and distribution of
              survey respondents, is available in the Data Sources and Methodology section under the{' '}
              <a
                href='https://www.digitalopportunityfortexas.com/data-dashboards/data-sources-and-methodology'
                target='_blank'
                rel='noopener'
                className='underline md:hover:text-[#fff] md:hover:bg-[#002768] md:hover:no-underline p-[0.05rem] transition-colors duration-300'
              >
                Data tab
              </a>{' '}
              on the site.
            </p>
            <p className='text-xl font-bold mt-4 mb-2'>Updates to the Data</p>
            <p className='text-md my-2'>
              Public and administrative datasets, for example from the Census Bureau and the Federal
              Communications Commission, will be updated as new datasets are released. Digital
              Opportunity Survey data will be updated if the Broadband Development Office
              re-adminsters the survey. Asset or Resource data will be expanded through a future
              process to be determined by BDO.
            </p>
            <p className='text-xl font-bold mt-4 mb-2'>How to Print / Download</p>
            <p className='text-md my-2'>
              Data can be downloaded directly from the Texas Data Dashboards page. All charts
              include a button that triggers a local download.
            </p>
            <p className='text-xl font-bold mt-4 mb-2'>How can I / my organization use the Hub?</p>
            <p className='text-md my-2'>
              The Hub can be used to{' '}
              <a
                className='underline md:hover:text-[#fff] md:hover:bg-[#002768] md:hover:no-underline p-[0.05rem] transition-colors duration-300'
                href='https://www.digitalopportunityfortexas.com/'
                target='_blank'
                rel='noopener'
              >
                learn about Texas’ digital opportunity story.
              </a>{' '}
              It can be used to{' '}
              <a
                className='underline md:hover:text-[#fff] md:hover:bg-[#002768] md:hover:no-underline p-[0.05rem] transition-colors duration-300'
                href='https://www.digitalopportunityfortexas.com/interactivetdop'
                target='_blank'
                rel='noopener'
              >
                explore and find ways to interact
              </a>{' '}
              with the State’s Digital Opportunity Plan. Users can{' '}
              <a
                className='underline md:hover:text-[#fff] md:hover:bg-[#002768] md:hover:no-underline p-[0.05rem] transition-colors duration-300'
                href='https://www.digitalopportunityfortexas.com/data-dashboards'
                target='_blank'
                rel='noopener'
              >
                investigate and explore data
              </a>{' '}
              related to internet adoption, device access, digital literacy and skills,
              cybersecurity, and essential online services. The Hub can also be used to{' '}
              <a
                className='underline md:hover:text-[#fff] md:hover:bg-[#002768] md:hover:no-underline p-[0.05rem] transition-colors duration-300'
                href='https://www.digitalopportunityfortexas.com/data-dashboards'
                target='_blank'
                rel='noopener'
              >
                find services and resources
              </a>{' '}
              for learners and communities, connect with entities doing digital opportunity work,
              and more.
            </p>
          </div>
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
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
