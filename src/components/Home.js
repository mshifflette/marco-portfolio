
import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.css'
import {Container,Row,Col,Image} from 'react-bootstrap'
import Type from './Type'
import totoro from '../assets/totoro.png';
import pikachu from '../assets/pikachurun.gif';
import Tilt from "react-parallax-tilt";
import {
    AiFillGithub,
    AiOutlineTwitter,
    AiFillInstagram,
  } from "react-icons/ai";
  import { FaLinkedinIn } from "react-icons/fa";
function Home(){
    return(
        <>
        <Container fluid className="home-section ">
        <Container >
        <Row>
            <Col>
                <h1>Hello! I'm
                </h1>
                <h1>
                <strong className="main-name"> MARCO SHIFFLETTE</strong>
                </h1>

                <Type />
            </Col>
            <Col>
                <Image src={pikachu} /> 
            </Col>
        </Row>
        <br/>  
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        </Container>
        <Container >
            <Row>
                <Col>
                <Tilt>
                    <Image src={totoro}/>
                </Tilt>
                </Col>
                <Col>
                    <Row className="text-center">                      
                        <h1>ALLOW ME TO INTRODUCE MYSELF</h1>                    
                    </Row>
                    <br/>
                    <Col>
                    <h5>I am a Seattle native, language and music lover, turned coder!</h5> 
                    </Col>
                    <br/>
                    <Col>
                    <h5>My goals are to keep mastering more of Javascript, while improving my proficiency in other technologies such as React! </h5> 
                    </Col>
                    <br/>
                </Col>
            </Row>
        </Container>
        <Container className="d-flex justify-content-center">
        <Row>
          <Col className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/mshifflette"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/marco-shifflette/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="#"
            
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/marcoshifflette/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
        </Container>
        </Container>
        </>
    );
}

export default Home