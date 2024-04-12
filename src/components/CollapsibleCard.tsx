import { useState, useRef, useEffect, ReactNode } from 'react';
import StackedBar from './StackedBar';
import Chevron from './Chevron';

interface CollapsibleCardProps {
  taskNumber: string;
  goalTitle: string;
  description: ReactNode;
  mapLabel?: string;
  mapTitle?: string; // If this is optional, mark it as such
  targetText: ReactNode;
  chartLabel: string;
  stackedBarData: number;
  stackedBarGoal: number;
  leftPanelContent: ReactNode;
  // rightPanelContent: ReactNode;
  strategies: string[]; // Define as an array of strings
  defaultOpen?: boolean; // New prop to control the initial open state
}

const CollapsibleCard: React.FC<CollapsibleCardProps> = ({
  taskNumber,
  goalTitle,
  description,
  mapLabel,
  mapTitle,
  targetText,
  chartLabel,
  stackedBarData,
  stackedBarGoal,
  leftPanelContent,
  strategies,
  defaultOpen = false, // Default value is false, so cards are closed by default
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const [height, setHeight] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    // Update the height state to trigger the animation
    setHeight(isOpen && contentRef.current ? contentRef.current.scrollHeight : 0);
  }, [isOpen]);

  return (
    <div className='bg-[#FFFDF6] my-4 shadow-md rounded-none w-[100%] border-2 border-black'>
      <div
        className='flex md:grid md:grid-cols-12 cursor-pointer align-center md:hover:shadow-md md:hover:scale-[101%] duration-300 py-4 '
        onClick={toggleAccordion}
      >
        <div
          className='w-4 h-4 md:col-span-1 mx-4 md:mx-8 my-1 transition-transform duration-300'
          style={{
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
            transformOrigin: 'center',
          }}
        >
          <Chevron />
        </div>
        <div className='flex md:grid md:col-start-0 px-4 text-lg font-bold'>
          <p>{taskNumber}</p>
        </div>
        <div className='flex items-center md:col-span-9 px-4 md:pl-8 lg:pl-2 text-lg font-semibold'>
          <p>{goalTitle}</p>
        </div>
      </div>

      <div
        className='overflow-hidden transition-height duration-300 ease-in-out'
        style={{ height: `${height}px` }}
        ref={contentRef}
      >
        <div className='p-2 grid grid-cols-12 my-2 mt-4'>
          <div className='col-span-12 md:col-start-2 md:col-span-10'>{description}</div>
        </div>

        <div className='p-2 block md:grid md:grid-cols-12'>
          {/* Left Panel Content */}
          <div className='h-full col-span-12 md:col-span-6 md:col-start-2'>
            <p className='uppercase font-semibold my-4'>{mapTitle}</p>
            <span aria-label={mapLabel} />
            <div className='h-[50vh]'>{leftPanelContent}</div>
          </div>
          {/* Right Panel Content */}
          <div className='mt-28 md:mt-0 col-span-12 md:col-span-3 md:col-start-9'>
            <p className='uppercase font-semibold md:my-4'>2030 Target</p>
            <div className='my-4'>{targetText}</div>
            <StackedBar
              data={stackedBarData}
              aria-label={chartLabel}
              goal={stackedBarGoal}
              isOpen={isOpen}
            />
            <p className='uppercase font-semibold mt-12'>How Will Texas Get There?</p>
            <div className='my-4'>
              {/* <p className='my-4'>Implementation Strategies</p> */}
              <ol className='list-decimal list-inside'>
                {/* Check if strategies is defined and is an array before mapping */}
                {strategies &&
                  strategies.map((strategy: string, index: number) => (
                    <li key={index} className='mt-2 first:mt-0'>
                      {strategy}
                    </li>
                  ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollapsibleCard;
