import React from 'react'
import { useDisclosure } from '@mantine/hooks';
import CardTerms from '../../components/CardTerms';
import IntroCards from '../../components/IntroCards';

const StrategiesTwo = () => {
  const [opened, { toggle }] = useDisclosure(false);

  return (
    <div className='w-full h-full bg-[#FFFDF6] px-4 font-sans'>
        <div className='max-w-[1240px] grid md:grid-cols-12'>
            <div className='flex flex-col col-start-4 col-span-6 justify-center items-center pt-20 md:pb-20'>
                <p className=''>
                Click on the images to read about the strategies that will ensure the success of the Texas Digital Opportunity Plan.
                </p>
            </div>
        </div>
        <div className='block md:grid md:grid-cols-12 gap-2'>
                <div className='flex flex-col col-start-4 col-span-2 items-center mb-[5vh]'>
                <CardTerms img={IntroCards.Broadband.img} altText={IntroCards.Broadband.altText} title={IntroCards.Broadband.title} description={IntroCards.Broadband.description} />
                </div>
                <div className='flex flex-col col-start-6 col-span-2 items-center'>
                <CardTerms img={IntroCards.Affordability.img} altText={IntroCards.Affordability.altText} title={IntroCards.Affordability.title} description={IntroCards.Affordability.description} />
                </div>
                <div className='flex flex-col col-start-8 col-span-2 items-center'>
                <CardTerms img={IntroCards.Digital_Literacy.img} altText={IntroCards.Digital_Literacy.altText} title={IntroCards.Digital_Literacy.title} description={IntroCards.Digital_Literacy.description} />
                </div>
            </div>
            <div className='block md:grid md:grid-cols-12 gap-2 mb-[40vh]'>
            <div className='flex flex-col col-start-4 col-span-2 items-center pt-0 md:pb-0'>
                <CardTerms img={IntroCards.Devices.img} altText={IntroCards.Devices.altText} title={IntroCards.Devices.title} description={IntroCards.Devices.description} />
                </div>
                <div className='flex flex-col col-start-6 col-span-2 items-center pt-0 md:pb-0'>
                <CardTerms img={IntroCards.Cybersecurity.img} altText={IntroCards.Cybersecurity.altText} title={IntroCards.Cybersecurity.title} description={IntroCards.Cybersecurity.description} />
                </div>
                <div className='flex flex-col col-start-8 col-span-2 items-center pt-0 md:pb-0'>
                <CardTerms img={IntroCards.Adoption.img} altText={IntroCards.Adoption.altText} title={IntroCards.Adoption.title} description={IntroCards.Adoption.description} />
                </div>
            </div>
    </div>
  )
}

export default StrategiesTwo;