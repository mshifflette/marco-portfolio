
import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.css'
import { Nav, Navbar, Container} from 'react-bootstrap'
import Type from './Type'

function Home(){
    return(
        <>
        <Container fluid className="home-section">
        <h1>Hello!</h1>
        <h2>I'm Marco Shifflette</h2>
        <Type />
        </Container>
        </>
    );
}

export default Home