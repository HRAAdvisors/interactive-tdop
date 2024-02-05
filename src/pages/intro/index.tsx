// IntroPage.js
// import { Element as ScrollElement } from 'react-scroll';
import IntroOne from './IntroOne';
import IntroTwo from './IntroTwo';

const IntroPage = ({ handlePageChange: _ }: { handlePageChange?: Function }) => {
  // const sections = [<IntroOne />, <IntroTwo />];

  return (
    <>
      <div className='app flex'>
        <div className='content flex-1'>
          <IntroOne />
          <IntroTwo />
          {/* {sections.map((section, index) => (
            <ScrollElement key={index} name={`section${index + 1}`}>
              {section}
            </ScrollElement>
          ))} */}
        </div>
      </div>
    </>
  );
};

export default IntroPage;
