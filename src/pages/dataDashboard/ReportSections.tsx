import _ from 'lodash';
import { Chart as ChartComponent } from '@hraadvisors/standard-charts';
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
    <ScrollElement name={`section${section.id}`} className='pt-28'>
      <h3 className='text-2xl font-semibold pb-6'>{section.title}</h3>
      <article
        className='prose max-w-none py-2'
        dangerouslySetInnerHTML={{ __html: section.summary.text }}
      />
      <div className='flex flex-wrap flex-col w-full justify-center p-2'>
        {_.map(_.chunk(filteredCharts, 2), (chartChunk) => (
          <div className='py-4 flex flex-wrap gap-8 w-full'>
            {_.map(chartChunk, (chart) => (
              <div className='lg:flex-1 z-10 w-full text-black'>
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
              </div>
            ))}
          </div>
        ))}
      </div>
    </ScrollElement>
  );
};

export default ReportSections;
