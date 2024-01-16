// App.js
import { useEffect, useState } from 'react';
import '@mantine/core/styles.css';
import { Element } from 'react-scroll';
import NeedsAndAssetsPage from './NeedsAndAssetsPage';
import VisionPage from './VisionPage';
import IntroPage from './IntroPage';
import HeroLayout from '@/components/HeroLayout';
import StakeholderEngagementPage from './StakeholderEngagementPage';
import StrategiesPage from './StrategiesPage';
import ConclusionPage from './ConclusionPage';
import Sidebar from '@/components/Sidebar';
import Navbar from '@/components/Navbar';
import { ScrollableTitleProvider } from '@/components/ScrollableTitleContext';

// const FadeInSection = ({ children }: { children: ReactNode }) => {
//   const [ref, inView] = useInView({
//     triggerOnce: true,
//     threshold: 0.01, // Adjust as needed
//   });

//   const props = {
//     style: {
//       opacity: inView ? 1 : 0,
//       transition: 'opacity 0.5s',
//     },
//   };

//   return (
//     <div ref={ref} {...props}>
//       {children}
//     </div>
//   );
// };

const Home = () => {
  const [currentPage, setCurrentPage] = useState({});
  const [_currentSection, setCurrentSection] = useState(0);
  const [showNav, setShowNav] = useState(false);

  const handlePageChange = (pageName: number, sections: any[]) => {
    setCurrentPage({ name: pageName, sections });
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2; // Adjust as needed
      const newSection = Math.floor(scrollPosition / window.innerHeight);
      setCurrentSection(newSection);
      setShowNav(newSection >= 1);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // const scrollToSection = (sectionName: string) => {
  //   scroller.scrollTo(sectionName, {
  //     duration: 800,
  //     delay: 0,
  //     smooth: 'easeInOutQuart',
  //     offset: -50, // Adjust as needed
  //   });
  // };
  return (
    <ScrollableTitleProvider>
      {showNav && <Sidebar currentPage={currentPage} />}
      {showNav && <Navbar />}
      <Element name='hero'>
        <HeroLayout />
      </Element>
      <Element name='intro'>
        <IntroPage handlePageChange={handlePageChange} />
      </Element>
      <Element name='vision'>
        <VisionPage />
      </Element>
      <Element name='needsandassets'>
        <NeedsAndAssetsPage />
      </Element>
      <Element name='stakeholderengagement'>
        <StakeholderEngagementPage />
      </Element>
      <Element name='strategies'>
        <StrategiesPage handlePageChange={handlePageChange} />
      </Element>
      <Element name='conclusion'>
        <ConclusionPage handlePageChange={handlePageChange} />
      </Element>
    </ScrollableTitleProvider>
  );
};

export default Home;
