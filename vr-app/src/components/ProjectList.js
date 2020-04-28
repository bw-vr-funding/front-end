import React, { useContext } from "react";
import { ProjectContext } from "../contexts/ProjectContext";
import Project from "./Project";

const Projects = () => {
  const { projects } = useContext(ProjectContext);
  return (
    <div className="projects-container">
        {projects.map(project => (
          <Project 
          key={project.id} 
          projects={project} 
          />
        ))}
    </div>
  );
}


export default Projects;