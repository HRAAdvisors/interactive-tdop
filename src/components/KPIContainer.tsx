import { Link as ScrollLink } from 'react-scroll';

const KPIContainer = ({
  id,
  goal,
  kpi,
  description,
}: {
  id: string;
  goal: string;
  kpi: string;
  description: string;
}) => {
  return (
    <div
      id={id}
      className='px-4 my-10 md:my-0 py-[12vh] font-sans mr-[1vw] bg-[rgba(0,0,0,0.5)] text-white border-2 border-white'
    >
      <div>
        <p className='text-xs text-[#ececec]'>{goal}</p>
        <ScrollLink to='kpi1.1' smooth={true} duration={500}>
          {kpi}
        </ScrollLink>
        {/* <p className="uppercase text-lg">{kpi}</p> */}
        <p className='text-xs'>{description}</p>
      </div>
    </div>
  );
};

export default KPIContainer;
