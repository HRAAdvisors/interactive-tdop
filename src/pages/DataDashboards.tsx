import ReportChapters from './dataDashboard/ReportChapters';
import SideNav from '@/components/SIdeNav';
import Navbar from '@/components/Navbar';
import { useGetReportQuery, useGetSkeletonQuery } from '@/services/dataDashboard';
import { useParams, useSearchParams } from 'react-router-dom';
import _ from 'lodash';

const DataDashboards = () => {
  const { pageId = 'home' } = useParams();
  let [searchParams] = useSearchParams();

  const { data: skeletonData, isLoading: isLoadingSkeleton } = useGetSkeletonQuery({
    reportId: searchParams.get('reportId') ?? undefined,
    geoId: searchParams.get('geoId') ?? undefined,
  });
  const activeChapters = _.filter(skeletonData?.chapters, { pageId: pageId });

  const { data: reportData, isLoading: isLoadingReport } = useGetReportQuery(
    {
      pick: _.map(activeChapters, (c) => c.id).join(','),
      reportId: searchParams.get('reportId') ?? undefined,
      geoId: searchParams.get('geoId') ?? undefined,
    },
    { skip: !_.size(activeChapters) },
  );

  const isLoading = isLoadingReport || isLoadingSkeleton;

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
