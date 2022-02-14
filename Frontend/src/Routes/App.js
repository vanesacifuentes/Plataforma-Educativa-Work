
import './App.css';
import Login from '../components/Auth/Login';
import Registro from '../components/Auth/Registro';
import Home from '../components/Home/Home';
import React, { useContext, useState } from 'react';
import Que_ofrecemos from '../components/Home/Que_ofrecemos';
import Contactenos from '../components/Home/Contactenos';

import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from 'react-router-dom';



//Uso de hook useState
function App() {




    /////////////////////////////////////////////////////////////////////////////////////////
    return (
        <>

            <Router>

                <Switch>
                    
                    <Route exact path='/' >  <Home /> </Route>
                    <Route exact path='/login' >  <Login /> </Route>
                    <Route exact path='/registro' >  <Registro /> </Route>
                    <Route exact path='/que_ofrecemos' >  <Que_ofrecemos /> </Route>
                    <Route exact path='/contactenos' >  <Contactenos /> </Route>
                    
                </Switch>

            </Router>

        </>
    );
}

export default App;
