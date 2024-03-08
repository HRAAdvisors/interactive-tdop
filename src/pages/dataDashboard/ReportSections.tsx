import _ from 'lodash';
import { Chart as StandardChartComponent } from '@hraadvisors/standard-charts';
import { Chart as BroadbandChartComponent } from '@hraadvisors/broadband-charts';
import { ReportSection, ReportOutput } from '@hraadvisors/report-api-types';
import type { StandardChart } from '@/types/StandardChart';
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

  const handleDownload = (chartData: any, fileName: string, fileType: string) => {
    const csvData = convertToCSV(chartData);
    const blob = new Blob([csvData], { type: fileType });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    URL.revokeObjectURL(url);
    document.body.removeChild(a);
  };

  const convertToCSV = (chartData: any) => {
    const header = Object.keys(chartData[0]).join(',');
    const rows = chartData.map((row: any) => Object.values(row).join(','));
    return `${header}\n${rows.join('\n')}`;
  };

  return (
    <ScrollElement name={`section${section.id}`}>
      <h3 className='text-black font-inter text-[1.5rem] font-normal tracking-normal leading-42 pt-12 pb-6 uppercase'>
        {section.title}
      </h3>
      <article
        className='max-w-none py-2 text-[0.9rem] leading-6'
        dangerouslySetInnerHTML={{ __html: section.summary.text }}
      />
      <div className='flex flex-wrap flex-col w-full justify-center py-2'>
        {_.map(_.chunk(filteredCharts, 2), (chartChunk, i) => (
          <div key={i} className='py-4 flex flex-wrap gap-8 w-full'>
            {_.map(chartChunk, (chart, key) => (
              <div key={key} className='bg-white shadow-lg p-6 lg:z-40 w-full text-black'>
                {/standard-charts/.test(chart.library) && (
                  <StandardChartComponent
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
                )}
                {/broadband-charts/.test(chart.library) && (
                  <>
                    <BroadbandChartComponent
                      key={chart.id}
                      chart={chart}
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
                  </>
                )}
                <div className='mt-2 hidden md:block'>
                  <button
                    className='bg-[#7085AD] hover:bg-[#002768] transition-colors duration-300 text-[0.9em] text-white font-bold py-2 px-3 rounded'
                    onClick={() => handleDownload(chart.data, `chart${chart.id}.csv`, 'text/csv')}
                  >
                    Download the Data
                  </button>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </ScrollElement>
  );
};

export default ReportSections;
