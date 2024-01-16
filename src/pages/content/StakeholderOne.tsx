import 'react-dropdown/style.css';
import TexasStripes from '@/components/TexasStripes';

const StakeholderOne = () => {
  return (
    <div className='w-full h-full bg-[#FFFDF6] px-4 font-sans'>
      <div className='grid md:grid-cols-12'>
        <div className='flex flex-col md:col-start-4 md:col-span-6 justify-center items-center pt-20 md:pb-20'>
          <TexasStripes />
          <p className='py-12 font-sans'>
            The BDO led a strategy for collaboration and stakeholder engagement that built on
            Texans’ diversity and bridged its geographies.
          </p>
          <p className='py-12'>
            Through the engagement process described in this chapter, thousands of Texans –
            including individuals from all walks of life and the diverse organizations that serve
            them – have shared their experiences, and informed this plan.
          </p>
        </div>
      </div>
    </div>
  );
};

export default StakeholderOne;
