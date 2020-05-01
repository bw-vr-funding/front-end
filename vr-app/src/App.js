import React, { useState, useEffect } from "react";
import { Route, Link, useHistory, Redirect } from "react-router-dom";
import { ProjectContext } from "./contexts/ProjectContext";
import { axiosWithAuth } from "./utils/axiosWithAuth";
//Style Imports
import "./App.css";
//Page Imports
import Login from "./components/login.js";
import SignUp from "./components/signup";
import Dashboard from "./components/Dashboard";
import Home from "./components/Home";
import UpdateForm from "./components/UpdateForm";
import ProjectById from "./components/ProjectById";
import ProjectList from "./components/ProjectList"

import PrivateRoute from "./components/PrivateRoute";

function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get("/projects") //PROJECTS API
      .then((res) => {
        setProjects(res.data.projects);
      })
      .catch((err) => console.log(err));
  }, []);

  const isLogged = !!localStorage.getItem("token");
  const history = useHistory();
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("User Id");
    history.push("/home");

  };

  return (
    <div className="App">
      <ProjectContext.Provider value={{ projects }}>
      <nav>
        <Link to="/home">
          <h1 id="logo">VR-Funding</h1>
        </Link>

        {isLogged ? (
          <div id="navButtons">
            <Link to="/projects">
              <button className="topbut">Projects</button>
            </Link>
            <Link to="/dashboard">
              <button className="topbut">Dashboard</button>
            </Link>
            <Link>
              <button className="topbut" onClick={logout}>
                Logout
              </button>
            </Link>
          </div>
        ) : (
          <div id="navButtons">
            <Link to="/signup">
              <button className="topbut">Sign Up</button>
            </Link>
            <Link to="/login">
              <button className="topbut">Login</button>
            </Link>
          </div>
        )}
      </nav>
      <Redirect exact path="/" to="/home" />
      <Route path="/signup" component={SignUp} />
      <Route path="/login" component={Login} />
      <Route path="/home" component={Home} />
      <PrivateRoute path="/dashboard" component={Dashboard} />
      <PrivateRoute path="/projects" component={ProjectList} />
      <PrivateRoute path="/update-project" component={UpdateForm} />
      <PrivateRoute path="/project/:id" component={ProjectById} />
      </ProjectContext.Provider>
    </div>
  );
}

export default App;
