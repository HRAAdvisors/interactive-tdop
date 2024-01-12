import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '@/App.tsx';
import './index.css';
import { Provider } from 'react-redux';
import { store } from './app/store';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = import.meta.env.VITE_API_ENDPOINT;

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
