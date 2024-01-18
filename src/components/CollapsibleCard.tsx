import { useState, useRef, useEffect, ReactNode } from 'react';
import PlusIcon from './PlusIcon';

interface CollapsibleCardProps {
  taskNumber: string;
  color: string;
  goalTitle: string;
  description: ReactNode;
  mapTitle?: string; // If this is optional, mark it as such
  mapSource?: string; // If this is optional, mark it as such
  targetText: ReactNode;
  leftPanelContent: ReactNode;
  rightPanelContent: ReactNode;
  strategies: string[]; // Define as an array of strings
}

const CollapsibleCard: React.FC<CollapsibleCardProps> = ({
  taskNumber,
  color,
  goalTitle,
  description,
  mapTitle,
  mapSource,
  targetText,
  leftPanelContent,
  rightPanelContent,
  strategies,
}) => {
  const [isOpen, setIsOpen] = useState(false);
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
        <div className='flex md:grid md:col-start-0 px-8 text-lg font-bold'>
          <p className='' style={{ color: `${color}` }}>
            {taskNumber}
          </p>
        </div>
        <div className='flex items-center md:col-span-8 md:col-start-2 text-lg font-bold'>
          <p>{goalTitle}</p>
        </div>
        <div
          className='w-4 h-4 md:col-span-1 mx-10 transition-transform transform-origin duration-300'
          style={{ transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)' }}
        >
          <PlusIcon />
        </div>
      </div>

      <div
        className='overflow-hidden transition-max-height duration-300 ease-in-out'
        style={{ maxHeight: `${height}px` }}
        ref={contentRef}
      >
        <div className='bg-[#FFFDF6]'>
          <div className='grid grid-cols-12 my-2'>
            <div className='col-span-8 md:col-start-2 md:col-span-10 flex items-center'>
              {description}
            </div>
          </div>

          <div className='p-2 block md:grid md:grid-cols-12'>
            {/* Left Panel Content */}
            <div className='md:col-span-6 md:col-start-2'>
              <p className='uppercase underline font-medium my-4'>{mapTitle}</p>
              <div className='h-[60vh]'>{rightPanelContent}</div>
              <p className='my-4'>
                <strong>Source</strong>: {mapSource}
              </p>
            </div>
            {/* Right Panel Content */}
            <div className='md:col-span-3 md:col-start-9'>
              <p className='uppercase underline font-medium my-4'>2030 Target</p>
              <div className='my-4'>{targetText}</div>
              {leftPanelContent}
              <p className='uppercase underline font-medium mt-12'>How Will Texas Get There?</p>
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
    </div>
  );
};

export default CollapsibleCard;
