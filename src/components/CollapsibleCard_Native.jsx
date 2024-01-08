import React, { useState } from 'react';
import ButtonLight from './ButtonLight';

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
  strategy3
}) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
      setIsOpen(!isOpen);
    };

  return (
    <div className="bg-[#FFFDF6] my-4 shadow-md rounded-none p-0">
      <div className={`flex md:grid md:grid-cols-12 items-center justify-between bg-[#ECECEC] cursor-pointer`} onClick={() => setIsOpen(!isOpen)}>
        <div className='flex md:grid md:col-span-2 bg-[#333] p-2 uppercase text-white text-xs'>
            <p>GOAL NO.{goalNumber} | Task {taskNumber}</p>
        </div>
          <div className="flex items-center md:grid md:col-span-10 justify-start p-2 text-xs uppercase">
            {goalTitle}
          </div>
        </div>

      {isOpen && (
        <div className="p-2 bg-[#FFFDF6]">
          <div className="grid grid-cols-12 p-2">
            <div className="col-span-2 flex items-center font-bold text-4xl">
              {taskNumber}
            </div>
            <div className="col-span-10 md:col-span-10 flex items-center justify-start font-bold text-xl">
              {goalTitle}
            </div>
          </div>

          <div className="p-2">
            <div className="text-xs mb-8">{description}</div>
            <h1 className="text-xs uppercase font-bold my-2">2030 Target</h1>
            <hr className="my-2" />
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-12 md:col-span-6 text-xs">
                {targetText}
              </div>
              <div className="col-span-12 md:col-span-6">
                {leftPanelContent}
              </div>
            </div>
            <h1 className="text-xs uppercase font-bold my-2">How will Texas get there?</h1>
            <hr className="my-2" />
            <div className="grid grid-cols-12 gap-4 my-8">
              <div className="col-span-12 md:col-span-4">
                <div className="text-lg font-bold">1</div>
                <div className="text-xs">{strategy1}</div>
              </div>
              <div className="col-span-12 md:col-span-4">
                <div className="text-lg font-bold">2</div>
                <div className="text-xs">{strategy2}</div>
              </div>
              <div className="col-span-12 md:col-span-4">
                <div className="text-lg font-bold">3</div>
                <div className="text-xs">{strategy3}</div>
              </div>
            </div>
            <ButtonLight text='Dive deeper into broadband availability.' />
          </div>

          <div className="p-2">
            <div className="col-span-12 md:col-span-6 my-4">
              {rightPanelContent}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CollapsibleCard;