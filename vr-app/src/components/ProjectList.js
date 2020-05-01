//dependencies
import React, { useContext } from "react";
import { ProjectContext } from "../contexts/ProjectContext";
import { Link } from "react-router-dom";
//components
import Project from "./Project";

const ProjectList = () => {
  const userId = Number(localStorage.getItem("User Id"));
  const { projects } = useContext(ProjectContext);

  return (
    <div className="projects-container">
      {projects.map((project) => (
        <div key={project.id}>
          <Link to={`/project/${project.id}`}>
            <Project projects={project} />
          </Link>
          {userId === projects.creator_id ? null : <button>fund</button>}
        </div>
      ))}
    </div>
  );
};

export default ProjectList;
