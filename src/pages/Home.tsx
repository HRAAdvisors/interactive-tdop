if (typeof global === 'undefined') {
  window.global = window;
}

import { useEffect, useState } from 'react';
import { Element } from 'react-scroll';
import HeroLayout from '@/components/HeroLayout';
import Sidebar from '@/components/Sidebar';
import Navbar from '@/components/Navbar';
import { ScrollableTitleProvider } from '@/components/ScrollableTitleContext';
import SideNav from '@/components/SIdeNav';

import IntroPage from './intro';
import VisionPage from './vision';
import NeedsAndAssetsPage from './need';
import StrategiesPage from './strategies';
import ConclusionPage from './conclusion';
import StakeholderEngagementPage from './stakeholder';

const Home = () => {
  const [currentPage, setCurrentPage] = useState({});
  const [showSidebar, setShowSidebar] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handlePageChange = (pageName: string, sections: number) => {
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
                  Welcome! This site provides an interactive tool to explore Texas' Digital
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
          altText='A child sitting at a desk with a laptop.'
          title='Texas Digital Opportunity Plan'
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
