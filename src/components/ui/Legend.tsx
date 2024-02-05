import _ from 'lodash';
interface LegendProps {
  colorStops: { step: number; color: string }[];
}

const Legend = ({ colorStops }: LegendProps) => {
  const maxStepValue = _.maxBy(colorStops, 'step')?.step || 0; // Ensure you have the max step value for the label

  return (
    <div className='w-full'>
      {/* Labels row */}
      <div className='w-full text-[8px] leading-3 flex justify-between'>
        {/* We use _.initial to omit the last element because we will add it outside the grid */}
        {_.map(_.initial(colorStops), (stop, index) => (
          <span key={index}>{Math.round(stop.step)}%</span>
        ))}
        {/* Explicitly add the last label for the maximum value */}
        <span>{Math.round(maxStepValue)}%</span>
      </div>

      {/* Color boxes row */}
      <div className='w-full grid border grid-cols-5'>
        {/* We do not map the last colorStop to a rectangle, so use _.initial here as well */}
        {_.map(_.initial(colorStops), (stop, index) => (
          <div key={index} style={{ backgroundColor: stop.color }} className='h-5' />
        ))}
      </div>
    </div>
  );
};

export default Legend;
