// import { useDisclosure } from '@mantine/hooks';
import StakeholderCards from '../../static/StakeholderCards';
import CardTerms from '@/components/CardTerms';

const StakeholderTwo = () => {
  // const [opened, { toggle }] = useDisclosure(false);

  return (
    <div className='w-full h-full bg-[#FFFDF6] px-4'>
      <div className='grid md:grid-cols-12'>
        <div className='flex flex-col col-start-4 col-span-6 justify-center pt-4 pb-20'>
          <p className=''>
            Click on the images to read about the stakeholders who took part in this plan or scroll
            on to learn more about the Texas Digital Opportunity Plan. 
          </p>
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-12 lg:grid-cols-12 gap-2 mb-[40vh]'>
        <div className='flex flex-col items-center mb-[5vh] md:col-start-4 md:col-span-3 '>
          <CardTerms
            img={StakeholderCards.Covered_Populations.img}
            altText={StakeholderCards.Covered_Populations.altText}
            title={StakeholderCards.Covered_Populations.title}
            description={StakeholderCards.Covered_Populations.description}
          />
        </div>
        <div className='flex flex-col items-center mb-[5vh] md:col-start-7 md:col-span-3 '>
          <CardTerms
            img={StakeholderCards.Outcome_Areas.img}
            altText={StakeholderCards.Outcome_Areas.altText}
            title={StakeholderCards.Outcome_Areas.title}
            description={StakeholderCards.Outcome_Areas.description}
          />
        </div>
        <div className='flex flex-col items-center mb-[5vh] md:col-start-4 md:col-span-3 '>
          <CardTerms
            img={StakeholderCards.Regions_Texas.img}
            altText={StakeholderCards.Regions_Texas.altText}
            title={StakeholderCards.Regions_Texas.title}
            description={StakeholderCards.Regions_Texas.description}
          />
        </div>
        <div className='flex flex-col items-center mb-[5vh] md:col-start-7 md:col-span-3 '>
          <CardTerms
            img={StakeholderCards.Tribal_Engagements.img}
            altText={StakeholderCards.Tribal_Engagements.altText}
            title={StakeholderCards.Tribal_Engagements.title}
            description={StakeholderCards.Tribal_Engagements.description}
          />
        </div>
      </div>
    </div>
  );
};

export default StakeholderTwo;
