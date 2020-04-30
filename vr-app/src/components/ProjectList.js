import React, { useContext } from "react";
import { ProjectContext } from "../contexts/ProjectContext";
import Project from "./Project";
import UpdateForm from './UpdateForm'
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { Route, Link } from "react-router-dom";
import PrivateRoute from './PrivateRoute';
import { useRouteMatch, useHistory } from 'react-router-dom'
import styled from "styled-components";


const Buttons = styled.div`

button {
  width: 300px;
  padding: 8px 11px;
  font-size: 1.4rem;
  text-transform: uppercase;
  border: 0;
  border-radius: 5px;
  letter-spacing: 2px;
  outline: none;
  background-color: #4dd0e1;
  color: aliceblue;
  cursor: pointer;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  margin: 0 auto;
}

button:hover {
  box-shadow: 0 5px 12px rgba(0, 0, 0, 0.3);
}

`;

const Projects = () => {
  const { projects } = useContext(ProjectContext);
  const match = useRouteMatch();
  const history = useHistory();
  const editProject = () => {
    history.push(`/update-project/9`)
}
  return (
    <div className="projects-container">
        {projects.map(project => (
            <>
            <Link key={project.id} to={`/project/${project.id}`}>
            <Project projects={project} />
            </Link>
          <Buttons><button onClick={e => {deleteProject(project)}}>Delete</button></Buttons>
          <br />
          <Buttons><button onClick={editProject}>Edit Form</button></Buttons>
          {/* <Route path="/update-form" component={UpdateForm}/>  */}
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
