// App.js
import { useState, useEffect } from 'react';
import { Element as ScrollElement } from 'react-scroll';
import '@mantine/core/styles.css';
import ConclusionOne from './content/ConclusionOne';
import ConclusionCards from '@/static/ConclusionCards';
import ScrollableTitle from '@/components/ScrollableTitle';

const ConclusionPage = ({ handlePageChange }: { handlePageChange?: Function }) => {
  const [localSections] = useState(['section1', 'section2', 'section3']);
  const header = (
    <ScrollableTitle
      img={ConclusionCards.Header.img}
      altText={ConclusionCards.Header.altText}
      title={ConclusionCards.Header.title}
    />
  );
  const sections = [header, <ConclusionOne />];
  // const [activeSection, setActiveSection] = useState(0);

  // const handleSectionClick = (index) => {
  //   setActiveSection(index);
  //   scroll.scrollTo(`section${index + 1}`, { smooth: true, duration: 500 });
  // };

  useEffect(() => {
    // Call handlePageChange when VisionPage mounts
    if (handlePageChange) {
      handlePageChange('intro', localSections);
    }
  }, []);

  return (
    <>
      <div className='app flex'>
        <div className='content flex-1'>
          {sections.map((section, index) => (
            <ScrollElement key={index} name={`section${index + 1}`}>
              {section}
            </ScrollElement>
          ))}
        </div>
      </div>
    </>
  );
};

export default ConclusionPage;
