// App.js
import React, { useState, useEffect } from 'react';
import DotsNav from '../components/DotsNav';
import { Element as ScrollElement, Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import '@mantine/core/styles.css';
import ConclusionOne from './content/ConclusionOne';
import ConclusionCards from '../components/ConclusionCards';
import ScrollableTitle from '../components/ScrollableTitle';


const ConclusionPage = ({handlePageChange}) => {
  const [localSections, setLocalSections] = useState(['section1', 'section2', 'section3']);
  const header =
  <ScrollableTitle 
  img={ConclusionCards.Header.img}
  altText={ConclusionCards.Header.altText}
  title={ConclusionCards.Header.title}
  />
  const sections = [header, <ConclusionOne />];
  const [activeSection, setActiveSection] = useState(0);

  const handleSectionClick = (index) => {
    setActiveSection(index);
    scroll.scrollTo(`section${index + 1}`, { smooth: true, duration: 500 });
  };

  useEffect(() => {
    // Call handlePageChange when VisionPage mounts
    handlePageChange('intro', localSections);
  }, []);

  return (
    <>
      <div className="app flex">
        <div className="content flex-1">
          {sections.map((section, index) => (
            <ScrollElement key={index} name={`section${index + 1}`}>
              {section}
            </ScrollElement>
          ))}
        </div>
      </div>
    </>
  )
};

export default ConclusionPage