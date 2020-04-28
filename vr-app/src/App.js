import React from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Dashboard from './components/Dashboard'
import PrivateRoute from './components/PrivateRoute'
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
      <PrivateRoute path="/dashboard" component={ Dashboard } />
      </Switch>
    </div>
  );
}

export default App;
