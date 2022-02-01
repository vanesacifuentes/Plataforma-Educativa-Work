import React from 'react';
import ReactDOM from 'react-dom';
import Navbar_inicio from './pages/Navbar_inicio';
import 'fontsource-roboto'
import MenuBar_Instructor from './components/Perfil_instructor/Menu_instructor/MenuBar_Instructor';


ReactDOM.render(
  <React.StrictMode>
    
    < MenuBar_Instructor/>
  </React.StrictMode>,
  document.getElementById('root')
);