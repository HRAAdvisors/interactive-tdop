// import { useDisclosure } from '@mantine/hooks';

import CardTerms from '@/components/CardTerms';
import StrategiesCards from '@/static/StrategiesCards';

const StrategiesTwo = () => {
  return (
    <div className='w-full h-full bg-[#FFFDF6] px-4'>
      <div className='grid md:grid-cols-12'>
        <div className='flex flex-col col-start-4 col-span-6 justify-center pt-4 pb-20'>
          <p className=''>
            Click on the images to read about the strategies that will ensure the success of the
            Texas Digital Opportunity Plan.
          </p>
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-12 lg:grid-cols-12 gap-2'>
        <div className='flex flex-col items-center mb-[5vh] md:col-start-4 md:col-span-3'>
          <CardTerms
            img={StrategiesCards.Statewide.img}
            altText={StrategiesCards.Statewide.altText}
            title={StrategiesCards.Statewide.title}
            description={StrategiesCards.Statewide.description}
          />
        </div>
        <div className='flex flex-col items-center mb-[5vh] md:col-start-7 md:col-span-3'>
          <CardTerms
            img={StrategiesCards.Living_Plan.img}
            altText={StrategiesCards.Living_Plan.altText}
            title={StrategiesCards.Living_Plan.title}
            description={StrategiesCards.Living_Plan.description}
          />
        </div>
        <div className='flex flex-col items-center mb-[5vh] md:col-start-4 md:col-span-3'>
          <CardTerms
            img={StrategiesCards.Local.img}
            altText={StrategiesCards.Local.altText}
            title={StrategiesCards.Local.title}
            description={StrategiesCards.Local.description}
          />
        </div>
        <div className='flex flex-col items-center mb-[5vh] md:col-start-7 md:col-span-3'>
          <CardTerms
            img={StrategiesCards.Promotion.img}
            altText={StrategiesCards.Promotion.altText}
            title={StrategiesCards.Promotion.title}
            description={StrategiesCards.Promotion.description}
          />
        </div>
      </div>
      <div className='grid md:grid-cols-12'>
        <div className='flex flex-col col-start-4 col-span-6 justify-center items-center pt-20 pb-[20vh]'>
          <p>
            The BDO will implement the four strategies{' '}
            <strong>
              in collaboration with State agencies, local partners, community members, and others
              from the Texas digital opportunity ecosystem.
            </strong>{' '}
          </p>
        </div>
      </div>
    </div>
  );
};

export default StrategiesTwo;
