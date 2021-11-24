

import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.css'
import { Nav, Navbar, Container,Col, Row} from 'react-bootstrap'
import ProjectCard from "./ProjectCards";
import tomadoggy from "../assets/tomadoggy.png";
import thirsty from "../assets/thirsty.png";

function Projects(){
    return(
        <>
        <Container fluid className="project-section">
      <Container>
        <h1 className="d-flex justify-content-center project-heading">
          My Recent  Work 
        </h1>
        <p className="d-flex justify-content-center" style={{ color: "white", fontSize:"2em" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px", display: "flex" }}>
          <Col className="project-card">
            <ProjectCard
              imgPath={tomadoggy}
              
              title="Toma-Doggy"
              description="Toma-Doggy is a virtual pet inspired by classic pocket pets from the early 2000s, a user is able to creat an account and adopt their very own virtual dog! The user then has the ability to interact with the pet and see if they can make the pet happy."
              link="https://github.com/mshifflette/toma-doggy"
            />
          </Col>

        </Row>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col className="project-card md-4">
            <ProjectCard
              imgPath={thirsty}
              title="Thirsty Thursdays"
              description="Thirst thursdays is a companion app to help you decide on a recipe for dinner, and a drink to go with it!"
              link="https://github.com/mshifflette/thirsty-thursdays"
            />
          </Col>
        </Row>
      </Container>
    </Container>
        </>


    );
}

export default Projects