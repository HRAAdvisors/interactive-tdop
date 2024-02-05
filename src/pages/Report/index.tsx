import { useGetReportQuery, useGetSkeletonQuery } from '@/services/dataDashboard';
import _ from 'lodash';
import { Chart as ChartComponent } from '@hraadvisors/standard-charts';
import { useParams } from 'react-router-dom';
import { ReportSection, ReportOutput } from '@hraadvisors/report-api-types';
import { StandardChart } from '@/types/StandardChart';
import { useState } from 'react';
import { Element as ScrollElement } from 'react-scroll';

const ReportSections = ({
  section,
  reportOutput,
}: {
  section: ReportSection<StandardChart>;
  reportOutput: ReportOutput<StandardChart>;
}) => {
  const filterState = useState<Record<string, string>>({});
  const visibilityToggleState = useState<Record<string, string[]>>({});

  const tokens = {
    mapbox: import.meta.env.VITE_MAPBOX_ACCESS_TOKEN as string,
  };

  const filteredCharts = section.charts.filter(
    (chart) => chart.settings.output.includes('all') || chart.settings.output.includes('web'),
  );

  const { boundaries } = reportOutput;

  return (
    <ScrollElement name={`section${section.id}`} className='py-4'>
      <h3 className='text-xl'>{section.title}</h3>
      <div className='text-base/6' dangerouslySetInnerHTML={{ __html: section.summary.text }} />
      <div className=''>
        {_.map(filteredCharts, (chart) => (
          <ChartComponent
            key={chart.id}
            chart={chart}
            target={'web'}
            boundaries={boundaries || {}}
            isDraft={reportOutput.report.isDraft}
            isPreview={false}
            geography={reportOutput.report.geography}
            controls={{
              parentFilter: filterState[0],
              visibleCategories: visibilityToggleState[0],
            }}
            tokens={tokens}
            noWrapper={false}
          />
        ))}
      </div>
    </ScrollElement>
  );
};

const ReportChapters = () => {
  const { pageId = 'home' } = useParams();
  const { data: skeletonData, isLoading: isLoadingSkeleton } = useGetSkeletonQuery();
  const activeChapters = _.filter(skeletonData?.chapters, { pageId: pageId });

  const { data: reportData, isLoading: isLoadingReport } = useGetReportQuery(
    { pick: _.map(activeChapters, (c) => c.id).join(',') },
    { skip: !_.size(activeChapters) },
  );

  const isLoading = isLoadingReport || isLoadingSkeleton;

  if (isLoading) {
    <div>loading</div>;
  }

  return (
    <div className='flex flex-col w-full p-4 overflow-hidden'>
      {_.map(reportData?.report.chapters, (chapter, i) => (
        <div className='py-4' key={i}>
          {_.map(
            chapter.sections,
            (sec) =>
              reportData && <ReportSections key={sec.id} section={sec} reportOutput={reportData} />,
          )}
        </div>
      ))}
    </div>
  );
};

export default ReportChapters;
