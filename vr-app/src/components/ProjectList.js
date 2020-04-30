//dependencies
import React, { useContext } from "react";
import { ProjectContext } from "../contexts/ProjectContext";
import { useRouteMatch, useHistory } from "react-router-dom";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { Route, Link } from "react-router-dom";
//components
import Project from "./Project";
import UpdateForm from "./UpdateForm";
import PrivateRoute from "./PrivateRoute";

const Projects = () => {
  const { projects } = useContext(ProjectContext);
  const match = useRouteMatch();
  console.log(match);
  const history = useHistory();
  const editProject = () => {
    history.push(`/update-project/9`);
  };
  console.log("here")
  return (
    <div className="projects-container">
      {projects.map((project) => (
        <>
          <Link key={project.id} to={`/project/${project.id}`}>
            <Project projects={project} />
          </Link>
          <button
            onClick={(e) => {
              deleteProject(project);
            }}
          >
            Delete
          </button>
          <button onClick={editProject}>Edit Form</button>
          {/* <Route path="/update-form" component={UpdateForm}/>  */}
        </>
      ))}
    </div>
  );
};
const deleteProject = (project) => {
  axiosWithAuth()
    .delete(`/projects/${project.id}`)
    .then((res) => {
      window.location.reload();
    })
    .catch((err) => console.log(err, "Could not delete Project"));
};
export default Projects;
