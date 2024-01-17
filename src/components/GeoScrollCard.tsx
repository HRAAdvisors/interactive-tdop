import { useRef, useState } from 'react';
import _ from 'lodash';
import AOS from 'aos';
import { animateScroll as scroll } from 'react-scroll';

interface GeoScrollCardProps {
  children: React.ReactNode | React.ReactNode[] | string;
}

const GeoScrollCard = ({ children }: GeoScrollCardProps) => {
  const [isScrollingUp, setIsScrollingUp] = useState<boolean>(Boolean);
  const containerRef = useRef<HTMLDivElement>(null);

  const scrollToEnd: React.WheelEventHandler<HTMLElement> = _.debounce((e) => {
    const containerElm = containerRef.current;

    if (containerElm) {
      e.preventDefault();
      if (e.deltaY > 0) {
        setIsScrollingUp(true);
        AOS.refresh();
        scroll.scrollTo(containerElm.offsetTop + containerElm.offsetHeight);
      } else if (e.deltaY < 0) {
        setIsScrollingUp(false);
        AOS.refresh();
        scroll.scrollTo(containerElm.offsetTop - containerElm.offsetHeight);
      }
    }
  }, 100);

  return (
    <div className='h-screen z-10 relative bg-transparent' ref={containerRef}>
      <div
        className='max-w-2xl px-10 py-6 bg-white rounded-lg shadow-md w-96 top-44 left-32 absolute min-h-[400px]'
        data-aos={isScrollingUp ? 'fade-down' : 'fade-up'}
        data-aos-duration='750'
        onWheel={scrollToEnd}
      >
        <div className='mt-2'>{children}</div>
      </div>
    </div>
  );
};

export default GeoScrollCard;
