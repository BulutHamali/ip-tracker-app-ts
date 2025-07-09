import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { IPProvider } from './context/useIP';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <IPProvider>
      <App />
    </IPProvider>
  </React.StrictMode>
);
