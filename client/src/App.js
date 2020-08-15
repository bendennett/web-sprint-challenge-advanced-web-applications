import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import "./styles.scss";
import PrivateRoute from './utils/PrivateRoute';
import BubblePage from './components/BubblePage';



function App() {
  return (
    <Router>
      <div className="App">
      <Switch>
        <PrivateRoute exact path = '/bubbles' component={BubblePage}/>
        <Route exact path="/login" component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;


 {/* 
          Build a PrivateRoute component that will 
          display BubblePage when you're authenticated 
        */}