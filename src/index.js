import React from 'react';
import ReactDOM from 'react-dom';

import firebaseInit from "./firebase.config";

import App from './App';

// Bootstrap
import "./scss/index.scss";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";


firebaseInit();

ReactDOM.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>,
  document.getElementById('root')
);