import React from 'react';
import ReactDOM from 'react-dom/client';
import SaintSeiyaApp from './SaintSeiyaApp';
import { BrowserRouter } from 'react-router-dom';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <SaintSeiyaApp/>
    </BrowserRouter>
  </React.StrictMode>
);
