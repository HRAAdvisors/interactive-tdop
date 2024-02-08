import ScrollArrowSolid from './ScrollArrowSolid';

const HeroLayout = ({
  landingText,
  imageHero,
}: {
  landingText: string | JSX.Element;
  imageHero: string;
}) => {
  const scrollToContent = () => {
    window.scrollBy({
      top: window.innerHeight, // 100vh equivalent
      behavior: 'smooth',
    });
  };
  return (
    <div className='z-20 w-full h-full bg-[#FFFDF6] md:overflow-x-hidden'>
      <div className='block md:grid md:grid-cols-12'>
        <div className='flex flex-col justify-center content-center pt-[10vh] md:pt-15 p-4 lg:pt-20 md:col-span-5 md:col-start-2'>
          <p className='text-[#111] text-xs uppercase tracking-widest'>
            Texas Broadband Development Office
          </p>
          <h1 className='md:text-6xl sm:text-2xl text-2xl font-semibold pt-6 uppercase tracking-widest'>
            Texas Digital Opportunity Hub
          </h1>
          <hr className='h-1 my-6'></hr>
          <p className='text-md'>{landingText}</p>
          <div className='py-4 md:py-8'>
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
          <img src={imageHero} className='h-[50vh] md:h-screen object-cover' />
        </div>
      </div>
    </div>
  );
};

export default HeroLayout;
