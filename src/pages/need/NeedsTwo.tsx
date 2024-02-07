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
                Expand adoption of reliable, affordable broadband internet service at home for all
                Texans, including individuals belonging to covered populations.
              </p>
              <hr className='my-5' />
              <CollapsibleCard
                defaultOpen={true}
                taskNumber='1'
                goalTitle='Increase the percentage of Texans with reliable high-speed internet subscriptions, including Texans belonging to all covered population groups (except those currently incarcerated).'
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
                    <strong>Fewer than 50% of Texans</strong> cite cost as a barrier to home
                    internet service by 2030.
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
                goalTitle='Increase the percentage of Texans who are aware of the Affordable Connectivity Program (ACP) and/or other low-cost or subsidized internet service options.'
                mapTitle='Texans Reporting Awareness of the Affordable Connectivity Program (ACP)'
                description={
                  <div>
                    <p className='mb-2'>
                      Today, <strong>40% of survey respondents</strong> have heard of the ACP.
                    </p>
                    <p>
                      Eligible respondents from certain regions of Texas are aware of subsidized
                      internet service options at higher rates than others. At right, the map
                      visualizes data from the Digital Opportunity Survey for each of the twelve
                      regions of the state.
                    </p>
                  </div>
                }
                targetText={
                  <p>
                    <strong>50% of households</strong> are aware of discounted services like ACP by
                    2030.
                  </p>
                }
                stackedBarData={40}
                stackedBarGoal={50}
                leftPanelContent={
                  <MapContainer
                    shouldDropdownShow={false}
                    chartId={ChartId.TXACPAwareness}
                    segmentId={SegmentId.regions}
                    dataPointerGenerator={DataPointGeneratorName.acpAwareness}
                    mapSource='2023 Texas Digital Opportunity Survey'
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
                        89% of Texas households have a computing device other than a smartphone.
                      </strong>
                    </p>{' '}
                    <p>
                      Some regions of Texas have higher rates of smartphone-only connectivity.
                      Below, the map visualizes rates of computer ownership for each of the twelve
                      regions of the state.
                    </p>
                  </div>
                }
                targetText={
                  <p>
                    <strong>90% of Texans</strong> have a smartphone only and no other computing
                    device by 2030.
                  </p>
                }
                stackedBarData={89}
                stackedBarGoal={90}
                leftPanelContent={
                  <MapContainer
                    shouldDropdownShow={false}
                    chartId={ChartId.TXDevices}
                    segmentId={SegmentId.counties}
                    dataPointerGenerator={DataPointGeneratorName.smartphoneOnly}
                    mapSource='ACS 5-Year Estimates, 2017-2021'
                  />
                }
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
                      <strong>39% of organizations surveyed</strong> offer digital skills and
                      technical support.
                    </p>{' '}
                  </div>
                }
                targetText={
                  <p>
                    <strong>50% of organizations</strong> offer digital skills and technical support
                    by 2030.
                  </p>
                }
                stackedBarData={39}
                stackedBarGoal={50}
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
                        88% of Texans are comfortable with basic digital literacy skills
                      </strong>{' '}
                      such as connecting a computer or smartphone to a Wi-Fi network.
                    </p>
                    <p>
                      Certain regions of Texas have higher rates of digital literacy, while others
                      are lower. Below, the map visualizes survey responses for each of the twelve
                      regions of the state.
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
                      Today, <strong>39% of organizations surveyed</strong> offer digital skills and
                      technical support.
                    </p>
                  </div>
                }
                targetText={
                  <p>
                    <strong>50% of organizations</strong> offer digital literacy skills and support
                    by 2030.
                  </p>
                }
                stackedBarData={39}
                stackedBarGoal={50}
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
                goalTitle='Increase the percentage of Texans who have cybersecurity and online privacy measures set up on their devices.'
                mapTitle='Texans Reporting Awareness and Usage Cybersecurity Measures'
                description={
                  <div>
                    <p className='mb-2'>
                      Today, <strong>86% of Texans</strong> have cybersecurity measures set up on
                      their devices.
                    </p>
                    <p>
                      Certain regions of Texas have higher rates of cybersecurity awareness, while
                      others are lower. Below, the map visualizes survey responses for each of the
                      twelve regions of the state.
                    </p>
                  </div>
                }
                targetText={
                  <p>
                    <strong>At least 90% of Texans</strong> have cybersecurity measures set up on
                    their devices by 2030.
                  </p>
                }
                stackedBarData={86}
                stackedBarGoal={90}
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
                goalTitle='Increase the percentage of Texans who utilize and understand how to use the internet for public resources and services (using accessing healthcare as a baseline).'
                mapTitle='Texans Reporting Usage of the Internet to Access Healthcare'
                description={
                  <div>
                    <p className='mb-2'>
                      Today,{' '}
                      <strong>89% of Texans utilize the internet to access healthcare.</strong>
                    </p>{' '}
                    <p>
                      Certain regions of Texas have higher rates of accessing healthcare online,
                      while others are lower. Below, the map visualizes survey responses for each of
                      the twelve regions of the state.
                    </p>
                  </div>
                }
                targetText={
                  <p>
                    <strong>95% of Texans</strong> utilize the internet to access healthcare by
                    2030.
                  </p>
                }
                stackedBarData={89}
                stackedBarGoal={95}
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
