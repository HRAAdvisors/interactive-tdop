import CollapsibleCard from '@/components/CollapsibleCard';
import MapContainer from '@/components/MapContainer';
import SingleStackedBarChart from '@/components/SingleStackedBarChart';
// import { useDisclosure } from '@mantine/hooks';

const NeedsTwo = () => {
  // const [opened, { toggle }] = useDisclosure(false);
  return (
    <div className='w-full h-full bg-[#FFFDF6] px-4'>
      <div className='grid md:grid-cols-12'>
        <div className='flex flex-col md:col-start-3 md:col-span-9 justify-center items-center'>
          <div className='mx-auto mb-20'>
            <h1 className='md:text-6xl text-2xl uppercase my-5 font-montserrat'>Goal No. 1</h1>
            <p>
              All Texans have access to reliable, affordable broadband internet service at home.
              Click below to learn more!
            </p>
            <hr className='my-5' />
            <CollapsibleCard
              goalNumber='1'
              taskNumber='1'
              color='#333333'
              goalTitle='Increase the percentage of Texans with reliable broadband subscriptions available in their homes.'
              description={
                <div>
                  <p className='mb-2'>
                    Today,{' '}
                    <strong>32% of Texan households do not subscribe to broadband internet.</strong>
                  </p>{' '}
                  <p>
                    Certain regions of Texas have higher rates of subscription, while others are
                    lower. At right, the map visualizes subscription rates for each of the twelve
                    regions of the state.
                  </p>
                </div>
              }
              targetText={
                <p>
                  <strong>80% of Texans</strong> subscribe to reliable broadband in their homes by
                  2030.
                </p>
              }
              leftPanelContent={<SingleStackedBarChart width={200} height={20} value={68} />}
              rightPanelContent={<MapContainer />}
              strategies={[
                'Partner with and fund statewide organizations',
                'Fund local partners',
                'Promote internet adoption',
              ]}
            />
            <CollapsibleCard
              goalNumber='1'
              taskNumber='2'
              color='#002768'
              goalTitle='Decrease the percentage of individuals who cite cost as a barrier to home internet service'
              description={
                <div>
                  <p className='mb-2'>
                    59% of Texas survey respondents stated that they do not subscribe to home
                    internet services because they are too expensive.
                  </p>
                  <p>
                    Respondents from certain regions of Texas cited affordability issues at higher
                    rates than others. At right, the map visualizes survey responses for each of the
                    twelve regions of the state.
                  </p>
                </div>
              }
              targetText={
                <p>
                  <strong>50% of Texans</strong> cite cost as a barrier to home internet service by
                  2030.
                </p>
              }
              leftPanelContent={<SingleStackedBarChart width={200} height={20} value={68} />}
              rightPanelContent={<MapContainer />}
              strategies={['Promote internet adoption']}
            />
            <CollapsibleCard
              goalNumber='1'
              taskNumber='3'
              color='#BE0B31'
              goalTitle='Increase the percentage of Texans who are aware of and enrolled in the Affordable Connectivity Program (ACP) and/or other low-cost or subsidized internet service options.'
              description={
                <div>
                  <p className='mb-2'>
                    Today, 38% of eligible households are enrolled in the ACP statewide.
                  </p>
                  <p>
                    Eligible respondents from certain regions of Texas are enrolled in subsidized
                    internet service options at higher rates than others. At right, the map
                    visualizes survey responses for each of the twelve regions of the state.
                  </p>
                </div>
              }
              targetText={
                <p>
                  <strong>60% of households</strong> eligible for subsidized internet service are
                  enrolled by 2030.
                </p>
              }
              leftPanelContent={<SingleStackedBarChart width={200} height={20} />}
              rightPanelContent={<MapContainer />}
              strategies={[
                'Partner with and fund statewide organizations',
                'Fund local partners',
                'Promote internet adoption',
              ]}
            />
          </div>
        </div>
        <div className='flex flex-col md:col-start-3 md:col-span-9 justify-center items-center'>
          <div className='mx-auto mb-40'>
            <h1 className='md:text-6xl text-2xl uppercase my-5 font-montserrat'>Goal No. 2</h1>
            <p>
              All Texans have access to reliable, affordable broadband internet service at home.
              Click below to learn more!
            </p>
            <hr className='my-5' />
            <CollapsibleCard
              goalNumber='1'
              taskNumber='1'
              color='#333333'
              goalTitle='Increase the percentage of Texans with reliable broadband subscriptions available in their homes'
              description={
                <div>
                  <p className='mb-2'>
                    Today,{' '}
                    <strong>32% of Texan households do not subscribe to broadband internet.</strong>
                  </p>{' '}
                  <p>
                    Certain regions of Texas have higher rates of subscription, while others are
                    lower. At right, the map visualizes subscription rates for each of the twelve
                    regions of the state.
                  </p>
                </div>
              }
              targetText={
                <p>
                  The State of Texas is targeting that <strong>80% of Texans</strong> subscribe to
                  reliable broadband in their homes by 2030.
                </p>
              }
              leftPanelContent={<SingleStackedBarChart width={200} height={20} value={68} />}
              rightPanelContent={<MapContainer />}
              strategies={[
                'Partner with and fund statewide organizations',
                'Fund local partners',
                'Promote internet adoption',
              ]}
            />
            <CollapsibleCard
              goalNumber='1'
              taskNumber='2'
              color='#002768'
              goalTitle='Decrease the percentage of individuals who cite cost as a barrier to home internet service'
              description='Today, 32% of Texan households do not subscribe to broadband internet. 

                Certain regions of Texas have higher rates of subscription, while others are lower. At right, the map visualizes subscription rates for each of the twelve regions of the state.'
              leftPanelContent={<SingleStackedBarChart width={200} height={20} />}
              rightPanelContent={<MapContainer />}
              strategies={['Partner with and fund statewide organizations', 'Fund local partners']}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NeedsTwo;
