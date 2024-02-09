// App.js
import { useEffect, useState } from 'react';
import { Element } from 'react-scroll';
import HeroLayout from '@/components/HeroLayout';
import Sidebar from '@/components/Sidebar';
import Navbar from '@/components/Navbar';
import { ScrollableTitleProvider } from '@/components/ScrollableTitleContext';
import loadable from '@loadable/component';
import SideNav from '@/components/SIdeNav';

const IntroPage = loadable(() => import('./intro'));
const VisionPage = loadable(() => import('./vision'));
const NeedsAndAssetsPage = loadable(() => import('./need'));
const StrategiesPage = loadable(() => import('./strategies'));
const ConclusionPage = loadable(() => import('./conclusion'));
const StakeholderEngagementPage = loadable(() => import('./stakeholder'));

const Home = () => {
  const [currentPage, setCurrentPage] = useState({});
  const [showSidebar, setShowSidebar] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handlePageChange = (pageName: number, sections: any[]) => {
    setCurrentPage({ name: pageName, sections });
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY; // Get the number of pixels scrolled vertically

      // Set showNav to true only if scrolled more than 8vh and less than 16vh
      const scrolledMoreThan8vh = scrollY > 5 * window.innerHeight;
      setShowSidebar(scrolledMoreThan8vh);
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
      <SideNav />
      <Navbar />
      <Element name='hero'>
        <HeroLayout
          landingText={
            <>
              <p>
                <strong>
                  Welcome! This site provides an interactive platform to explore Texas' Digital
                  Opportunity Plan.
                </strong>{' '}
                <br></br>
                <br></br>
                Scroll to read Texas' plan, navigate to an overview of the digital divide, explore
                the Resource Finder, or dive deeper into data for your community.
              </p>
            </>
          }
          imageHero='img/HeroTwo.jpg'
        />
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
