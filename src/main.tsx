import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '@/App.tsx';
import './index.css';
import { Provider } from 'react-redux';
import { store } from './app/store';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import AOS from 'aos';

mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN;

import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init({
  mirror: true,
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
