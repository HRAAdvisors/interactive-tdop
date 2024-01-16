import GeoIntro from '@/pages/GeoIntro';
import HomePage from '@/pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const TheRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/geoIntro' element={<GeoIntro />} />
      </Routes>
    </Router>
  );
};

export default TheRoutes;
