// ScrollingSections.tsx
import React, { PureComponent } from 'react';
import { Scrollama, Step } from 'react-scrollama';
import ScrollingCard from './ScrollingCard';

interface ScrollingSectionsProps {
  id: string;
  steps: React.ReactNode[];
  backgroundImagePath: string;
}

interface ScrollingSectionsState {
  activeStepIndex: number;
  isBackgroundVisible: boolean;
}

class ScrollingSections extends PureComponent<ScrollingSectionsProps, ScrollingSectionsState> {
  state = {
    activeStepIndex: 0,
    isBackgroundVisible: false,
  };

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const { id } = this.props;
    const element = document.getElementById(id);
    if (element) {
      const rect = element.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
      this.setState({ isBackgroundVisible: isVisible });
    }
  };

  onStepEnter = ({ data }: { data: number }) => {
    this.setState({ activeStepIndex: data });
  };

  render() {
    const { activeStepIndex, isBackgroundVisible } = this.state;
    const { steps, backgroundImagePath, id } = this.props;

    return (
      <div id={id} style={{ position: 'relative', overflow: 'hidden' }}>
        {isBackgroundVisible && (
          <div
            style={{
              position: 'fixed',
              width: '100%',
              height: '100vh',
              backgroundImage: `url(${backgroundImagePath})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center center',
              top: 0,
              left: 0,
              zIndex: -1,
              transform: activeStepIndex === steps.length - 1 ? 'translateY(0)' : 'none',
              transition: 'transform 0.5s ease-in-out',
            }}
          />
        )}
        <Scrollama onStepEnter={this.onStepEnter}>
          {steps.map((stepContent, index) => (
            <Step data={index} key={index}>
              <div
                style={{
                  minHeight: '100vh',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  zIndex: 2,
                }}
              >
                <div
                  style={{
                    color: 'white',
                    padding: '2rem',
                    maxWidth: '35rem',
                    margin: '2rem',
                  }}
                >
                  <ScrollingCard>{stepContent}</ScrollingCard>
                </div>
              </div>
            </Step>
          ))}
        </Scrollama>
        <div style={{ minHeight: '50vh' }}></div>
      </div>
    );
  }
}

export default ScrollingSections;
