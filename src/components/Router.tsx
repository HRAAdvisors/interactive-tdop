import HeroLayout from './HeroLayout';
import IntroPage from '../pages/IntroPage';
import VisionPage from '../pages/VisionPage';
import NeedsAndAssetsPage from '../pages/NeedsAndAssetsPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';
import StakeholderEngagementPage from '../pages/StakeholderEngagementPage';
import StrategiesPage from '@/pages/StrategiesPage';


export default function Router () {
    return (
        <BrowserRouter>
        <ScrollToTop>
            <Routes>
                <Route path="/" element={<HeroLayout />} />
                <Route path="intro" element={<IntroPage />} />
                <Route path="vision" element={<VisionPage />} />
                <Route path="needsandassets" element={<NeedsAndAssetsPage />} />
                <Route path="stakeholderengagement" element={<StakeholderEngagementPage />} />
                <Route path="strategies" element={<StrategiesPage />} />
                <Route path="conclusion" element={<ConclusionPage />} />
            </Routes>
        </ScrollToTop>
      </BrowserRouter>
    );
}