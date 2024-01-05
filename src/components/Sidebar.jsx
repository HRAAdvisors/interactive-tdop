import React, { useContext, useEffect, useState, useRef } from 'react';
import SidebarItems from './SidebarItems';
import { Link, Events, scrollSpy } from "react-scroll";
import { ScrollableTitleContext } from './ScrollableTitleContext';

function Sidebar() {
  const { refs } = useContext(ScrollableTitleContext);
  const [isOverlapping, setIsOverlapping] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const sidebarRef = useRef();

  const checkOverlap = () => {
    if (sidebarRef.current) {
      const sidebarRect = sidebarRef.current.getBoundingClientRect();
      let newIsOverlapping = false;
      
      refs.forEach((ref) => {
        if (ref.current) {
          const titleRect = ref.current.getBoundingClientRect();
          if (
            sidebarRect.bottom >= titleRect.top &&
            sidebarRect.top <= titleRect.bottom
          ) {
            newIsOverlapping = true;
          }
        }
      });
      
      setIsOverlapping(newIsOverlapping);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', checkOverlap);
    return () => {
      window.removeEventListener('scroll', checkOverlap);
    };
  }, [refs]); // Dependencies


  return (
    <div ref={sidebarRef} className={`z-50 hidden md:block md:fixed left-10 top-1/2 transform -translate-y-1/2 w-40 flex-col uppercase ${isOverlapping ? 'text-white' : 'text-black'}`}>
      {SidebarItems.map((item, index) => (
        <Link
          key={item.key}
          to={item.route}
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          className={`p-1 text-xs hover:text-[#dedede]`}
          activeClass="font-bold"
          onSetActive={() => setActiveIndex(index)}
        >
          <p>{item.name}</p>
        </Link>
      ))}
    </div>
  );
}

export default Sidebar;
