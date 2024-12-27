import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'; // Vérifie que le chemin est correct


const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Pour mesurer les performances de l'application

