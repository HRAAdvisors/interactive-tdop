import CollapsibleCard from '@/components/CollapsibleCard';
import MapContainer from '@/components/MapContainer';
import QuoteBlock from '@/components/QuoteBlock';
import NeedsCards from '@/static/NeedsCards.tsx';
import { ChartId, DataPointGeneratorName, SegmentId } from '@/types/ChartIds';

const NeedsTwo = () => {
  return (
    <div>
      <div className='w-screen h-full bg-[#FFFDF6] px-4'>
        <div className='grid md:grid-cols-12'>
          {/* --------- GOAL 1 ------------ */}
          <div className='flex flex-col md:col-start-4 md:col-span-6 justify-center items-center'>
            <div className='mx-auto mb-20'>
              <h1 className='md:text-4xl text-2xl uppercase my-5 font-montserrat'>Goal No. 1</h1>
              <p>
                All Texans have access to reliable, affordable broadband internet service at home.
              </p>
              <hr className='my-5' />
              <CollapsibleCard
                taskNumber='1'
                goalTitle='Increase the percentage of Texans with reliable broadband subscriptions available in their homes.'
                mapTitle='Households with High-speed Internet'
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
                stackedBarData={68}
                stackedBarGoal={80}
                leftPanelContent={
                  <MapContainer
                    shouldDropdownShow={false}
                    chartId={ChartId.TXSubscription}
                    segmentId={SegmentId.counties}
                    dataPointerGenerator={DataPointGeneratorName.broadbandShare}
                    mapSource='ACS 5-Year Estimates, 2017-2021'
                  />
                }
                strategies={[
                  'Partner with and fund statewide organizations',
                  'Fund local partners',
                  'Promote internet adoption',
                ]}
              />
              <CollapsibleCard
                taskNumber='2'
                goalTitle='Decrease the percentage of individuals who cite cost as a barrier to home internet service'
                mapTitle='Texans Reporting Cost as a Barrier to Subscription'
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
                stackedBarData={59}
                stackedBarGoal={50}
                leftPanelContent={
                  <MapContainer
                    shouldDropdownShow={false}
                    chartId={ChartId.TXCostBarrier}
                    segmentId={SegmentId.regions}
                    dataPointerGenerator={DataPointGeneratorName.costAsBarrier}
                    mapSource='2023 Texas Digital Opportunity Survey'
                  />
                }
                strategies={['Fund local partners', 'Promote internet adoption']}
              />
              <CollapsibleCard
                taskNumber='3'
                goalTitle='Increase the percentage of Texans who are aware of and enrolled in the Affordable Connectivity Program (ACP) and/or other low-cost or subsidized internet service options.'
                mapTitle='Eligible Household Subscribed in the Affordable Connectivity Program (ACP)'
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
                stackedBarData={38}
                stackedBarGoal={60}
                leftPanelContent={
                  <MapContainer
                    shouldDropdownShow={false}
                    chartId={ChartId.TXACP}
                    segmentId={SegmentId.regions}
                    dataPointerGenerator={DataPointGeneratorName.acpEligibleEnrolled}
                    mapSource='Universal Service Administrative Company'
                  />
                }
                strategies={['Promote internet adoption']}
              />
            </div>
          </div>

          {/* -------- GOAL 2 -------- */}
          <div className='flex flex-col md:col-start-4 md:col-span-6 justify-center items-center'>
            <div className='mx-auto mb-20'>
              <h1 className='md:text-4xl text-2xl uppercase my-5 font-montserrat'>Goal No. 2</h1>
              <p>
                All Texans have access to affordable computers and other internet-enabled devices in
                their home, with corresponding technical support services.
              </p>
              <hr className='my-5' />
              <CollapsibleCard
                taskNumber='1'
                goalTitle='Increase the percentage of Texans who have home access to affordable internet-enabled devices other than a smartphone.'
                mapTitle='Households with Smartphones Only'
                description={
                  <div>
                    <p className='mb-2'>
                      Today,{' '}
                      <strong>
                        11% of Texas households have a smartphone only and no other computing
                        device. 
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
                    <strong>10% of Texans</strong> have a smartphone only and no other computing
                    device by 2030.
                  </p>
                }
                stackedBarData={11}
                stackedBarGoal={10}
                leftPanelContent={<MapContainer shouldDropdownShow={false} />}
                strategies={[
                  'Partner with and fund statewide organizations',
                  'Fund local partners',
                ]}
              />
              <CollapsibleCard
                taskNumber='2'
                goalTitle='Increase access to technical support for more Texans with internet-enabled devices.'
                description={
                  <div>
                    <p className='mb-2'>
                      Today, <strong>16% of services and programs</strong> offered by organizations
                      surveyed statewide offer digital skills and technical support.
                    </p>{' '}
                  </div>
                }
                targetText={
                  <p>
                    <strong>25% of services and programs</strong> statewide offer digital skills and
                    technical support by 2030.
                  </p>
                }
                stackedBarData={16}
                stackedBarGoal={25}
                leftPanelContent={
                  <div>
                    <QuoteBlock quote={NeedsCards.KPI2_2.quote} />
                    <div className='my-4 text-xs'>
                      {' '}
                      <span className='uppercase underline'>Source</span>: Comment from a
                      Participant at the Alpine Public Meeting
                    </div>
                  </div>
                }
                strategies={[
                  'Partner with and fund statewide organizations',
                  'Fund local partners',
                  'Maintain a living digital opportunity plan',
                ]}
              />
            </div>
          </div>

          {/* --------- GOAL 3 ------------- */}
          <div className='flex flex-col md:col-start-4 md:col-span-6 justify-center items-center'>
            <div className='mx-auto mb-20'>
              <h1 className='md:text-4xl text-2xl uppercase my-5 font-montserrat'>Goal No. 3</h1>
              <p>
                All Texans have a broad foundation of digital literacy skills and access to a
                continuum of digital skills development programs.
              </p>
              <hr className='my-5' />
              <CollapsibleCard
                taskNumber='1'
                goalTitle='Increase the percentage of Texans who have basic digital literacy skills.'
                mapTitle='Texans Reporting Comfort with Basic Digital Literacy Skills'
                description={
                  <div>
                    <p className='mb-2'>
                      Today,{' '}
                      <strong>
                        88% of Texans are comfortable with basic digital literacy skills such as
                        connecting a computer or smartphone to a Wi-Fi network.
                      </strong>
                    </p>{' '}
                    <p>
                      Certain regions of Texas have higher rates of digital literacy, while others
                      are lower. At right, the map visualizes survey responses for each of the
                      twelve regions of the state.
                    </p>
                  </div>
                }
                targetText={
                  <p>
                    <strong>95% of Texans</strong> are comfortable with basic digital literacy
                    skills by 2030.
                  </p>
                }
                stackedBarData={88}
                stackedBarGoal={95}
                leftPanelContent={
                  <MapContainer
                    shouldDropdownShow={false}
                    chartId={ChartId.TXDigitalLiteracy}
                    segmentId={SegmentId.regions}
                    dataPointerGenerator={DataPointGeneratorName.digitalLiteracySkills}
                    mapSource='2023 Texas Digital Opportunity Survey'
                  />
                }
                strategies={[
                  'Partner with and fund statewide organizations',
                  'Maintain a living digital opportunity plan',
                ]}
              />
              <CollapsibleCard
                taskNumber='2'
                goalTitle='Increase the availability of digital literacy programs and services.'
                description={
                  <div>
                    <p className='mb-2'>
                      Today, <strong>16% of services and programs</strong> offered by organizations
                      surveyed statewide offer digital skills and technical support.
                    </p>
                  </div>
                }
                targetText={
                  <p>
                    <strong>25% of services and programs</strong> statewide offer digital skills and
                    technical support by 2030.
                  </p>
                }
                stackedBarData={16}
                stackedBarGoal={25}
                leftPanelContent={
                  <div>
                    <QuoteBlock quote={NeedsCards.KPI3_2.quote} />
                    <div className='my-4 text-xs'>
                      {' '}
                      <span className='uppercase underline'>Source</span>: Community Development
                      Nonprofit in Potter County
                    </div>
                  </div>
                }
                strategies={[
                  'Partner with and fund statewide organizations',
                  'Fund local partners',
                ]}
              />
              <CollapsibleCard
                taskNumber='3'
                goalTitle='Increase the percentage of Texas workers who have the level of digital skills training jobs require.'
                description={
                  <div>
                    <p className='mb-2'>
                      Today, <strong>45% of Texas workers</strong> have the digital skills training
                      required for most jobs statewide.
                    </p>
                  </div>
                }
                targetText={
                  <p>
                    <strong>55% of Texas workers</strong> have the digital skills training required
                    for most jobs statewide by 2030.
                  </p>
                }
                stackedBarData={45}
                stackedBarGoal={55}
                leftPanelContent={
                  <div>
                    <QuoteBlock quote={NeedsCards.KPI3_3.quote} />
                    <div className='my-4 text-xs'>
                      {' '}
                      <span className='uppercase underline'>Source</span>: Comment from a
                      Participant at the Borger Public Meeting
                    </div>
                  </div>
                }
                strategies={['Partner with and fund statewide organizations']}
              />
            </div>
          </div>

          {/* -------- GOAL 4 -------- */}
          <div className='flex flex-col md:col-start-4 md:col-span-6 justify-center items-center'>
            <div className='mx-auto mb-20'>
              <h1 className='md:text-4xl text-2xl uppercase my-5 font-montserrat'>Goal No. 4</h1>
              <p>
                All Texans feel safe online and are familiar with cybersecurity and online privacy
                measures.
              </p>
              <hr className='my-5' />
              <CollapsibleCard
                taskNumber='1'
                goalTitle='Increase the percentage of Texans who are familiar with cybersecurity and online privacy measures.'
                mapTitle='Texans Reporting Awareness and Usage Cybersecurity Measures'
                description={
                  <div>
                    <p className='mb-2'>
                      Today,{' '}
                      <strong>
                        86% of Texans are familiar with cybersecurity measures and have set them up
                        on their devices.
                      </strong>
                    </p>{' '}
                    <p>
                      Certain regions of Texas have higher rates of cybersecurity awareness, while
                      others are lower. At right, the map visualizes survey responses for each of
                      the twelve regions of the state.
                    </p>
                  </div>
                }
                targetText={
                  <p>
                    <strong>99% of Texans</strong> are familiar with cybersecurity measures and have
                    set them up on their devices by 2030.
                  </p>
                }
                stackedBarData={86}
                stackedBarGoal={99}
                leftPanelContent={
                  <MapContainer
                    shouldDropdownShow={false}
                    chartId={ChartId.TXCybersecurityAwareness}
                    segmentId={SegmentId.regions}
                    dataPointerGenerator={DataPointGeneratorName.cybersecurityAwareness}
                    mapSource='2023 Texas Digital Opportunity Survey'
                  />
                }
                strategies={[
                  'Partner with and fund statewide organizations',
                  'Fund local partners',
                ]}
              />
            </div>
          </div>

          {/* -------- GOAL 5 -------- */}
          <div className='flex flex-col md:col-start-4 md:col-span-6 justify-center items-center'>
            <div className='mx-auto mb-20'>
              <h1 className='md:text-4xl text-2xl uppercase my-5 font-montserrat'>Goal No. 5</h1>
              <p>
                Increase the percentage of Texans who utilize the internet for public resources and
                services.
              </p>
              <hr className='my-5' />
              <CollapsibleCard
                taskNumber='1'
                goalTitle='Increase the percentage of Texans who utilize and understand how to use the internet for public resources and services.  '
                mapTitle='Texans Reporting Usage of the Internet to Access Healthcare'
                description={
                  <div>
                    <p className='mb-2'>
                      Today,{' '}
                      <strong>82% of Texans utilize the internet to access healthcare.</strong>
                    </p>{' '}
                    <p>
                      Certain regions of Texas have higher rates of accessing healthcare online,
                      while others are lower. At right, the map visualizes survey responses for each
                      of the twelve regions of the state.
                    </p>
                  </div>
                }
                targetText={
                  <p>
                    <strong>90% of Texans</strong> utilize the internet to access healthcare by
                    2030.
                  </p>
                }
                stackedBarData={82}
                stackedBarGoal={90}
                leftPanelContent={
                  <MapContainer
                    shouldDropdownShow={false}
                    chartId={ChartId.TXPublicResourceAccess}
                    segmentId={SegmentId.regions}
                    dataPointerGenerator={DataPointGeneratorName.publicResourceAccess}
                    mapSource='2023 Texas Digital Opportunity Survey'
                  />
                }
                strategies={[
                  'Partner with and fund statewide organizations',
                  'Fund local partners',
                  'Promote internet adoption',
                  'Maintain a living digital opportunity plan',
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
