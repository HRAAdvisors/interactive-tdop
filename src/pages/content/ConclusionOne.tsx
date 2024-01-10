import 'react-dropdown/style.css';

import TexasStripes from '@/components/TexasStripes';
import ButtonDark from '@/components/ui/ButtonDark';
import ButtonLight from '@/components/ui/ButtonLight';

const ConclusionOne = () => {
  return (
    <div className='w-full h-screen px-4 font-sans'>
      <div className='grid md:grid-cols-12 font-sans'>
        <div className='font-sans flex flex-col md:col-start-4 md:col-span-6 justify-center pt-[10vh]'>
          <TexasStripes />
          <p className='py-12'>
            The Texas Digital Opportunity Plan presents this set of strategies in response to
            specific digital needs statewide.
          </p>
          <p>
            The strategies this plan proposes will ensure that all Texans are able to fully
            participate in our 21st century economy and social and civil society.
          </p>
        </div>
        <div className='flex flex-col md:col-start-4 md:col-span-6 justify-center items-center md:pb-20'>
          <p className='py-12 font-sans'>
            However, the Texas Digital Opportunity Plan is intended to be a living document. We
            welcome your comments at this link, your feedback at our email address, and your
            continued participation in the expansion of digital opportunity in Texas through public
            events or other forums.
          </p>
          <p>
            If you want to dive deeper into specific issues, specific counties or regions, or
            anything else, click here to review the BDO’s Digital Opportunity Dashboards.  
          </p>
          <div className='flex justify-between py-[20vh] w-full'>
            <ButtonDark text='Interactive Plan' className='flex-1'></ButtonDark>
            <ButtonLight text='Data Dashboards' className='flex-1'></ButtonLight>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConclusionOne;
