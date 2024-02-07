import _ from 'lodash';
import ReportSections from './ReportSections';
import { ReportOutput } from '@hraadvisors/report-api-types';
import { StandardChart } from '@/types/StandardChart';

const ReportChapters = ({
  reportOutput,
  isLoading,
}: {
  isLoading: boolean;
  reportOutput?: ReportOutput<StandardChart>;
}) => {


  return (
    <div className='flex flex-col w-full h-full px-4'>
      {isLoading && <div className='flex justify-center items-center min-h-screen h-full w-full'><div className='loader'/></div>}
      {!isLoading && _.map(reportOutput?.report.chapters, (chapter, i) => (
        <div className='py-4' key={i}>
          {_.map(
            chapter.sections,
            (sec) =>
              reportOutput && (
                <ReportSections key={sec.id} section={sec} reportOutput={reportOutput} />
              ),
          )}
        </div>
      ))}
    </div>
  );
};

export default ReportChapters;
