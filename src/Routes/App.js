import React from "react";
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Navbar from "../pages/Navbar";

function App() {
  return (
    
      <Router>
        
          <Route exact={true} path='/navbar' component={Navbar} />
    
        
      </Router>
      
    
  );
}

export default App;
