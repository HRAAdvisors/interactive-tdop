import _ from 'lodash';

interface LegendProps {
  colorStops: { step: number; color: string }[];
}

const Legend = ({ colorStops }: LegendProps) => {
  // console.log(colorStops);
  return (
    <div className='w-full'>
      <div className='w-full text-[8px] leading-3 grid grid-cols-5'>
        {_.map(colorStops, (stop, index) => (
          <div
            key={index}
            className={`-ml-1 ${index == _.size(colorStops) - 1 && 'flex justify-arround'} `}
          >
            <span>{Math.round(stop.step)}% </span>
            {index == _.size(colorStops) - 1 && <div className='-mr-2 w-full text-right'>100%</div>}
          </div>
        ))}
      </div>
      <div className='w-full grid border grid-cols-5'>
        {_.map(colorStops, (stop, index) => (
          <div key={index} style={{ backgroundColor: stop.color }} className='h-5' />
        ))}
      </div>
    </div>
  );
};

export default Legend;
