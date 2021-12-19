import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Bootstrap
import "./scss/index.scss";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);