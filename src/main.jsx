import React from 'react';
import ReactDOM from 'react-dom/client';
import ContextProviders from './ContextProviders.jsx';
import App from './App.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <ContextProviders>
    <App />
  </ContextProviders>,
);
