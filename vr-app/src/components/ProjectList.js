import React, { useContext } from "react";
import { ProjectContext } from "../contexts/ProjectContext";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import Project from "./Project";

const Projects = () => {
  const { projects } = useContext(ProjectContext);
  return (
    <div className="projects-container">
        {projects.map(project => (
         <> <Project 
          key={project.id} 
          projects={project}
          />
          <button onClick={e => {deleteProject(project)}}>Delete</button>
          </>
        ))}
    </div>
  );
};

const deleteProject = project => {
    axiosWithAuth()
    .delete(`/projects/${project.id}`)
    .then(res => {window.location.reload();})
    .catch(err => console.log(err, "Could not delete Project"))
};


export default Projects;