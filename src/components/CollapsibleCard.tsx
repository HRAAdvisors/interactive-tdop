import { useState, useRef, useEffect } from 'react';
import PlusIcon from './PlusIcon';
import ButtonLight from './ui/ButtonLight';

const CollapsibleCard = ({
  goalNumber,
  taskNumber,
  color,
  goalTitle,
  description,
  targetText,
  leftPanelContent,
  rightPanelContent,
  strategy1,
  strategy2,
  strategy3,
}: {
  [x: string]: string | React.ReactNode;
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
    <div className='bg-[#FFFDF6] my-4 shadow-md rounded-none'>
      <div
        className={`flex md:grid md:grid-cols-12 items-center justify-between bg-[#ECECEC] cursor-pointer md:hover:shadow-md md:hover:scale-[101%] duration-300`}
        onClick={toggleAccordion}
      >
        <div
          className='flex md:grid md:col-span-2 md:grid-cols-2 p-4 uppercase text-white text-xs'
          style={{ background: `${color}` }}
        >
          <p className='md:mr-8 w-full text-[#B9B9B9]'>GOAL NO.{goalNumber}</p>
          <p className=''>Task {taskNumber}</p>
        </div>
        <div className='flex items-center md:grid md:grid-cols-11 md:col-span-10 p-4 text-xs uppercase'>
          <span className='md:col-span-10 col-span-8'>{goalTitle}</span>
          <div
            className='w-4 h-4 md:col-span-1 transition-transform transform-origin duration-300'
            style={{ transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)' }}
          >
            <PlusIcon />
          </div>
        </div>
      </div>

      <div
        className='overflow-hidden transition-max-height duration-300 ease-in-out'
        style={{ maxHeight: `${height}px` }}
        ref={contentRef}
      >
        <div className='p-2 bg-[#FFFDF6]'>
          <div className='grid grid-cols-12 p-2 my-6'>
            <div className='col-span-1 flex items-center font-bold text-4xl'>{taskNumber}</div>
            <div className='col-span-10 md:col-span-10 flex items-center justify-start font-bold text-xl'>
              {goalTitle}
            </div>
          </div>

          <div className='p-2 block md:grid md:grid-cols-12 md:gap-10'>
            {/* Left Panel Content */}
            <div className='md:col-span-6'>
              <div className='text-xs mb-8'>{description}</div>
              <h1 className='text-xs uppercase font-bold my-2'>2030 Target</h1>
              <hr className='my-2' />
              <div className='grid grid-cols-12 gap-4'>
                <div className='col-span-12 md:col-span-6 text-xs'>{targetText}</div>
                <div className='col-span-12 md:col-span-6'>{leftPanelContent}</div>
              </div>
              <h1 className='text-xs uppercase font-bold my-2'>How will Texas get there?</h1>
              <hr className='my-2' />
              <div className='grid grid-cols-12 gap-4 my-8'>
                <div className='col-span-12 md:col-span-4'>
                  <div className='text-lg font-bold'>1</div>
                  <div className='text-xs'>{strategy1}</div>
                </div>
                <div className='col-span-12 md:col-span-4'>
                  <div className='text-lg font-bold'>2</div>
                  <div className='text-xs'>{strategy2}</div>
                </div>
                <div className='col-span-12 md:col-span-4'>
                  <div className='text-lg font-bold'>3</div>
                  <div className='text-xs'>{strategy3}</div>
                </div>
              </div>
              <ButtonLight text='Dive deeper into broadband availability.' />
            </div>

            {/* Right Panel Content */}
            <div className='md:col-span-6 md:col-start-7'>{rightPanelContent}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollapsibleCard;
