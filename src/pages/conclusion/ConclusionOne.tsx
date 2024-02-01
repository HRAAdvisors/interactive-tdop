import ButtonDark from '@/components/ui/ButtonDark';
// import TexasStripes from '../../components/TexasStripes';
import 'react-dropdown/style.css';
import ButtonLight from '@/components/ui/ButtonLight';
import ScrollingSection from '@/components/ScrollingSections';

const contents = [
  {
    img: 'img/Capitol.svg',
    content: (
      <div>
        <p>
          The Texas Digital Opportunity Plan offers strategies to help with digital needs across the
          state,{' '}
          <strong>
            helping all Texans have access to the same tools and information needed to thrive in
            today's society.
          </strong>
        </p>
      </div>
    ),
  },
  {
    img: 'img/LivingPlan.jpg',
    content: (
      <div>
        <p>
          However, the Texas Digital Opportunity Plan is intended to be{' '}
          <strong>a living document.</strong>
        </p>
      </div>
    ),
  },
  {
    img: 'img/Promotion.jpg',
    content: (
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
            <a className='underline' href='mailto:digital.opportunity@cpa.texas.gov'>
              email address
            </a>
          </strong>
          , and your continued participation in the expansion of digital opportunity in Texas
          through public events or other forums.
        </p>
      </div>
    ),
  },
  {
    img: 'img/Needs.jpg',
    content: (
      <div>
        <p> Click below to dive deeper into the state of digital opportunity in Texas.</p>
        <div className='my-8 md:mx-8'>
          <ButtonDark text='Geographic Intro' link='/geoIntro'></ButtonDark>
          <ButtonLight text='Data Dashboards' link='/'></ButtonLight>
        </div>
      </div>
    ),
  },
  {
    img: 'img/Capitol.jpg',
    content: (
      <div>
        <p> Click below to dive deeper into the state of digital opportunity in Texas.</p>
        <div className='my-8 md:mx-8'>
          <ButtonDark text='Geographic Intro' link='/geoIntro'></ButtonDark>
          <ButtonLight text='Data Dashboards' link='/'></ButtonLight>
        </div>
      </div>
    ),
  },
];

const ConclusionOne = () => {
  return (
    <div>
      <ScrollingSection contents={contents} id='unique-id-2' />
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
