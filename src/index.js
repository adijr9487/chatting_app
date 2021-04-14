import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Link, BrowserRouter, Route} from "react-router-dom"


ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
  ,
  document.getElementById('root')
);
