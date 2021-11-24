
import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.css'
import { Container,Col,Row} from 'react-bootstrap'
import naruto from '../assets/naruto.gif';
import { ImPointRight } from "react-icons/im";
import Card from "react-bootstrap/Card";
// import GitHubCalendar from "react-github-calendar";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiMysql,
  DiGit,
} from "react-icons/di";
function About(){
    // const colourTheme = {
    //     background: "transparent",
    //     text: "#ffffff",
    //     grade4: "#8400b8",
    //     grade3: "#b22ff4",
    //     grade2: "#b265f6",
    //     grade1: "#c084f5",
    //     grade0: "#ecd9fc",
    //   };
    return(
        <>
        <Container fluid className="about-section">
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
               Who <strong className="purple">I AM</strong>
            </h1>
            <Card className="quote-card-view">
                <Card.Body>
                    <blockquote className="blockquote mb-0">
                    <p style={{ textAlign: "justify" }}>
                        Hows it going! I'm <span className="purple">Marco Shifflette </span>
                        from <span className="purple"> Seattle, Washington.</span>
                        <br />I am a junior developer looking to establish myself in the field of software development.
                        <br />
                        <br />
                        Apart from coding, some other activities that I love to do!
                    </p>
                    <ul>
                        <li className="about-activity">
                        <ImPointRight /> Playing Games
                        </li>
                        <li className="about-activity">
                        <ImPointRight /> Playing the piano and guitar
                        </li>
                        <li className="about-activity">
                        <ImPointRight /> Travelling
                        </li>
                    </ul>

                   
                    </blockquote>
                </Card.Body>
            </Card>
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={naruto} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <h1 className="project-heading">
          Professional <strong className="">Skillset </strong>
        </h1>

        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMysql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
    </Row>

        {/* <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Days I <strong className="purple">Code</strong>
      </h1>
      <GitHubCalendar
        username="mshifflette"
        blockSize={15}
        blockMargin={5}
        theme={colourTheme}
        fontSize={16}
      />
    </Row> */}
      </Container>
    </Container>
        </>


    );
}

export default About