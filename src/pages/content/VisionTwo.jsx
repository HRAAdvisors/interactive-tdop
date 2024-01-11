import CardTerms from '../../components/CardTerms';
import VisionCards from '../../components/VisionCards'
import 'react-dropdown/style.css';
import { Menu, Button } from '@mantine/core'
import CollapsibleCard from '../../components/CollapsibleCard';
import MapContainer from '../../components/MapContainer';
import SingleStackedBarChart from '../../components/SingleStackedBarChart';


const VisionTwo = () => {
    const options = [
        'one', 'two', 'three'
      ];
      const defaultOption = options[0];
      
    return ( 
        <div className='w-full h-full bg-[#FFFDF6] px-4 font-sans'>
        <div className='grid md:grid-cols-12'>
          <div className='flex flex-col md:col-start-4 md:col-span-6 justify-center gap-2'>
            <p className='py-12'>
              Achieving this vision will advance state policy priorities and efforts in six areas:
            </p>
          </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-12 lg:grid-cols-12 gap-2 mb-[20vh]'>
          <div className='flex flex-col items-center mb-[5vh] md:col-start-4 md:col-span-3 lg:col-start-4 lg:col-span-2'>
            <CardTerms
              img={VisionCards.Business.img}
              altText={VisionCards.Business.altText}
              title={VisionCards.Business.title}
              description={VisionCards.Business.description}
            />
          </div>
          <div className='flex flex-col items-center mb-[5vh] md:col-start-7 md:col-span-3 lg:col-start-6 lg:col-span-2'>
            <CardTerms
              img={VisionCards.Education.img}
              altText={VisionCards.Education.altText}
              title={VisionCards.Education.title}
              description={VisionCards.Education.description}
            />
          </div>
          <div className='flex flex-col items-center mb-[5vh] md:col-start-4 md:col-span-3 lg:col-start-8 lg:col-span-2'>
            <CardTerms
              img={VisionCards.Accessibility.img}
              altText={VisionCards.Accessibility.altText}
              title={VisionCards.Accessibility.title}
              description={VisionCards.Accessibility.description}
            />
          </div>
          <div className='flex flex-col items-center mb-[5vh] md:col-start-7 md:col-span-3 lg:col-start-4 lg:col-span-2'>
            <CardTerms
              img={VisionCards.Health.img}
              altText={VisionCards.Health.altText}
              title={VisionCards.Health.title}
              description={VisionCards.Health.description}
            />
          </div>
          <div className='flex flex-col items-center mb-[5vh] md:col-start-4 md:col-span-3 lg:col-start-6 lg:col-span-2'>
            <CardTerms
              img={VisionCards.Civic_Engagement.img}
              altText={VisionCards.Civic_Engagement.altText}
              title={VisionCards.Civic_Engagement.title}
              description={VisionCards.Civic_Engagement.description}
            />
          </div>
          <div className='flex flex-col items-center mb-[5vh] md:col-start-7 md:col-span-3 lg:col-start-8 lg:col-span-2'>
            <CardTerms
              img={VisionCards.Workforce.img}
              altText={VisionCards.Workforce.altText}
              title={VisionCards.Workforce.title}
              description={VisionCards.Workforce.description}
            />
          </div>
        </div>
      </div>
     );
}
 
export default VisionTwo;