

import React, { useState, useEffect } from "react";
import logo from '../assets/logo.svg'
import 'bootstrap/dist/css/bootstrap.css'
import { Nav, Navbar} from 'react-bootstrap'
import {BsHouseDoor} from 'react-icons/bs'

function NavBar() {
 return(
     <>
    <Navbar bg='dark' variant='dark'
    sticky='top' expand='md' collapseOnSelect>
      <Navbar.Brand>
        <img src={logo} width="40px" height="40px"/>
        marco.
      </Navbar.Brand>

      <Navbar.Toggle/>
      <Navbar.Collapse>
        <Nav>
        <Nav.Link href= 'Home'><BsHouseDoor/>Home</Nav.Link>
        <Nav.Link href= 'About'>About Me</Nav.Link>
        <Nav.Link href= 'Projects'>Projects</Nav.Link>
        </Nav>
      </Navbar.Collapse>
      
    </Navbar>
    </>
    );
    }

    export default NavBar;