import ScrollArrow from './ScrollArrow';
import ButtonLight from './ui/ButtonLight';
import ButtonDark from './ui/ButtonDark';
import { Link } from 'react-scroll';

const HeroLayout = ({
  leftButtonLink,
  leftButtonText,
  rightButtonLink,
  rightButtonText,
  imageHero,
}: {
  leftButtonLink: string;
  leftButtonText: string;
  rightButtonLink: string;
  rightButtonText: string;
  imageHero: string;
}) => {
  return (
    <div className='z-20 w-full h-full bg-[#FFFDF6] md:overflow-x-hidden'>
      <div className='block md:grid md:grid-cols-12'>
        <div className='flex flex-col justify-center content-center p-4 md:p-0 md:col-span-5 md:col-start-2'>
          <p className='text-[#111] text-xs uppercase tracking-widest'>
            Texas Broadband Development Office
          </p>
          <h1 className='md:text-6xl sm:text-2xl text-2xl font-semibold py-6 uppercase tracking-widest'>
            Texas Digital Opportunity Hub
          </h1>
          <p className=''>
            Welcome to the Texas Digital Opportunity Hub. Find and download data to understand
            opportunities and challenges for digital inclusion in your community, find funding and
            support for community efforts, and search for digital opportunity resources. Join us
            here to build digital opportunity in Texas.
          </p>
          <div className='flex justify-between py-8 w-full'>
            <ButtonDark link={leftButtonLink} text={leftButtonText}></ButtonDark>
            <ButtonLight link={rightButtonLink} text={rightButtonText}></ButtonLight>
          </div>
          <div className='mx-auto justify-center content-center text-center'>
            <p>Scroll to explore the Texas Digital Opportunity Plan</p>
            <div className='flex justify-center py-8'>
              <Link to='intro' smooth={true} duration={800}>
                <ScrollArrow />
              </Link>
            </div>
          </div>
        </div>
        <div className='flex flex-col md:col-start-8 md:col-span-5 object-cover'>
          <img src={imageHero} className='h-screen object-cover' />
          {/* <CarouselHero className='object-contain' /> */}
        </div>
      </div>
    </div>
  );
};

export default HeroLayout;
