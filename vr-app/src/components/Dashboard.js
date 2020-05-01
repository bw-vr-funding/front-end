import React, { useState, useEffect } from "react";

import { ProjectContext } from "../contexts/ProjectContext";
import Form from "./Form";
import ProjectList from "./ProjectList";
import YourProjects from "./YourProjects";


function Dashboard() {
  

  return (
    <div className="Dashboard">
        <h1>VR Entrepeneur Hub</h1>
        <Form />
        <YourProjects />
    </div>
  );
}

export default Dashboard;
