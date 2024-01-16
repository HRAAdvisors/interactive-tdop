import KPIContainer from './KPIContainer';
import NeedsCards from '../static/NeedsCards';

const GoalsSection = ({
  img,
  description,
  title,
}: {
  img: string;
  description: string;
  title: string;
}) => {
  return (
    <div
      className='relative w-screen md:h-[110vh] h-full py-10 md:py-0'
      style={{ background: `url(${img})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}
    >
      <div className='px-[20%] z-10 w-full'>
        <h1 className='text-white md:text-6xl text-4xl pt-[20vh] pb-10 font-light uppercase tracking-widest'>
          {title}
        </h1>
        <p className='text-white font-sans'>{description}</p>
        <div className='mt-[10vh] block md:flex md:justify-between'>
          <KPIContainer
            id="kpi1"
            goal={NeedsCards.KPI1_1.goal}
            kpi={NeedsCards.KPI1_1.kpi}
            description={NeedsCards.KPI1_1.text}
          />
          {/* <ScrollElement name="kpi1.1">
            <KPIContainer id="kpi1.1" goal={NeedsCards.KPI1_1.goal} kpi={NeedsCards.KPI1_1.kpi} description={NeedsCards.KPI1_1.text} className='flex-1'/>
          </ScrollElement> */}
          <KPIContainer
            id="kpi2"
            goal={NeedsCards.KPI1_2.goal}
            kpi={NeedsCards.KPI1_2.kpi}
            description={NeedsCards.KPI1_2.text}
          />
          <KPIContainer
            id="kpi3"
            goal={NeedsCards.KPI1_1.goal}
            kpi={NeedsCards.KPI1_1.kpi}
            description={NeedsCards.KPI1_1.text}
          />
        </div>
      </div>
    </div>
  );
};

export default GoalsSection;
