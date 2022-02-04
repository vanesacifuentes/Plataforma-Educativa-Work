import React from 'react';
import ReactDOM from 'react-dom';
import Navbar_inicio from './pages/Navbar_inicio';
import 'fontsource-roboto'
import Home_instructor from './components/Perfil_instructor/Home_instructor/Home_instructor';


ReactDOM.render(
  <React.StrictMode>
    
    < Home_instructor/>

  </React.StrictMode>,
  document.getElementById('root')
);