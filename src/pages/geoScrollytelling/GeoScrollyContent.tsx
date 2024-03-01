import _ from 'lodash';
import { ChartId, DataPointGeneratorName, SegmentId } from '@/types/ChartIds';
import { getColorStops } from '@/utils/getColorStop';
import Legend from '@/components/ui/Legend';
import { GeoData } from '@/services/map';
import { ReactNode } from 'react';
import SplitPaneMapContainer from '@/components/SplitPaneMapContainer';
import ButtonDark from '@/components/ui/ButtonDark';
import ButtonLight from '@/components/ui/ButtonLight';

export interface MapArgProps {
  args: GeoData[];
  dataPointName: DataPointGeneratorName;
  getFitBoundaryFeature?: (
    geoJSONData?: GeoJSON.FeatureCollection<GeoJSON.Geometry>,
  ) => GeoJSON.Feature<GeoJSON.Geometry> | undefined;
}

export interface GeoScrollContent {
  id: number;
  mapData?: MapArgProps;
  getContent: (geoJSONData?: GeoJSON.FeatureCollection<GeoJSON.Geometry>) => ReactNode;
  containerClassNames?: string;
}

const contents: GeoScrollContent[] = [
  {
    id: -4,
    containerClassNames: 'text-white text-lg bg-[#111]',
    getContent: () => (
      <p className='lg:w-[60vw] md:p-60 w-90vw p-5'>
        The internet has transformed almost every aspect of our lives and society, but{' '}
        <strong>there is a growing divide</strong> between those who can fully access the benefits
        of the digital world and those who cannot.
      </p>
    ),
  },
  {
    id: -3,
    containerClassNames: 'text-white text-lg bg-[#111]',
    getContent: () => (
      <p className='lg:w-[60vw] md:p-60 w-90vw p-5'>
        <strong>It is time to bridge this divide.</strong> The internet is a necessity for
        education, work, health, safety and staying connected with friends and family. High-speed
        internet, computing devices, and the skills to use them should be accessible to everyone.
      </p>
    ),
  },
  {
    id: -2,
    containerClassNames: 'text-white text-lg bg-[#111]',
    getContent: () => (
      <p className='lg:w-[60vw] md:p-60 w-90vw p-5'>
        Texas ranks <strong>32 out of 50</strong> for internet adoption.
      </p>
    ),
  },
  {
    id: -1,
    containerClassNames: 'text-white text-lg bg-[#111]',
    getContent: () => (
      <p className='lg:w-[60vw] md:p-60 w-90vw p-5'>
         Scroll to explore the digital divide and digital opportunity in Texas -
        <strong> and why this all matters for you and your community.</strong>
        <br></br> At the bottom, you can also access Texas' plan to expand digital opportunity, dive
        deeper into the data, or explore the Digital Opportunity Resource finder.
      </p>
    ),
  },
  {
    id: 1,
    mapData: {
      args: [
        {
          geoId: '48',
          id: ChartId.TXSubscription,
          regionSetup: {
            peers: 'none',
            segments: SegmentId.counties,
          },
        },
      ],
      dataPointName: DataPointGeneratorName.broadbandShare,
    },
    getContent: (geoJSONData?: GeoJSON.FeatureCollection<GeoJSON.Geometry>) => (
      <div className='mt-2'>
        <h3 className='text-xl font-bold uppercase my-5'>Adoption Matters</h3>
        <div className='mt-2 text-md'>
          <p className='py-2'>
            Internet adoption refers to full access to and use of the internet for everyday life
            needs and goals.
          </p>
          <p className='py-2'>
            31% of Texas households do not subscribe to high-speed internet at home.
          </p>
          <div className='mt-2'></div>
          {geoJSONData && <Legend colorStops={getColorStops(geoJSONData)} />}
          <p className='mt-2 font-bold text-xs'>
            Percent of Households with High-speed Internet at Home
          </p>
          <p className='text-xs my-2'>Source: ACS 5-Year Estimates, 2017-2021</p>
        </div>
      </div>
    ),
  },
  {
    id: 2,
    mapData: {
      args: [
        {
          geoId: '48',
          id: ChartId.TXBSL,
          regionSetup: {
            peers: 'none',
            segments: SegmentId.regions,
          },
        },
      ],
      dataPointName: DataPointGeneratorName.bslUnserved,
    },
    getContent: (geoJSONData?: GeoJSON.FeatureCollection<GeoJSON.Geometry>) => (
      <div className='mt-2'>
        <h3 className='text-xl font-bold uppercase my-5'>Availability Matters</h3>
        <div className='mt-2 text-md'>
          <p className='py-2'>
            Why do people not subscribe? In some cases, there’s no internet service where they live.
            Separate from the TDOP, there is another program building new high-speed networks across
            the state.{' '}
          </p>
          <div className='mt-2'></div>
          {geoJSONData && <Legend colorStops={getColorStops(geoJSONData)} />}
          <p className='mt-2 font-bold text-xs'>
            Percent of Locations Served by High-speed Internet
          </p>
          <p className='text-xs my-2'>
            Source: Federal Communications Comission (FCC) National Broadband Map
          </p>
        </div>
      </div>
    ),
  },
  {
    id: 3,
    mapData: {
      args: [
        {
          geoId: '48',
          id: ChartId.TXCost100,
          regionSetup: {
            peers: 'none',
            segments: SegmentId.regions,
          },
        },
      ],
      dataPointName: DataPointGeneratorName.costOver100,
    },
    getContent: (geoJSONData?: GeoJSON.FeatureCollection<GeoJSON.Geometry>) => (
      <div className='mt-2'>
        <h3 className='text-xl font-bold uppercase my-5'>Money Matters</h3>
        <div className='mt-2 text-md'>
          <p className='py-2'>
            Many households pay over $100/month for high-speed internet service, a price may be out
            of reach for households without home internet.
          </p>
          <div className='mt-2'></div>
          {geoJSONData && <Legend colorStops={getColorStops(geoJSONData)} />}
          <p className='mt-2 font-bold text-xs'>
            Percent of Individuals Paying Over $100/month for Internet
          </p>
          <p className='text-xs my-2'>Source: 2023 Texas Digital Opportunity Survey</p>
        </div>
      </div>
    ),
  },
  {
    id: 4,
    getContent: () => (
      <div className='w-screen'>
        <SplitPaneMapContainer />
      </div>
    ),
  },
  {
    id: 5,
    mapData: {
      args: [
        {
          geoId: '48',
          id: ChartId.TXBSL,
          regionSetup: {
            peers: 'none',
            segments: SegmentId.regions,
          },
        },
      ],
      dataPointName: DataPointGeneratorName.bslUnderserved,
    },
    getContent: (geoJSONData?: GeoJSON.FeatureCollection<GeoJSON.Geometry>) => (
      <div className='mt-2'>
        <h3 className='text-xl font-bold uppercase my-5'>Speed and Reliability Matter</h3>
        <div className='mt-2 text-md'>
          <p className='py-2'>
            People who do not have reliable high-speed internet may struggle to access online
            resources, educational opportunities, and digital services like telehealth appointments.
          </p>
          <div className='mt-4'></div>
          {geoJSONData && <Legend colorStops={getColorStops(geoJSONData)} />}
          <p className='mt-2 font-bold text-xs'>
            Percent of Households Underserved by High-Speed Internet
          </p>
          <p className='text-xs my-2'>
            Source: Federal Communications Comission (FCC) National Broadband Map
          </p>
        </div>
      </div>
    ),
  },
  {
    id: 6,
    mapData: {
      args: [
        {
          geoId: '48',
          id: ChartId.TXDevices,
          regionSetup: {
            peers: 'none',
            segments: 'county',
          },
        },
      ],
      dataPointName: DataPointGeneratorName.smartphoneOnly,
    },
    getContent: (geoJSONData?: GeoJSON.FeatureCollection<GeoJSON.Geometry>) => (
      <div className='mt-2'>
        <h3 className='text-xl font-bold uppercase my-5'>Devices Matter</h3>
        <div className='mt-2 text-md'>
          <p className='py-2'>
            People who do not have computers or internet-enabled devices at home are left out of
            digital opportunity.
          </p>
          <div className='mt-4'></div>
          {geoJSONData && <Legend colorStops={getColorStops(geoJSONData)} />}
          <p className='mt-2 font-bold text-xs'>
            Percent of Households With Internet Subscriptions and Only Smartphones
          </p>
          <p className='text-xs my-2'>Source: ACS 5-Year Estimates, 2017-2021</p>
        </div>
      </div>
    ),
  },
  // {
  //   id: 7,
  //   mapData: {
  //     args: [
  //       {
  //         geoId: '48',
  //         id: ChartId.TXAdoption,
  //         regionSetup: {
  //           peers: 'none',
  //           segments: 'county',
  //         },
  //       },
  //     ],
  //     dataPointName: DataPointGeneratorName.hispeedShare,
  //     getFitBoundaryFeature: (geoJSONData?: GeoJSON.FeatureCollection<GeoJSON.Geometry>) => {
  //       return _.find(geoJSONData?.features, (feature) => feature?.properties?.GEOID === '48001');
  //     },
  //   },
  //   getContent: (geoJSONData?: GeoJSON.FeatureCollection<GeoJSON.Geometry>) => (
  //     <div className='mt-2'>
  //       <h3 className='text-xl font-bold uppercase my-5'>Devices Matter</h3>
  //       <div className='mt-2 text-md'>
  //         <p className='py-2'>
  //           People who do not have computers or internet-enabled devices at home are left out of
  //           digital opportunity.
  //         </p>
  //         <div className='mt-4'></div>
  //         {geoJSONData && <Legend colorStops={getColorStops(geoJSONData)} />}
  //         <p className='mt-2 font-bold text-xs'>Percent of Households With Only Smartphones</p>
  //         <p className='text-xs my-2'>Source: ACS 5-Year Estimates, 2017-2021</p>
  //       </div>
  //     </div>
  //   ),
  // },
  {
    id: 7,
    mapData: {
      args: [
        {
          geoId: '48',
          id: ChartId.TXCybersecurityConfidence,
          regionSetup: {
            peers: 'none',
            segments: SegmentId.regions,
          },
        },
      ],
      dataPointName: DataPointGeneratorName.cybersecurityConfidence,
    },
    getContent: (geoJSONData?: GeoJSON.FeatureCollection<GeoJSON.Geometry>) => (
      <div className='mt-2'>
        <h3 className='text-xl font-bold uppercase my-5'>Cybersecurity Matters</h3>
        <div className='mt-2 text-md'>
          <p className='py-2'>
            The Internet can be an intimidating and even a risky place unless people have the
            resources and skills to navigate it safely. For true digital opportunity, users need to
            have skills and tools to use the internet safely and easily.
          </p>
          <div className='mt-4'></div>
          {geoJSONData && <Legend colorStops={getColorStops(geoJSONData)} />}
          <p className='mt-2 font-bold text-xs'>
            Percent of Individuals Confident in Protecting Themselves from Online Threats
          </p>
          <p className='text-xs my-2'>Source: 2023 Texas Digital Opportunity Survey</p>
        </div>
      </div>
    ),
  },
  {
    id: 8,
    containerClassNames: 'text-white text-lg bg-[#111]',
    getContent: () => (
      <p className='lg:w-[60vw] md:p-60 w-90vw p-5 text-white text-lg bg-[#111]'>
        <strong>What does all this mean?</strong>
        <br />
        High-speed internet service is a necessity in the 21st century. The internet must be
        accessible, affordable, navigable and safe so all Texans can use it to find opportunity and
        meet their everyday needs.
      </p>
    ),
  },
  {
    id: 9,
    containerClassNames: 'text-white text-lg bg-[#111]',
    getContent: () => (
      <p className='lg:w-[60vw] md:p-60 w-90vw p-5'>
        <strong>Texas has a plan.</strong>
        <br />
         To learn more about the issues, the data, and the current Texas Digital Opportunity Plan,
        click below:
        <div className='py-8 justify-between'>
          <ButtonDark
            className='mr-auto'
            text='Texas Digital Opportunity Plan'
            link='/interactivetdop'
          ></ButtonDark>
          <ButtonLight text='Data Dashboards' link='/data-dashboards'></ButtonLight>
        </div>
      </p>
    ),
  },
];

export default contents;
