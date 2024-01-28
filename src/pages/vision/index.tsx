// App.js
import { Element as ScrollElement } from 'react-scroll';
import '@mantine/core/styles.css';
import VisionOne from './VisionOne';
import VisionTwo from './VisionTwo';
import ScrollableTitle from '@/components/ScrollableTitle';
import VisionCards from '@/static/VisionCards';

const VisionPage = () => {
  const header = (
    <ScrollableTitle
      img={VisionCards.Header.img}
      altText={VisionCards.Header.altText}
      title={VisionCards.Header.title}
    />
  );
  const sections = [header, <VisionOne />, <VisionTwo />];

  return (
    <>
      {/* <Navbar /> */}
      <div className='app flex'>
        <div className='content flex-1'>
          {sections.map((section, index) => (
            <ScrollElement key={index} name={`vision-section${index + 1}`}>
              {section}
            </ScrollElement>
          ))}
        </div>
      </div>
    </>
  );
};

export default VisionPage;
