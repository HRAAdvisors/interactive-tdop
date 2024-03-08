import ReportChapters from './dataDashboard/ReportChapters';
import SideNav from '@/components/SIdeNav';
import Navbar from '@/components/Navbar';
import { useEffect, useState } from 'react'; // Import useState
import { useGetReportQuery, useGetSkeletonQuery } from '@/services/dataDashboard';
import { useParams, useSearchParams } from 'react-router-dom';
import _ from 'lodash';

const DataDashboards = () => {
  const { pageId = 'the-texas-digital-opportunity-survey' } = useParams();
  let [searchParams] = useSearchParams();

  // State to hold the current reportID
  const [reportId, setReportId] = useState('65e0bdac580dd5243152feff');

  useEffect(() => {
    // Update reportID based on geoId
    const geoId = searchParams.get('geoId');
    if (geoId && geoId !== '48') {
      setReportId('65e79e754feb9e71f4052169');
    } else {
      setReportId('65e0bdac580dd5243152feff');
    }
  }, [searchParams]);

  const { data: skeletonData, isLoading: isLoadingSkeleton } = useGetSkeletonQuery({
    reportId,
    geoId: searchParams.get('geoId') ?? undefined,
  });
  const activeChapters = _.filter(skeletonData?.chapters, { pageId: pageId });

  const { data: reportData, isLoading: isLoadingReport } = useGetReportQuery(
    {
      pick: _.map(activeChapters, (c) => c.id).join(','),
      reportId,
      geoId: searchParams.get('geoId') ?? undefined,
    },
    { skip: !_.size(activeChapters) },
  );

  const isLoading = isLoadingReport || isLoadingSkeleton;

  useEffect(() => {
    // Scroll to the top of the page when pageId changes
    window.scrollTo(0, 0);
  }, [pageId]);

  return (
    <div className='flex flex-col'>
      <Navbar shouldShowAllTime={true} />
      <SideNav showOnLarge={true} />
      <main className='lg:pl-80 xl:pl-96 min-h-screen' id='dashboardMain'>
        <ReportChapters isLoading={isLoading} reportOutput={reportData} />
      </main>
    </div>
  );
};

export default DataDashboards;
