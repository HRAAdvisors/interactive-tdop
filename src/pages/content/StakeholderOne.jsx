import TexasStripes from '../../components/TexasStripes';
import 'react-dropdown/style.css';
import { Menu, Button } from '@mantine/core'


const StakeholderOne = () => {
    return ( 
        <div className='w-full h-full bg-[#FFFDF6] px-4 font-sans'>
        <div className='grid md:grid-cols-12'>
          <div className='flex flex-col md:col-start-4 md:col-span-6 justify-center items-center pt-20'>
            <TexasStripes />
            <p className='py-12 font-sans'>
              To develop the Digital Opportunity Plan, the BDO worked with local groups and engaged
              residents across the state, reflecting Texas’ diversity. Thousands of Texans – including
              individuals from all walks of life and the diverse organizations that serve them –
              shared their experiences and informed this plan. 
            </p>
          </div>
        </div>
      </div>
     );
}
 
export default StakeholderOne;