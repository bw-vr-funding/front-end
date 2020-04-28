import React, {useState}  from 'react';
import { Route, Link } from "react-router-dom";
//Style Imports
import './App.css';
//Special Imports
import axios from 'axios'
//Page Imports
import Login from './components/Login';
import SignUp from './components/SignUp';
import Dashboard from "./components/Dashboard";
import PrivateRoute from "./components/PrivateRoute";


function App() {
  return (
    <div className="App">
      <h1>VR APP</h1>
      <Link to="/signup"><button>Sign Up</button></Link>
      <Link to="/login"><button>Login</button></Link>

      <Route path="/signup" component={SignUp}/>
      <Route path="/login" component={Login}/>
      <PrivateRoute path="/dashboard" component={Dashboard} />
      {/* <PrivateRoute path="/update-project/:id" component={UpdateForm} /> */}
    </div>
  );
}
export default App;
