import ButtonDark from '@/components/ui/ButtonDark';
// import TexasStripes from '../../components/TexasStripes';
import 'react-dropdown/style.css';
import ButtonLight from '@/components/ui/ButtonLight';
import ScrollingSections from '@/components/ScrollingSections';

const backgroundImagePaths = [
  'Capitol.svg',
  'LivingPlan.jpeg',
  'Promotion.jpg',
  'Needs.jpg',
  'Capitol.jpg',
];

const steps = [
  <div>
    <p>
      The Texas Digital Opportunity Plan offers strategies to help with digital needs across the
      state,{' '}
      <strong>
        helping all Texans have access to the same tools and information needed to thrive in today's
        society.
      </strong>
    </p>
  </div>,
  <div>
    <p>
      However, the Texas Digital Opportunity Plan is intended to be{' '}
      <strong>a living document.</strong>
    </p>
  </div>,
  <div>
    <p>
      We welcome your comments at{' '}
      <strong>
        <a className='underline' href='https://infinite-peak-70034.herokuapp.com/'>
          this link
        </a>
      </strong>
      , your feedback at our{' '}
      <strong>
        <a className='underline' href='mailto:broadband@cpa.texas.gov'>
          email address
        </a>
      </strong>
      , and your continued participation in the expansion of digital opportunity in Texas through
      public events or other forums.
    </p>
  </div>,
  <div>
    <p> Click below to dive deeper into the state of digital opportunity in Texas.</p>
    <div className='my-8'>
      <ButtonDark text='Interactive Plan'></ButtonDark>
      <ButtonLight text='Data Dashboards'></ButtonLight>
    </div>
  </div>,
];

const ConclusionOne = () => {
  return (
    <div>
      <ScrollingSections
        steps={steps}
        id='unique-id-2'
        backgroundImagePaths={backgroundImagePaths}
      />
      <div className='bg-[#FFFDF6] w-full h-full px-4'>
        <div className='grid md:grid-cols-12'>
          <div className='flex flex-col md:col-start-4 md:col-span-12'>
            <p className='py-12'>
              © 2024 Texas Broadband Development Office | All rights reserved
              <br />
              Created by the Texas Broadband Development Office.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConclusionOne;
