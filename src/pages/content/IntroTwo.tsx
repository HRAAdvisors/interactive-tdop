// import { useDisclosure } from '@mantine/hooks';

import CardTerms from '@/components/CardTerms';
import IntroCards from '@/static/IntroCards';

const IntroTwo = () => {
  // const [opened, { toggle }] = useDisclosure(false);

  return (
    <div className='w-screen h-full bg-[#FFFDF6] font-sans'>
      <div className='grid md:grid-cols-12'>
        <div className='flex flex-col col-start-4 col-span-6 justify-center pt-20 pb-20 mx-[2rem]'>
          <p className=''>
            The Digital Opportunity Plan contains some technical language to refer to proven methods
            to expand digital opportunity.
            <br />
            <br />
            <strong>Click on the pictures</strong> to learn about important words and ideas in
            Digital Opportunity Plan, or scroll down to keep reading.
          </p>
        </div>
      </div>
      <div className='grid grid-cols-2 md:grid-cols-12 lg:grid-cols-12 gap-2 mx-2'>
        <div className='flex flex-col items-center mb-[5vh] md:col-start-4 md:col-span-3 lg:col-start-4 lg:col-span-2'>
          <CardTerms
            img={IntroCards.Broadband.img}
            altText={IntroCards.Broadband.altText}
            title={IntroCards.Broadband.title}
            description={IntroCards.Broadband.description}
          />
        </div>
        <div className='flex flex-col items-center mb-[5vh] md:col-start-7 md:col-span-3 lg:col-start-6 lg:col-span-2'>
          <CardTerms
            img={IntroCards.Affordable_Access.img}
            altText={IntroCards.Affordable_Access.altText}
            title={IntroCards.Affordable_Access.title}
            description={IntroCards.Affordable_Access.description}
          />
        </div>
        <div className='flex flex-col items-center mb-[5vh] md:col-start-4 md:col-span-3 lg:col-start-8 lg:col-span-2'>
          <CardTerms
            img={IntroCards.Digital_Literacy.img}
            altText={IntroCards.Digital_Literacy.altText}
            title={IntroCards.Digital_Literacy.title}
            description={IntroCards.Digital_Literacy.description}
          />
        </div>
        <div className='flex flex-col items-center mb-[5vh] md:col-start-7 md:col-span-3 lg:col-start-4 lg:col-span-2'>
          <CardTerms
            img={IntroCards.Devices.img}
            altText={IntroCards.Devices.altText}
            title={IntroCards.Devices.title}
            description={IntroCards.Devices.description}
          />
        </div>
        <div className='flex flex-col items-center mb-[5vh] md:col-start-4 md:col-span-3 lg:col-start-6 lg:col-span-2'>
          <CardTerms
            img={IntroCards.Cybersecurity.img}
            altText={IntroCards.Cybersecurity.altText}
            title={IntroCards.Cybersecurity.title}
            description={IntroCards.Cybersecurity.description}
          />
        </div>
        <div className='flex flex-col items-center mb-[5vh] md:col-start-7 md:col-span-3 lg:col-start-8 lg:col-span-2'>
          <CardTerms
            img={IntroCards.Internet_Adoption.img}
            altText={IntroCards.Internet_Adoption.altText}
            title={IntroCards.Internet_Adoption.title}
            description={IntroCards.Internet_Adoption.description}
          />
        </div>
      </div>
    </div>
  );
};

export default IntroTwo;
