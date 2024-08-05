import { MantineProvider, Button } from '@mantine/core';
import './App.css';
import AppRoutes from './app/route';

function App() {
  return (
    <div className='App w-full min-h-screen'>
      <MantineProvider withGlobalStyles withNormalizeCSS>
        <AppRoutes />
      </MantineProvider>
    </div>
  );
}

export default App;
