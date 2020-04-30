import React from 'react';
import { Card, CardHeader, CardText, CardBody, CardSubtitle, Badge, Col, CardImg } from 'reactstrap';
import styled from "styled-components";

const ImageBorder = styled.div`

img {
width: 200px
border-radius: 50%;
}

`;

const Project = (props) => {

    return (
        <div>
            <p>Name: {props.projects.name}</p>
            <p>Description: {props.projects.description}</p>
            <ImageBorder><img src={props.projects.img_url}/></ImageBorder>
            <p>Category: {props.projects.category}</p>
            <p>Funding Goal: {props.projects.funding_goal}</p>
            <p>Funding: {props.projects.funding}</p>
        </div>
    );
};

export default Project;