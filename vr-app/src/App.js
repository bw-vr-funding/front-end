import React, { useState } from "react";
import { Route, Link } from "react-router-dom";
//Style Imports
import "./App.css";
//Page Imports
import Login from './components/Login'
import SignUp from './components/SignUp'
import Home from './components/Home'



function App() {

  return (
    <div className="App">
      <nav>
        <Link to="/home"><h1 id="logo">VR-Funding</h1></Link>
        <div id="navButtons">
      <Link to="/signup" ><button className="topbut" >Sign Up</button></Link>
      <Link to="/login" ><button className="topbut" >Login</button></Link>
      </div>
      </nav>
      <Route path="/signup" component={SignUp}/>
      <Route path="/login" component={Login}/>
      <Route path="/home" component={Home}/>
    </div>
  );
}

export default App;
