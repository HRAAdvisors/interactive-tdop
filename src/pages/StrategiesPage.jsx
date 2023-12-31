// App.js
import React, { useState, useEffect } from 'react';
import DotsNav from '../components/DotsNav';
import { Element as ScrollElement, Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import StrategiesOne from './content/StrategiesOne';
import StrategiesTwo from './content/StrategiesTwo';
import StrategiesCards from '../components/StrategiesCards';
import ScrollableTitle from '../components/ScrollableTitle';


const StrategiesPage = ({ handlePageChange }) => {
  const [localSections, setLocalSections] = useState(['section1', 'section2']);

  useEffect(() => {
    // Call handlePageChange when VisionPage mounts
    handlePageChange('strategies', localSections);
  }, []);
  const header =
  <ScrollableTitle 
  img={StrategiesCards.Header.img}
  title={StrategiesCards.Header.title}
  />
  const sections = [header, <StrategiesOne />, <StrategiesTwo />];
  const [activeSection, setActiveSection] = useState(0);

  const handleSectionClick = (index) => {
    setActiveSection(index);
    scroll.scrollTo(`section${index + 1}`, { smooth: true, duration: 500 });
  };

  return (
    <>
      {/* <Navbar /> */}
      <div className="app flex">
        <div className="content flex-1">
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
  )
};

export default StrategiesPage