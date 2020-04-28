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
      <Link to="/signup"><button className="navbut" >Sign Up</button></Link>
      <Link to="/login"><button className="navbut">Login</button></Link>
      </nav>
      
      <Route path="/signup" component={SignUp}/>
      <Route path="/login" component={Login}/>
      <Route path="/home" component={Home}/>

    </div>
  );
}

export default App;
