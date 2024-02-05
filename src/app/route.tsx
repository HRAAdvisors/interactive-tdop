import AboutPage from '@/pages/About';
import DataDashboards from '@/pages/DataDashboards';
import GeoIntro from '@/pages/GeoIntro';
import HomePage from '@/pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const TheRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<GeoIntro />} />
        <Route path='/interactivetdop' element={<HomePage />} />
        <Route path='/dataDashboards' element={<DataDashboards />} />
        <Route path='/about' element={<AboutPage />} />
      </Routes>
    </Router>
  );
};

export default TheRoutes;
