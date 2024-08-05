import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GeoIntro from '@/pages/GeoIntro';
import HomePage from '@/pages/Home';
import DataDashboards from '@/pages/DataDashboards';
import AboutPage from '@/pages/About';
import AssetInventory from '@/pages/AssetInventory';

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
