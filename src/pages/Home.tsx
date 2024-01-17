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
  // const [_currentSection, setCurrentSection] = useState(0);
  // const [_latestSection, setLatestSection] = useState(0);
  const [showNav, setShowNav] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  let lastScrollY = window.scrollY; // Initialize lastScrollY outside of the useEffect

  const handlePageChange = (pageName: number, sections: any[]) => {
    setCurrentPage({ name: pageName, sections });
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const isScrollingUp = currentScrollY < lastScrollY;

      setShowNav(isScrollingUp);
      lastScrollY = currentScrollY; // Update lastScrollY for the next scroll event
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY; // Get the number of pixels scrolled vertically

      // Set showNav to true only if scrolled more than 8vh and less than 16vh
      const scrolledMoreThan8vh = scrollY > 8 * window.innerHeight;
      const scrolledLessThan16vh = scrollY < 25 * window.innerHeight;
      setShowSidebar(scrolledMoreThan8vh && scrolledLessThan16vh);
    };

    // Add the event listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <ScrollableTitleProvider>
      {showSidebar && <Sidebar currentPage={currentPage} />}
      <Navbar show={showNav} />
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
