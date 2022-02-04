import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'


function App() {
  return (

    <>
      <Router>
        <Switch>

          <Route exact={true} path='/home_instructor' component={Home_instructor} />
          <Route exact={true} path='/gestion_usuario' component={Gestion_usuario} />
          <Route exact={true} path='/ver_usuario' component={Ver_usuario} />
          <Route exact={true} path='/gestion_cursos' component={Gestion_cursos} />
          <Route exact={true} path='/crear_cursos' component={Crear_cursos} />
          <Route exact={true} path='/ver_cursos' component={Ver_cursos} />

        </Switch>
      </Router>

    </>


  );
}

export default App;
