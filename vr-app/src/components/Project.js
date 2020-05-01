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

const Project = ({projects}) => {
  

  return (
    <div>
      <p>Name: {projects.name}</p>
      <p>Description: {projects.description}</p>
      <img src={projects.img_url} />
      <p>Category: {projects.category}</p>
      <p>Funding Goal: {projects.funding_goal}</p>
      <p>Funding: {projects.funding}</p>
      
      
    </div>
  );
};

export default Project;
