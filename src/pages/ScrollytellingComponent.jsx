import React, { PureComponent } from 'react';
import injectSheet from 'react-jss';
import { Scrollama, Step } from 'react-scrollama';

const styles = {
  pageSubtitle: {
    textAlign: 'center',
    fontSize: 22,
    color: '#888',
  },
  graphicContainer: {
    padding: '40vh 2vw 20vh',
    display: 'flex',
    justifyContent: 'space-between',
  },
  graphic: {
    flexBasis: '50%',
    position: 'sticky',
    width: '100%',
    height: '60vh',
    top: '20vh',
    backgroundColor: '#aaa',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '& p': {
      fontSize: '5rem',
      fontWeight: 700,
      textAlign: 'center',
      color: '#fff',
    },
  },
  scroller: {
    flexBasis: '35%',
  },
  step: {
    margin: '0 auto 3rem auto',
    padding: '180px 0',
    border: '1px solid #333',
    '& p': {
      textAlign: 'center',
      padding: '1rem',
      fontSize: '1.8rem',
      margin: 0,
    },
    '&:last-child': {
      marginBottom: 0,
    },
  },
  button: {
    backgroundColor: '#3773ac',
    color: 'white',
    borderRadius: '4px',
    cursor: 'pointer',
    padding: '6px',
    textAlign: 'center',
    display: 'block',
    maxWidth: 220,
    margin: '10px auto 30px',
    fontSize: 19,
    lineHeight: '28px',
    textDecoration: 'none',
  },
  subhed: {
    maxWidth: 600,
    margin: '10px auto 15px',
    fontSize: 22,
    lineHeight: '28px',
    '& a': {
      color: 'black',
    },
    textAlign: 'center',
  },
};

class Demo extends PureComponent {
  state = {
    data: 0,
    steps: [10, 20, 30],
    progress: 0,
  };

  onStepEnter = e => {
    const { data, entry, direction} = e;
    this.setState({ data });
  };

  onStepExit = ({ direction, data }) => {
    if (direction === 'up' && data === this.state.steps[0]) {
      this.setState({ data: 0 });
    }
  };

  onStepProgress = ({ progress }) => {
    this.setState({ progress });
  };

  render() {
    const { data, steps, progress } = this.state;
    const { classes } = this.props;

    return (
      <div>
        {/* Beginning of Scrolling Code */}
        <div className={classes.graphicContainer}>
          <div className={classes.scroller}>
            <Scrollama
              onStepEnter={this.onStepEnter}
              onStepExit={this.onStepExit}
              progress
              onStepProgress={this.onStepProgress}
              offset="400px"
            >
              {steps.map(value => {
                const isVisible = value === data;
                const background = isVisible
                  ? `rgba(44,127,184, ${progress})`
                  : 'white';
                const visibility = isVisible ? 'visible' : 'hidden';
                return (
                  <Step data={value} key={value}>
                    <div className={classes.step} style={{ background }}>
                      <p>step value: {value}</p>
                      <p style={{ visibility }}>
                        {Math.round(progress * 1000) / 10 + '%'}
                      </p>
                    </div>
                  </Step>
                );
              })}
            </Scrollama>
          </div>
          <div className={classes.graphic}>
            <p>{data}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default injectSheet(styles)(Demo);