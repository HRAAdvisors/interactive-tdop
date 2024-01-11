import TexasStripes from '../../components/TexasStripes';
import 'react-dropdown/style.css';
import { Menu, Button } from '@mantine/core'
import ButtonDark from '../../components/ButtonDark';
import ButtonLight from '../../components/ButtonLight';


const ConclusionOne = () => {
    return ( 
        <div className='bg-[#FFFDF6] w-full h-screen px-4 font-sans'>
        <div className='grid md:grid-cols-12 font-sans'>
          <div className='font-sans flex flex-col md:col-start-4 md:col-span-6 justify-center pt-[10vh]'>
            <TexasStripes />
            <p className='pt-12 py-4'>
              The Texas Digital Opportunity Plan offers strategies to help with digital needs across
              the state, helping all Texans have access to the same tools and information needed to
              thrive in today's society.
            </p>
            <p className='py-4'>
              The plan is a living document. We welcome your comments at this link, your feedback at
              our email address, and your continued participation in the expansion of digital
              opportunity in Texas through public events or other forums.
            </p>
          </div>
          <div className='flex flex-col md:col-start-4 md:col-span-6 md:pb-20'>
            <p className='py-4 font-sans'>
              However, the Texas Digital Opportunity Plan is intended to be a living document. We
              welcome your comments at{' '}
              <a href='https://infinite-peak-70034.herokuapp.com/'>this link</a>, your feedback at our
              email address, and your continued participation in the expansion of digital opportunity
              in Texas through public events or other forums.
            </p>
            <p className='py-4 font-sans'>
              Click here to dive deeper into the state of digital opportunity in Texas.
            </p>
            <div className='flex justify-between py-[10vh] w-full'>
              <ButtonDark text='Interactive Plan' className='flex-1'></ButtonDark>
              <ButtonLight text='Data Dashboards' className='flex-1'></ButtonLight>
            </div>
          </div>
        </div>
      </div>
     );
}
 
export default ConclusionOne;