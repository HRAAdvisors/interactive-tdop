import { useRef, useState } from 'react';
import _ from 'lodash';
import ChoroplethMap from './ui/ChoroplethMap';
import { Map } from 'mapbox-gl';
import { Scrollama, Step } from 'react-scrollama';
import { ChartId, DataPointGeneratorName, SegmentId } from '@/types/ChartIds';
import { getColorStops } from '@/utils/getColorStop';
import Legend from './ui/Legend';
import SplitPaneMapContainer from './SplitPaneMapContainer';
import { useGetGeoJSON } from '@/utils/customHooks';

const contents = [
  {
    id: 1,
    data: [
      {
        geoId: '48',
        id: ChartId.TXSubscription,
        regionSetup: {
          peers: 'none',
          segments: SegmentId.regions,
        },
      },
    ],
    dataPointName: DataPointGeneratorName.broadbandShare,
    getContent: (geoJSONData?: GeoJSON.FeatureCollection<GeoJSON.Geometry>) => (
      <div className='mt-2'>
        <h3 className='text-xl font-bold uppercase my-5'>Adoption Matters</h3>
        <div className='mt-2 text-md'>
          <p className='py-2'>
            <strong>31% of Texas households</strong> do not subscribe to high-speed internet at
            home.{' '}
          </p>
          <div className='mt-2'></div>
          {geoJSONData && <Legend colorStops={getColorStops(geoJSONData)} />}
          <p className='mt-2 font-bold text-xs'>
            Percent of Households with High-Speed Internet at Home
          </p>
          <p className='text-xs my-2'>Source: ACS 5-Year Estimates, 2017-2021</p>
        </div>
      </div>
    ),
  },
  {
    id: 2,
    data: [
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
    getContent: (geoJSONData?: GeoJSON.FeatureCollection<GeoJSON.Geometry>) => (
      <div className='mt-2'>
        <h3 className='text-xl font-bold uppercase my-5'>Availability Matters</h3>
        <div className='mt-2 text-md'>
          <p className='py-2'>
            Why do people not subscribe? In some cases, there’s no broadband service where they
            live. Separate from the TDOP, there is another program building new high-speed networks
            across the state .{' '}
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
    data: [
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
    getContent: (geoJSONData?: GeoJSON.FeatureCollection<GeoJSON.Geometry>) => (
      <div className='mt-2'>
        <h3 className='text-xl font-bold uppercase my-5'>Money Matters</h3>
        <div className='mt-2 text-md'>
          <p className='py-2'>
            Many people do not have high speed internet at home because it is too expensive. 
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
    data: [
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
    getContent: (geoJSONData?: GeoJSON.FeatureCollection<GeoJSON.Geometry>) => (
      <div className='mt-2'>
        <h3 className='text-xl font-bold uppercase my-5'>Speed and Reliability Matter</h3>
        <div className='mt-2 text-md'>
          <p className='py-2'>
            People who do not have reliable high-speed internet may struggle to access online
            resources, educational opportunities, and digital services like telehealth
            appointments. 
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
    id: 5,
    data: [
      {
        geoId: '48',
        id: ChartId.TXAdoption,
        regionSetup: {
          peers: 'none',
          segments: 'county',
        },
      },
    ],
    dataPointName: DataPointGeneratorName.hispeedShare,
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
          <p className='mt-2 font-bold text-xs'>Percent of Households With Only Smartphones</p>
          <p className='text-xs my-2'>Source: ACS 5-Year Estimates, 2017-2021</p>
        </div>
      </div>
    ),
  },
  {
    id: 6,
    data: [
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
    getContent: (geoJSONData?: GeoJSON.FeatureCollection<GeoJSON.Geometry>) => (
      <div className='mt-2'>
        <h3 className='text-xl font-bold uppercase my-5'>Cybersecurity Matters</h3>
        <div className='mt-2 text-md'>
          <p className='py-2'>
            The Internet can be an intimidating and even a risky place unless people have the
            resources and skills to navigate it safely. For true digital opportunity, users need to
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
];

const GeoScrollytelling = () => {
  const mapRef = useRef<Map>();

  const [input, setInput] = useState<any>(_.first(contents));

  const { geoJsonFeatures } = useGetGeoJSON(input.data, input.dataPointName);

  return (
    <div className='w-full relative' style={{ height: `${(_.size(contents) + 1) * 100}vh` }}>
      {geoJsonFeatures && (
        <div
          className='h-screen w-full sticky inset-0 float-left'
          // style={{
          //   transform: 'translatey(-100vh)',
          //   transformOrigin: '0% 0%',
          // }}
        >
          <ChoroplethMap
            padding={{
              left: Math.round((window.innerWidth ?? 100) * 0.5),
              right: 30,
              top: 20,
              bottom: 20,
            }}
            onLoad={() => {
              mapRef.current?.scrollZoom.disable();
            }}
            colorStops={getColorStops(geoJsonFeatures)}
            geoJSONFeatureCollection={geoJsonFeatures}
            mapRef={mapRef}
          />
        </div>
      )}
      <div className='absolute lg:w-1/2 w-full top-0 bottom-0'>
        <Scrollama
          offset={0.5}
          onStepEnter={({ data }: any) => {
            if (data) setInput(data); // Set the input based on the received data
          }}
        >
          {/* <Step>
            <div className='w-screen h-screen text-white bg-black'>
              <p className='w-[60rem] p-40'>
                The internet has transformed almost every aspect of our lives and society, but{' '}
                <strong>there is a growing divide</strong> between those who can fully access the
                benefits of the digital world and those who cannot. 
              </p>
            </div>
          </Step>
          <Step>
            <div className='w-screen h-screen text-white bg-black'>
              <p className='w-[60rem] p-40'>
                <strong>It is time to bridge this divide.</strong> The internet is not a luxury – it
                is a necessity for education, work, health, safety and staying connected with
                friends and family. High-speed internet, computing devices, and the skills to use
                them should be accessible to everyone.
              </p>
            </div>
          </Step>
          <Step>
            <div className='w-screen h-screen text-white bg-black'>
              <p className='w-[60rem] p-40'>
                <strong>Texas ranks X out of 50 for internet adoption.</strong>
                <br></br> Scroll to explore which areas and communities are subscribed to fast
                internet and have internet-enabled devices, and which do not – and why this all
                matters for you and your community. 
              </p>
            </div>
          </Step> */}
          {_.map(contents, (d, i) => (
            <Step data={d} key={i + 1}>
              <div className='h-screen w-full z-10 bg-transparent flex justify-center items-center'>
                <div className='max-w-sm px-12 py-8 bg-white/95 z-30 rounded-lg shadow-md w-full  min-h-[400px]'>
                  {d.getContent(geoJsonFeatures)}
                </div>
              </div>
            </Step>
          ))}
          <Step>
            <div className='w-screen'>
              <SplitPaneMapContainer />
            </div>
          </Step>
        </Scrollama>
      </div>
    </div>
  );
};

export default GeoScrollytelling;
