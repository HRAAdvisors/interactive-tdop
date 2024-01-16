import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import one from '../assets/1.jpg';
import two from '../assets/2.avif';
import three from '../assets/3.avif';

const CarouselHero = () => {
  return (
    <Carousel
      emulateTouch={true}
      preventMovementUntilSwipeScrollTolerance={true}
      swipeScrollTolerance={20}
      showThumbs={false}
      showStatus={false}
      className='z-0'
      infiniteLoop
    >
      <div className='h-screen'>
        <img src={one} className='h-[100%] object-cover' />
      </div>
      <div className='h-screen'>
        <img src={two} className='h-[100%] object-cover' />
      </div>
      <div className='h-screen'>
        <img src={three} className='h-[100%] object-cover' />
      </div>
    </Carousel>
  );
};

export default CarouselHero;
