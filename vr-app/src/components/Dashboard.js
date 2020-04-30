import React, { useState, useEffect } from "react";

import { ProjectContext } from "../contexts/ProjectContext";
import Form from "./Form";
import ProjectList from "./ProjectList";
import { axiosWithAuth } from "../utils/axiosWithAuth";


function Dashboard() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get("/projects")  //PROJECTS API
      .then(res => {
        setProjects(res.data.projects);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="Dashboard">
      <ProjectContext.Provider value={{ projects }}>
        <h1>VR Entrepenuers Hub</h1>
        <Form />
        <ProjectList />
      </ProjectContext.Provider>
    </div>
  );
}

export default Dashboard;