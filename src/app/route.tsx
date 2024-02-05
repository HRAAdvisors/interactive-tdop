import { lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const GeoIntro = lazy(() => import('@/pages/GeoIntro'));
const HomePage = lazy(() => import('@/pages/Home'));
const DataDashboards = lazy(() => import('@/pages/DataDashboards'));
const AboutPage = lazy(() => import('@/pages/About'));

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
