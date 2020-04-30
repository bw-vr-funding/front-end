//dependencies
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { axiosWithAuth } from "../utils/axiosWithAuth";
//components
import {
  Card,
  CardHeader,
  CardText,
  CardBody,
  CardSubtitle,
  Badge,
  Col,
  CardImg,
} from "reactstrap";
//styling
import styled from "styled-components";

const ProjectById = (props) => {
  const { id } = useParams();
  const [project, setProject] = useState({});

  useEffect(() => {
    axiosWithAuth()
      .get(`/projects/${id}`)
      .then((res) => {
        setProject(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const deleteProject = () => {
    axiosWithAuth()
      .delete(`/projects/${id}`)
      .then((res) => {
          console.log(res)
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <p>Name: {project.name}</p>
      <p>Description: {project.description}</p>
      <img src={project.img_url} />
      <p>Category: {project.category}</p>
      <p>Funding Goal: {project.funding_goal}</p>
      <p>Funding: {project.funding}</p>
      <button onClick={deleteProject}>delete</button>
      <button onClick={() => {}}>edit</button>
    </div>
  );
};

export default ProjectById;
