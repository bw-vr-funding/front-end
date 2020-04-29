import React, { useContext } from "react";
import { ProjectContext } from "../contexts/ProjectContext";
import Project from "./Project";
import UpdateForm from './UpdateForm'
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { Route, Link } from "react-router-dom";

const Projects = () => {
  const { projects } = useContext(ProjectContext);
  return (
    <div className="projects-container">
        {projects.map(project => (
            <>
          <Project 
          key={project.id} 
          projects={project} 
          />
          <button onClick={e => {deleteProject(project)}}>Delete</button>
          <button><Link to='/update-form'>Edit Form</Link></button> 
          <Route path="/update-form" component={UpdateForm}/> 
        </>
        ))}
    </div>
  );
}
 

const deleteProject = project => {
    axiosWithAuth()
    .delete(`/projects/${project.id}`)
    .then(res => {window.location.reload();})
    .catch(err => console.log(err, "Could not delete Project"))
};


export default Projects;