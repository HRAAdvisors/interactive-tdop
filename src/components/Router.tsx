// import HeroLayout from './HeroLayout';
import IntroPage from '../pages/intro';
import VisionPage from '../pages/vision';
import NeedsAndAssetsPage from '../pages/need';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';
import StakeholderEngagementPage from '../pages/stakeholder';
import StrategiesPage from '@/pages/strategies';
import ConclusionPage from '@/pages/conculation';

export default function Router() {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Routes>
          {/* <Route path='/' element={<HeroLayout />} /> */}
          <Route path='intro' element={<IntroPage />} />
          <Route path='vision' element={<VisionPage />} />
          <Route path='needsandassets' element={<NeedsAndAssetsPage />} />
          <Route path='stakeholderengagement' element={<StakeholderEngagementPage />} />
          <Route path='strategies' element={<StrategiesPage />} />
          <Route path='conclusion' element={<ConclusionPage />} />
        </Routes>
      </ScrollToTop>
    </BrowserRouter>
  );
}
