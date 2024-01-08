import React from 'react'
import '../../index.css'

const IntroOne = () => {
  return (
        <div className='w-screen h-full md:h-full px-4 font-sans shadow-gradient'>
            <div className=' grid md:grid-cols-12'>
                <div className='flex flex-col md:col-start-4 md:col-span-6 justify-center items-center pt-[10vh]'>
                    {/* <TexasStripes /> */}
                    <p className='py-12 font-sans'>
                    Access to digital opportunity is not available for all Americans. In the State of Texas, some Texans thrive online, while others struggle just to connect.
                    <br />  
                    <br />
                    The Broadband Development Office, known as the BDO, listened to you on these issues and learned about the different digital experiences of Texans.
                    </p>
                    <p>
                    Over the past year, the State of Texas connected with state agencies, internet service providers, community organizations, and everyday internet users to hear about digital problems and possibilities facing Texans today.                
                    <br />  
                    <br />
                    From your input during this process, the State of Texas envisions a new state of digital opportunity, where every Texan has access to high-speed internet; an affordable, quality internet-enabled device; and the skills and resources needed to meaningfully use the internet to improve their quality of life.     
                    </p>
                </div>
            </div>
        </div>
     );
}
 
export default IntroOne;