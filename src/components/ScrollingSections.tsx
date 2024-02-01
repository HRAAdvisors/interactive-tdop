import _ from 'lodash';
import { ReactNode, useState } from 'react';

import { Scrollama, Step } from 'react-scrollama';

interface ScrollingSectionContent {
  img: string;
  content: ReactNode;
}

interface ScrollingSectionProps {
  id: string;
  contents: ScrollingSectionContent[];
  containerClassNames?: string;
}

const ScrollingSection = ({ contents, containerClassNames, id }: ScrollingSectionProps) => {
  const [backgroundClass, setBackgroundClass] = useState<string>('opacity-100');
  const [activeContent, setActiveContent] = useState<ScrollingSectionContent>(_.first(contents)!);
  return (
    <div id={id} className='w-full relative' style={{ height: `${_.size(contents) * 100}vh` }}>
      <div
        style={{
          backgroundImage: `url("${activeContent.img}")`,
        }}
        className={`h-screen bg-cover bg-center bg-fixed w-full sticky inset-0 float-left transition-opacity duration-200	ease-out ${backgroundClass}`}
      >
        {/* <img src={activeContent.img} className='object-cover w-full h-full' /> */}
      </div>
      <div className='absolute w-full top-0 bottom-0'>
        <Scrollama
          offset={0.5}
          onStepEnter={({ data }: { data: ScrollingSectionContent }) => {
            if (!_.isEqual(data, activeContent)) {
              setBackgroundClass('opacity-0');
              setTimeout(() => {
                setActiveContent(data); // Set the input based on the received data
                setBackgroundClass('opecity-100');
              }, 100);
            }
          }}
        >
          {_.map(contents, (contentData, i) => (
            <Step data={contentData} key={i + 1}>
              <div className={`w-full h-screen ${containerClassNames} items-center`}>
                <div className='text-white bg-black p-[1rem] md:p-[2rem] md:max-w-[40%] lg:max-w-[35%] max-w-[95%] md:m-[5rem] m-[1rem]'>
                  {contentData.content}
                </div>
              </div>
            </Step>
          ))}
        </Scrollama>
      </div>
    </div>
  );
};

export default ScrollingSection;
