import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { axiosWithAuth } from "../utils/axiosWithAuth";

import Project from "./Project";

const YourProjects = () => {
  const [projects, setProjects] = useState([]);
  const id = localStorage.getItem("User Id");
  useEffect(() => {
    axiosWithAuth()
      .get(`/projects/creator/${id}`)
      .then((res) => {
        console.log(res);
        setProjects(res.data.projects);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <h2>Your Projects</h2>
      {projects.length === 0 ? (
        <>no projects found</>
      ) : (
        <>
          {projects.map((project) => (
            <div key={project.id}>
              <Link to={`/project/${project.id}`}>
                <Project projects={project} />
              </Link>
            </div>
          ))}
        </>
      )}
    </>
  );
};

export default YourProjects;
