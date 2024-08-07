import { useRef } from 'react'; // Make sure to import React (if you're using React 17 or earlier)
import ScrollArrowSolid from './ScrollArrowSolid';

const HeroLayout = ({
  landingText,
  imageHero,
  title,
  altText,
}: {
  landingText: string | JSX.Element;
  imageHero: string;
  title: string;
  altText: string;
}) => {
  // Specify the type of elements the ref will refer to - HTMLDivElement in this case
  const heroLayoutRef = useRef<HTMLDivElement | null>(null);

  const scrollToContent = () => {
    if (heroLayoutRef.current) {
      const height = heroLayoutRef.current.getBoundingClientRect().height; // TypeScript now knows this is a HTMLDivElement
      window.scrollBy({
        top: height, // Scroll by the component's height
        behavior: 'smooth',
      });
    }
  };

  return (
    <div ref={heroLayoutRef} className='z-20 w-full h-full bg-[#FFFDF6] md:overflow-x-hidden'>
      {/* Attach the ref here */}
      <div className='block lg:grid lg:grid-cols-12'>
        <div className='flex flex-col justify-center content-center pt-24 md:pt-20 p-4 lg:pt-20 md:col-span-5 md:col-start-2'>
          <p className='text-[#111] text-xs uppercase tracking-widest'>
            Texas Broadband Development Office
          </p>
          <h1 className='md:text-6xl sm:text-2xl text-2xl font-semibold pt-6 uppercase tracking-widest z-10'>
            {title}
          </h1>
          <hr className='h-1 my-6'></hr>
          <p className='text-md'>{landingText}</p>
          <div className='py-2 md:py-8'>
            <div
              onClick={scrollToContent}
              className='flex justify-center md:py-8 py-4'
              style={{ cursor: 'pointer' }}
            >
              <ScrollArrowSolid />
            </div>
          </div>
        </div>
        <div className='flex flex-col md:col-start-8 md:col-span-5 object-cover'>
          <img src={imageHero} alt={altText} className='h-[50vh] md:h-screen object-cover' />
        </div>
      </div>
    </div>
  );
};

export default HeroLayout;
