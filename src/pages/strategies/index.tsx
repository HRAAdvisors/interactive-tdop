// App.js
import { useState, useEffect } from 'react';
import { Element as ScrollElement } from 'react-scroll';
import StrategiesTwo from './StrategiesTwo';
import StrategiesOne from './StrategiesOne';
import ScrollableTitle from '@/components/ScrollableTitle';
import StrategiesCards from '@/static/StrategiesCards.tsx';

const StrategiesPage = ({ handlePageChange }: { handlePageChange?: Function }) => {
  const [localSections] = useState(['section1', 'section2']);

  useEffect(() => {
    // Call handlePageChange when VisionPage mounts
    if (handlePageChange) {
      handlePageChange('strategies', localSections);
    }
  }, []);
  const header = (
    <ScrollableTitle
      altText=''
      img={StrategiesCards.Header.img}
      title={StrategiesCards.Header.title}
    />
  );
  const sections = [header, <StrategiesOne />, <StrategiesTwo />];
  // const [activeSection, setActiveSection] = useState(0);

  return (
    <>
      {/* <Navbar /> */}
      <div className='app flex'>
        <div className='content flex-1'>
          {sections.map((section, index) => (
            <ScrollElement key={index} name={`section${index + 1}`}>
              {section}
            </ScrollElement>
          ))}
        </div>
        {/* <DotsNav
        totalSections={sections.length}
        activeSection={index}
        onDotClick={(index) => scrollToSection(`section${index + 1}`)}
      /> */}
      </div>
    </>
  );
};

export default StrategiesPage;
