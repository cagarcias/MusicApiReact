import React from 'react';
import ReactDOM from 'react-dom/client';

import { StrictMode } from 'react'


import './index.css'
//import './styles/responsiveContainer.css'
import App from './App.jsx'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* Wrap your App component in the responsive container */}
    
      <App />
   
  </React.StrictMode>
);
