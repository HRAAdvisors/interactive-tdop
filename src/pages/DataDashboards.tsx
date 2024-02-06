import ReportChapters from './dataDashboard/ReportChapters';
import SideNav from '@/components/SIdeNav';
import Navbar from '@/components/Navbar';
import { useGetReportQuery, useGetSkeletonQuery } from '@/services/dataDashboard';
import { useParams } from 'react-router-dom';
import _ from 'lodash';

const DataDashboards = () => {
  const { pageId = 'home' } = useParams();
  const { data: skeletonData, isFetching: isLoadingSkeleton } = useGetSkeletonQuery();
  const activeChapters = _.filter(skeletonData?.chapters, { pageId: pageId });

  const { data: reportData, isFetching: isLoadingReport } = useGetReportQuery(
    { pick: _.map(activeChapters, (c) => c.id).join(',') },
    { skip: !_.size(activeChapters) },
  );

  const isLoading = isLoadingReport || isLoadingSkeleton;

  return (
    <div className='flex flex-col'>
      <Navbar show={true} />
      <SideNav />
      <main className='sm:pl-72 pt-16 min-h-screen' id='dashboardMain'>
        {reportData && <ReportChapters isLoading={isLoading} reportOutput={reportData} />}
      </main>
    </div>
  );
};

export default DataDashboards;
