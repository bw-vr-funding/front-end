//dependencies
import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { axiosWithAuth } from "../utils/axiosWithAuth";
//components
import UpdateForm from "./UpdateForm";
//styling
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
import styled from "styled-components";

const ProjectById = (props) => {
  const { id } = useParams();
  const history = useHistory();
  const [project, setProject] = useState({});
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [changes, setChanges] = useState({});

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
        history.push("/dashboard");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const edit = () => {
    setIsEditOpen(!isEditOpen);
    console.log(isEditOpen);
  };

  return (
    <div>
      {isEditOpen === true ? (
        <>
          <UpdateForm id={id} initialData={project} />
        </>
      ) : (
        <>
          <p>Name: {project.name}</p>
          <p>Description: {project.description}</p>
          <img src={project.img_url} />
          <p>Category: {project.category}</p>
          <p>Funding Goal: {project.funding_goal}</p>
          <p>Funding: {project.funding}</p>
          <button onClick={deleteProject}>delete</button>
        </>
      )}
      <button onClick={edit}>{isEditOpen ? "go back" : "edit"}</button>
    </div>
  );
};

export default ProjectById;
