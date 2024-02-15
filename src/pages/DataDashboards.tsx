import ReportChapters from './dataDashboard/ReportChapters';
import SideNav from '@/components/SIdeNav';
import Navbar from '@/components/Navbar';
import {
  useGetBoundariesQuery,
  useGetReportQuery,
  useGetSkeletonQuery,
} from '@/services/dataDashboard';
import { useParams, useSearchParams } from 'react-router-dom';
import _ from 'lodash';
import { Select } from '@mantine/core';

const DataDashboards = () => {
  const { pageId = 'home' } = useParams();
  let [searchParams, setSearchParams] = useSearchParams();

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
  const { data: boundaryData } = useGetBoundariesQuery();

  const boundaries = _.first(_.toArray(boundaryData?.boundaries));

  const geoIdSelectOptions = _(boundaries)
    .groupBy((b) => {
      const props = b.feature.properties as any;
      if (props.GEOID === props.STATEFP) {
        return 'State';
      } else if (props.GEOID === `${props.STATEFP}${props.COUNTYFP}`) {
        return 'County';
      } else if (props.GEOID === `${props.STATEFP}${props.COUNTYFP}${props.TRACTCE}`) {
        return 'Tract';
      }
      return 'Region';
    })
    .map((options, index) => ({
      group: index,
      items: _.map(options, (option) => ({
        value: (option.feature.properties as any).GEOID,
        label: (option.feature.properties as any).NAME,
      })),
    }))
    .value();

  const isLoading = isLoadingReport || isLoadingSkeleton;

  return (
    <div className='flex flex-col'>
      <Navbar shouldShowAllTime={true} />
      <SideNav showOnLarge={true} />
      <main className='lg:pl-80 min-h-screen' id='dashboardMain'>
        <div className='w-full mt-24 float-right px-4 justify-end flex'>
          <Select
            onChange={(geoId) => {
              setSearchParams({ geoId } as any);
            }}
            placeholder='Select State'
            data={geoIdSelectOptions}
          />
        </div>
        <ReportChapters isLoading={isLoading} reportOutput={reportData} />
      </main>
    </div>
  );
};

export default DataDashboards;
