import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { ProgressProvider } from './context/ProgressContext';
import { DrawerProvider } from './context/DrawerContext';
import './styles/global.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL.replace(/\/$/, '')}>
      <ProgressProvider>
        <DrawerProvider>
          <App />
        </DrawerProvider>
      </ProgressProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
