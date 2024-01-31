import React, { useState, useEffect } from 'react';
import { Scrollama, Step } from 'react-scrollama';
import ScrollingCard from './ScrollingCard';

interface ScrollingSectionsProps {
  id: string;
  steps: React.ReactNode[];
  backgroundImagePaths: string[];
}

interface BackgroundStyle {
  backgroundImage: string;
  opacity: number;
  transition: string;
  position: 'fixed';
  width: string;
  height: string;
  top: number;
  left: number;
  backgroundSize: string;
  backgroundPosition: string;
  zIndex: number;
}

const ScrollingSections = ({ id, steps, backgroundImagePaths }: ScrollingSectionsProps) => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const [backgroundStyles, setBackgroundStyles] = useState<BackgroundStyle[]>([]);

  useEffect(() => {
    // Initialize background styles with opacity 0
    const initialBackgroundStyles = backgroundImagePaths.map(
      (path) =>
        ({
          backgroundImage: `url(${path})`,
          opacity: 0,
          transition: 'opacity 0.375s ease-in-out',
          position: 'fixed',
          width: '100%',
          height: '100vh',
          top: 0,
          left: 0,
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          zIndex: -1,
        }) as BackgroundStyle,
    );

    setBackgroundStyles(initialBackgroundStyles);
  }, [backgroundImagePaths]);

  const onStepEnter = ({ data }: { data: number }) => {
    const updatedStyles = backgroundStyles.map((style, index) => ({
      ...style,
      opacity: index === data ? 1 : 0,
    }));
    setActiveStepIndex(data);
    setBackgroundStyles(updatedStyles);
  };

  const onStepExit = ({ data, direction }: { data: number; direction: 'up' | 'down' }) => {
    // If we're scrolling up and exiting the current active step, fade out the current step's background
    if (direction === 'up' && data === activeStepIndex) {
      const updatedStyles = backgroundStyles.map((style, index) => ({
        ...style,
        opacity: index === data - 1 ? 1 : 0,
      }));
      setActiveStepIndex(data - 1);
      setBackgroundStyles(updatedStyles);
    }
  };

  const renderBackgrounds = () => {
    return backgroundStyles.map((style, index) => <div key={index} style={style} />);
  };

  return (
    <div id={id} style={{ position: 'relative', overflow: 'hidden' }}>
      {renderBackgrounds()}
      <Scrollama onStepEnter={onStepEnter} onStepExit={onStepExit}>
        {steps.map((stepContent, index) => (
          <Step data={index} key={index}>
            <div style={{ minHeight: '150vh', display: 'flex', alignItems: 'center', zIndex: -1 }}>
              <div className='text-white p-[1rem] md:p-[2rem] md:max-w-[40%] lg:max-w-[35%] max-w-[95%] md:m-[5rem] m-[1rem]'>
                <ScrollingCard>{stepContent}</ScrollingCard>
              </div>
            </div>
          </Step>
        ))}
      </Scrollama>
    </div>
  );
};

export default ScrollingSections;
