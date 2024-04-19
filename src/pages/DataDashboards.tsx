import ReportChapters from './dataDashboard/ReportChapters';
import SideNav from '@/components/SIdeNav';
import Navbar from '@/components/Navbar';
import { useEffect, useState } from 'react';
import { useGetReportQuery, useGetSkeletonQuery } from '@/services/dataDashboard';
import { useParams, useSearchParams } from 'react-router-dom';
import _ from 'lodash';

const DataDashboards = () => {
  const { pageId = 'the-texas-digital-opportunity-survey' } = useParams();
  let [searchParams] = useSearchParams();

  const [reportId, setReportId] = useState('65e0bdac580dd5243152feff');
  const [geoId, setGeoId] = useState('48');

  useEffect(() => {
    const countyGeoId = searchParams.get('geoId') ?? ''; // Type assertion to treat potential null as empty string
    const regionMapping = {
      x_tx_r1: [
        '48013',
        '48019',
        '48029',
        '48057',
        '48091',
        '48123',
        '48163',
        '48171',
        '48175',
        '48177',
        '48187',
        '48239',
        '48255',
        '48259',
        '48265',
        '48285',
        '48325',
        '48469',
        '48493',
      ],
      x_tx_r2: [
        '48021',
        '48031',
        '48053',
        '48055',
        '48149',
        '48209',
        '48287',
        '48299',
        '48453',
        '48491',
      ],
      x_tx_r3: [
        '48027',
        '48035',
        '48041',
        '48051',
        '48099',
        '48145',
        '48161',
        '48185',
        '48193',
        '48217',
        '48281',
        '48289',
        '48293',
        '48309',
        '48313',
        '48331',
        '48333',
        '48395',
        '48411',
        '48477',
      ],
      x_tx_r4: [
        '48015',
        '48039',
        '48071',
        '48089',
        '48157',
        '48167',
        '48201',
        '48291',
        '48321',
        '48339',
        '48471',
        '48473',
        '48481',
      ],
      x_tx_r5: [
        '48011',
        '48017',
        '48045',
        '48065',
        '48069',
        '48075',
        '48079',
        '48087',
        '48107',
        '48111',
        '48117',
        '48125',
        '48129',
        '48153',
        '48169',
        '48179',
        '48189',
        '48191',
        '48195',
        '48205',
        '48211',
        '48219',
        '48233',
        '48269',
        '48279',
        '48295',
        '48303',
        '48305',
        '48341',
        '48345',
        '48357',
        '48359',
        '48369',
        '48375',
        '48381',
        '48393',
        '48421',
        '48437',
        '48445',
        '48483',
        '48501',
      ],
      x_tx_r6: [
        '48085',
        '48097',
        '48113',
        '48121',
        '48139',
        '48143',
        '48147',
        '48181',
        '48221',
        '48231',
        '48251',
        '48257',
        '48349',
        '48363',
        '48367',
        '48397',
        '48425',
        '48439',
        '48497',
      ],
      x_tx_r7: [
        '48009',
        '48023',
        '48049',
        '48059',
        '48077',
        '48083',
        '48093',
        '48101',
        '48133',
        '48151',
        '48155',
        '48197',
        '48207',
        '48237',
        '48253',
        '48263',
        '48275',
        '48335',
        '48337',
        '48353',
        '48399',
        '48415',
        '48417',
        '48429',
        '48433',
        '48441',
        '48447',
        '48485',
        '48487',
        '48503',
      ],
      x_tx_r8: [
        '48007',
        '48025',
        '48047',
        '48061',
        '48127',
        '48131',
        '48137',
        '48215',
        '48247',
        '48249',
        '48261',
        '48271',
        '48273',
        '48283',
        '48297',
        '48311',
        '48323',
        '48355',
        '48385',
        '48391',
        '48409',
        '48427',
        '48463',
        '48465',
        '48479',
        '48489',
        '48505',
        '48507',
      ],
      x_tx_r9: [
        '48005',
        '48199',
        '48225',
        '48241',
        '48245',
        '48347',
        '48351',
        '48361',
        '48373',
        '48403',
        '48405',
        '48407',
        '48419',
        '48455',
        '48457',
      ],
      x_tx_r10: [
        '48001',
        '48037',
        '48063',
        '48067',
        '48073',
        '48119',
        '48159',
        '48183',
        '48203',
        '48213',
        '48223',
        '48277',
        '48315',
        '48343',
        '48365',
        '48379',
        '48387',
        '48401',
        '48423',
        '48449',
        '48459',
        '48467',
        '48499',
      ],
      x_tx_r11: ['48043', '48109', '48141', '48229', '48243', '48377'],
      x_tx_r12: [
        '48003',
        '48033',
        '48081',
        '48095',
        '48103',
        '48105',
        '48115',
        '48135',
        '48165',
        '48173',
        '48227',
        '48235',
        '48267',
        '48301',
        '48307',
        '48317',
        '48319',
        '48327',
        '48329',
        '48371',
        '48383',
        '48389',
        '48413',
        '48431',
        '48435',
        '48443',
        '48451',
        '48461',
        '48475',
        '48495',
      ],
    };

    let region = '';
    for (const [regionKey, countyIds] of Object.entries(regionMapping)) {
      if (countyIds.includes(countyGeoId)) {
        region = regionKey;
        break;
      }
    }

    if (countyGeoId && countyGeoId !== '48' && region) {
      switch (region) {
        case 'x_tx_r1':
          setReportId('65e79e754feb9e71f4052169');
          break;
        case 'x_tx_r2':
          setReportId('65e79e754feb9e71f4052169');
          break;
        case 'x_tx_r3':
          setReportId('65e79e754feb9e71f4052169');
          break;
        case 'x_tx_r4':
          setReportId('65e79e754feb9e71f4052169');
          break;
        case 'x_tx_r5':
          setReportId('65e79e754feb9e71f4052169');
          break;
        case 'x_tx_r6':
          setReportId('65e79e754feb9e71f4052169');
          break;
        case 'x_tx_r7':
          setReportId('65e79e754feb9e71f4052169');
          break;
        case 'x_tx_r8':
          setReportId('65e79e754feb9e71f4052169');
          break;
        case 'x_tx_r9':
          setReportId('65e79e754feb9e71f4052169');
          break;
        case 'x_tx_r10':
          setReportId('65e79e754feb9e71f4052169');
          break;
        case 'x_tx_r11':
          setReportId('65e79e754feb9e71f4052169');
          break;
        case 'x_tx_r12':
          setReportId('65e79e754feb9e71f4052169');
          break;
        // Add cases for other regions similarly
        default:
          setReportId('65e0bdac580dd5243152feff');
      }
      setGeoId(region);
    } else {
      setReportId('65e0bdac580dd5243152feff');
      setGeoId('48');
    }
  }, [searchParams]);

  const { data: skeletonData, isLoading: isLoadingSkeleton } = useGetSkeletonQuery({
    reportId,
    geoId,
  });

  const activeChapters = _.filter(skeletonData?.chapters, { pageId: pageId });

  const { data: reportData, isLoading: isLoadingReport } = useGetReportQuery(
    {
      pick: _.map(activeChapters, (c) => c.id).join(','),
      reportId,
      geoId,
    },
    { skip: !_.size(activeChapters) },
  );

  const isLoading = isLoadingReport || isLoadingSkeleton;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pageId]);

  return (
    <div className='flex flex-col'>
      <Navbar shouldShowAllTime={true} />
      <SideNav showOnLarge={true} />
      <main className='lg:pl-80 xl:pl-96 min-h-screen' id='dashboardMain'>
        <ReportChapters isLoading={isLoading} reportOutput={reportData} />
      </main>
      <div className='grid bg-[#ececec] md:grid-cols-12'>
        <div className='flex flex-col md:col-start-5 px-4 md:px-0 md:col-span-12'>
          <p className='pt-8 pb-4'>
            © 2024 Texas Broadband Development Office and Texas Comptroller of Public Accounts
          </p>
          <p className='pb-8'>
            All Rights Reserved |{' '}
            <a
              href='https://comptroller.texas.gov/about/policies/privacy.php'
              target='_blank'
              rel='noopener'
              className='underline md:hover:text-[#fff] md:hover:bg-[#002768] md:hover:no-underline p-[0.25rem] transition-colors duration-300'
            >
              Privacy Policy
            </a>
            |{' '}
            <a
              href='https://texas-dashboard-data.s3.amazonaws.com/Texas+Digital+Opportunity+Hub_Data.xlsx'
              target='_blank'
              rel='noopener'
              className='underline md:hover:text-[#fff] md:hover:bg-[#002768] md:hover:no-underline p-[0.25rem] transition-colors duration-300'
            >
              Data Download
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default DataDashboards;
