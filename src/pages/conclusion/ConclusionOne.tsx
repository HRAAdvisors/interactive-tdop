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
    img: 'img/LivingPlan.webp',
    content: (
      <div>
        <p>
          The plan is a <strong>a living document.</strong>
        </p>
      </div>
    ),
  },
  {
    img: 'img/Promotion.jpg',
    content: (
      <div>
        <p>
          We welcome your comments and feedback{' '}
          <strong>
            <a
              className='underline md:hover:text-[#999] transition-colors duration-300'
              href='mailto:digital.opportunity@cpa.texas.gov'
              target='_blank'
              rel='noopener'
            >
              here
            </a>
          </strong>{' '}
          and your continued participation in the expansion of digital opportunity in Texas through
          public events or other forums.
        </p>
      </div>
    ),
  },
  {
    img: 'img/Needs.jpg',
    content: (
      <div>
        <p> Click to dive deeper into the state of digital opportunity in Texas.</p>
        <div className='flex mx-auto my-8'>
          <div className='mr-auto'>
            <ButtonDark text='The Big Picture' link='/'></ButtonDark>
          </div>
          <div>
            <ButtonLight text='Data Dashboards' link='/data-dashboards'></ButtonLight>
          </div>
        </div>
      </div>
    ),
  },
];

const ConclusionOne = () => {
  return (
    <div>
      <ScrollingSection contents={contents} id='unique-id-2' />
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
              className='underline md:hover:text-[#ececec] transition-colors duration-300'
            >
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ConclusionOne;
