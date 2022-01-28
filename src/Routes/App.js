import React from "react";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home_instructor from "../components/Perfil_instructor/Home/Home_instructor";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact={true} path='/home' component={Home_instructor} />
    
        </Switch>
      </Router>
      
    </>
  );
}

export default App;
