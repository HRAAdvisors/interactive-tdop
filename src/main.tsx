import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '@/App.tsx';
import './index.css';
import { Provider } from 'react-redux';
import { store } from './app/store';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN;

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
