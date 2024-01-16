import 'react-dropdown/style.css';
import TexasStripes from '@/components/TexasStripes';

const StrategiesOne = () => {
  return (
    <div className='w-full h-full bg-[#FFFDF6] px-4'>
      <div className='grid md:grid-cols-12'>
        <div className='flex flex-col md:col-start-4 md:col-span-6 justify-center items-center pt-20'>
          <TexasStripes />
          <p className='py-4'>
            The BDO will focus on four key strategies to address the challenges and needs outlined
            in this plan, and to achieve its goals and overall mission.
          </p>
        </div>
      </div>
    </div>
  );
};

export default StrategiesOne;
