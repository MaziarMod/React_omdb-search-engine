import React from 'react';
import { createRoot } from 'react-dom/client';

import './index.scss';
import App from './components/App';

createRoot(document.querySelector('#root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
