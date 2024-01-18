import CollapsibleCard from '@/components/CollapsibleCard';
import MapContainer from '@/components/MapContainer';
import SingleStackedBarChart from '@/components/SingleStackedBarChart';
// import { useDisclosure } from '@mantine/hooks';

const NeedsTwo = () => {
  // const [opened, { toggle }] = useDisclosure(false);
  return (
    <div>
      <div className='w-screen h-full bg-[#FFFDF6] px-4 font-sans'>
        <div className='grid md:grid-cols-12'>
          <div className='flex flex-col md:col-start-4 md:col-span-6 justify-center items-center'>
            <div className='mx-auto mb-20'>
              <h1 className='md:text-4xl text-2xl uppercase my-5 font-montserrat'>Goal No. 1</h1>
              <p>
                All Texans have access to reliable, affordable broadband internet service at home.
                Click below to learn more!
              </p>
              <hr className='my-5' />
              <CollapsibleCard
                taskNumber='1'
                color='#333333'
                goalTitle='Increase the percentage of Texans with reliable broadband subscriptions available in their homes.'
                mapTitle='Households by Subscription Share'
                mapSource='FCC National Broadband Data '
                description={
                  <div>
                    <p className='mb-2'>
                      Today,{' '}
                      <strong>
                        32% of Texan households do not subscribe to broadband internet.
                      </strong>
                    </p>{' '}
                    <p>
                      Certain regions of Texas have higher rates of subscription, while others are
                      lower. Below, the map visualizes subscription rates for each of the twelve
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
                taskNumber='2'
                color='#002768'
                goalTitle='Decrease the percentage of individuals who cite cost as a barrier to home internet service'
                // mapTitle='Households by Cost as a Barrier to Subscription'
                mapSource='Southwest Focus Group Session'
                description={
                  <div>
                    <p className='mb-2'>
                      <strong>59% of Texas survey respondents</strong> stated that they do not
                      subscribe to home internet services because they are too expensive.
                    </p>
                    <p>
                      Respondents from certain regions of Texas cited affordability issues at higher
                      rates than others. Below, the map visualizes survey responses for each of the
                      twelve regions of the state.
                    </p>
                  </div>
                }
                targetText={
                  <p>
                    <strong>50% of Texans</strong> cite cost as a barrier to home internet service
                    by 2030.
                  </p>
                }
                leftPanelContent={<SingleStackedBarChart width={200} height={20} value={68} />}
                rightPanelContent={
                  <div className='h-full flex items-center'>
                    <p className='text-2xl mx-auto'>
                      "Internet service is just <strong>too expensive</strong> in my area. I know
                      there are ways for me to get online for free, but they are hard to find."
                    </p>
                  </div>
                }
                strategies={['Promote internet adoption']}
              />
              <CollapsibleCard
                taskNumber='3'
                color='#BE0B31'
                goalTitle='Increase the percentage of Texans who are aware of and enrolled in the Affordable Connectivity Program (ACP) and/or other low-cost or subsidized internet service options.'
                mapTitle='Eligible Households by Subscription in ACP'
                mapSource='ACS 2021 5-Year Estimates'
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
          <div className='flex flex-col md:col-start-4 md:col-span-6 justify-center items-center'>
            <div className='mx-auto mb-20'>
              <h1 className='md:text-4xl text-2xl uppercase my-5 font-montserrat'>Goal No. 2</h1>
              <p>
                All Texans have access to reliable, affordable broadband internet service at home.
                Click below to learn more!
              </p>
              <hr className='my-5' />
              <CollapsibleCard
                taskNumber='1'
                color='#333333'
                goalTitle='Increase the percentage of Texans with reliable broadband subscriptions available in their homes'
                description={
                  <div>
                    <p className='mb-2'>
                      Today,{' '}
                      <strong>
                        32% of Texan households do not subscribe to broadband internet.
                      </strong>
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
                taskNumber='2'
                color='#002768'
                goalTitle='Decrease the percentage of individuals who cite cost as a barrier to home internet service'
                description='Today, 32% of Texan households do not subscribe to broadband internet. 

                Certain regions of Texas have higher rates of subscription, while others are lower. At right, the map visualizes subscription rates for each of the twelve regions of the state.'
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
                ]}
              />
            </div>
          </div>
          <div className='flex flex-col md:col-start-4 md:col-span-6 justify-center items-center'>
            <div className='mx-auto mb-20'>
              <h1 className='md:text-4xl text-2xl uppercase my-5 font-montserrat'>Goal No. 3</h1>
              <p>
                All Texans have access to reliable, affordable broadband internet service at home.
                Click below to learn more!
              </p>
              <hr className='my-5' />
              <CollapsibleCard
                taskNumber='1'
                color='#333333'
                goalTitle='Increase the percentage of Texans with reliable broadband subscriptions available in their homes'
                description={
                  <div>
                    <p className='mb-2'>
                      Today,{' '}
                      <strong>
                        32% of Texan households do not subscribe to broadband internet.
                      </strong>
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
                taskNumber='2'
                color='#002768'
                goalTitle='Decrease the percentage of individuals who cite cost as a barrier to home internet service'
                description='Today, 32% of Texan households do not subscribe to broadband internet. 

                Certain regions of Texas have higher rates of subscription, while others are lower. At right, the map visualizes subscription rates for each of the twelve regions of the state.'
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
                ]}
              />
            </div>
          </div>
          <div className='flex flex-col md:col-start-4 md:col-span-6 justify-center items-center'>
            <div className='mx-auto mb-20'>
              <h1 className='md:text-4xl text-2xl uppercase my-5 font-montserrat'>Goal No. 4</h1>
              <p>
                All Texans have access to reliable, affordable broadband internet service at home.
                Click below to learn more!
              </p>
              <hr className='my-5' />
              <CollapsibleCard
                taskNumber='1'
                color='#333333'
                goalTitle='Increase the percentage of Texans with reliable broadband subscriptions available in their homes'
                description={
                  <div>
                    <p className='mb-2'>
                      Today,{' '}
                      <strong>
                        32% of Texan households do not subscribe to broadband internet.
                      </strong>
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
                taskNumber='2'
                color='#002768'
                goalTitle='Decrease the percentage of individuals who cite cost as a barrier to home internet service'
                description='Today, 32% of Texan households do not subscribe to broadband internet. 

                Certain regions of Texas have higher rates of subscription, while others are lower. At right, the map visualizes subscription rates for each of the twelve regions of the state.'
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
                ]}
              />
            </div>
          </div>
          <div className='flex flex-col md:col-start-4 md:col-span-6 justify-center items-center'>
            <div className='mx-auto mb-20'>
              <h1 className='md:text-4xl text-2xl uppercase my-5 font-montserrat'>Goal No. 5</h1>
              <p>
                All Texans have access to reliable, affordable broadband internet service at home.
                Click below to learn more!
              </p>
              <hr className='my-5' />
              <CollapsibleCard
                taskNumber='1'
                color='#333333'
                goalTitle='Increase the percentage of Texans with reliable broadband subscriptions available in their homes'
                description={
                  <div>
                    <p className='mb-2'>
                      Today,{' '}
                      <strong>
                        32% of Texan households do not subscribe to broadband internet.
                      </strong>
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
                taskNumber='2'
                color='#002768'
                goalTitle='Decrease the percentage of individuals who cite cost as a barrier to home internet service'
                description='Today, 32% of Texan households do not subscribe to broadband internet. 

                Certain regions of Texas have higher rates of subscription, while others are lower. At right, the map visualizes subscription rates for each of the twelve regions of the state.'
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
                ]}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NeedsTwo;
