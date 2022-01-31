import React from 'react';
import ReactDOM from 'react-dom';
import App from '../src/Routes/App';
import Layout from './pages/Layout';
import Navbar from './pages/Navbar';
import 'fontsource-roboto'


ReactDOM.render(
  <React.StrictMode>
    
    < Layout/>
  </React.StrictMode>,
  document.getElementById('root')
);