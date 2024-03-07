import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import loadable from '@loadable/component';

const GeoIntro = loadable(() => import('@/pages/GeoIntro'));
const HomePage = loadable(() => import('@/pages/Home'));
const DataDashboards = loadable(() => import('@/pages/DataDashboards'));
const AboutPage = loadable(() => import('@/pages/About'));
const AssetInventory = loadable(() => import('@/pages/AssetInventory'));

const TheRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<GeoIntro />} />
        <Route path='/interactivetdop' element={<HomePage />} />
        <Route path='/data-dashboards/:pageId?' element={<DataDashboards />} />
        <Route path='/assetinventory' element={<AssetInventory />} />
        <Route path='/about' element={<AboutPage />} />
      </Routes>
    </Router>
  );
};

export default TheRoutes;
