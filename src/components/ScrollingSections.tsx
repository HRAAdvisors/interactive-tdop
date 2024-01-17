import React, { PureComponent } from 'react';
import { Scrollama, Step } from 'react-scrollama';
import ScrollingCard from './ScrollingCard';

interface ScrollingSectionsProps {
  id: string;
  steps: React.ReactNode[];
  backgroundImagePaths: string[];
}

interface ScrollingSectionsState {
  activeStepIndex: number;
  backgroundStyles: React.CSSProperties[];
}

class ScrollingSections extends PureComponent<ScrollingSectionsProps, ScrollingSectionsState> {
  constructor(props: ScrollingSectionsProps) {
    super(props);

    // Initialize background styles with opacity 0
    const backgroundStyles = props.backgroundImagePaths.map((path) => ({
      backgroundImage: `url(${path})`,
      opacity: 0,
      transition: 'opacity 0.375s ease-in-out',
      position: 'fixed' as 'fixed',
      width: '100%',
      height: '100vh',
      top: 0,
      left: 0,
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
      zIndex: -1,
    }));

    this.state = {
      activeStepIndex: 0,
      backgroundStyles,
    };
  }

  onStepEnter = ({ data }: { data: number }) => {
    this.setState((prevState) => {
      const updatedStyles = prevState.backgroundStyles.map((style, index) => ({
        ...style,
        opacity: index === data ? 1 : 0,
      }));
      return {
        activeStepIndex: data,
        backgroundStyles: updatedStyles,
      };
    });
  };

  onStepExit = ({ data, direction }: { data: number; direction: 'up' | 'down' }) => {
    // If we're scrolling up and exiting the current active step, fade out the current step's background
    if (direction === 'up' && data === this.state.activeStepIndex) {
      this.setState((prevState) => {
        const updatedStyles = prevState.backgroundStyles.map((style, index) => ({
          ...style,
          opacity: index === data - 1 ? 1 : 0,
        }));
        return {
          activeStepIndex: data - 1,
          backgroundStyles: updatedStyles,
        };
      });
    }
  };

  renderBackgrounds() {
    return this.state.backgroundStyles.map((style, index) => <div key={index} style={style} />);
  }

  render() {
    const { steps, id } = this.props;

    return (
      <div id={id} style={{ position: 'relative', overflow: 'hidden' }}>
        {this.renderBackgrounds()}
        <Scrollama onStepEnter={this.onStepEnter} onStepExit={this.onStepExit}>
          {steps.map((stepContent, index) => (
            <Step data={index} key={index}>
              <div
                style={{ minHeight: '150vh', display: 'flex', alignItems: 'center', zIndex: -1 }}
              >
                <div className='text-white p-[2rem] md:max-w-[25rem] max-w-[50rem] m-[5rem]'>
                  <ScrollingCard>{stepContent}</ScrollingCard>
                </div>
              </div>
            </Step>
          ))}
        </Scrollama>
        {/* <div style={{ minHeight: '50vh' }}></div> */}
      </div>
    );
  }
}

export default ScrollingSections;
