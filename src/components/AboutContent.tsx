import { ReactElement } from 'react';
import { IconType } from 'react-icons';

interface DynamicContentProps {
  Icon: IconType;
  text: string;
}

const AboutContent: React.FC<DynamicContentProps> = ({ Icon, text }: DynamicContentProps) => {
  return (
    <div className='grid bg-[#FFFDF6] md:grid-cols-12'>
      <div className='flex flex-col col-start-2 col-span-5 justify-center pt-20 pb-20 px-4'>
        <div className='w-full h-full flex justify-center items-center'>
          <Icon className='w-32 h-32' />
        </div>
      </div>
      <div className='flex flex-col col-start-8 col-span-4 justify-center pt-20 pb-20 px-4'>
        <hr className='my-6'></hr>
        <p className='text-md my-2'>{text}</p>
        <hr className='my-6'></hr>
      </div>
    </div>
  );
};

export default AboutContent;
