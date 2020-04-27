import React, {useState}  from 'react';
import { Route, Link } from "react-router-dom";
//Style Imports
import './App.css';
//Special Imports
import * as yup from "yup";
import axios from 'axios'
//Page Imports
import Login from './components/login'
import SignUp from './components/signup'

function App() {
  return (
    <div className="App">
      <Link to="/signup"><button>Sign Up</button></Link>
      <Link to="/login"><button>Login</button></Link>
      
      <Route path="/signup" component={SignUp}/>
      <Route path="/login" component={Login}/>



      
      <Login />
    </div>
  );
}

export default App;
