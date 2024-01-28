// App.js
import { Element as ScrollElement } from 'react-scroll';
import '@mantine/core/styles.css';
import NeedsCards from '../../static/NeedsCards.ts';
import ScrollableTitle from '../../components/ScrollableTitle.tsx';
import NeedsOne from './NeedsOne.tsx';
import NeedsTwo from './NeedsTwo.tsx';
// import GoalsSection from '../components/GoalsSection';

const NeedsAndAssetsPage = () => {
  const Header = () => (
    <ScrollableTitle
      img={NeedsCards.Header.img}
      altText={NeedsCards.Header.altText}
      title={NeedsCards.Header.title}
    />
  );

  // const Goals1 = () => (
  //   <GoalsSection
  //     img={NeedsCards.Goal1.img}
  //     // altText={NeedsCards.Goal1.altText}
  //     title={NeedsCards.Goal1.title}
  //     description={NeedsCards.Goal1.description}
  //   />
  // );

  const sections = [<Header />, <NeedsOne />, <NeedsTwo />];
  // const [activeSection, setActiveSection] = useState(0);

  // const handleSectionClick = (index) => {
  //   setActiveSection(index);
  //   scroll.scrollTo(`section${index + 1}`, { smooth: true, duration: 500 });
  // };

  return (
    <>
      <div className='app flex'>
        <div className='content flex-1'>
          {sections.map((section, index) => (
            <ScrollElement key={index} name={`section${index + 1}`}>
              {section}
            </ScrollElement>
          ))}
        </div>
      </div>
    </>
  );
};

export default NeedsAndAssetsPage;
