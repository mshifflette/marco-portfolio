
import React, { useState, useEffect } from "react";
import './App.css';
import './style.css'
import 'bootstrap/dist/css/bootstrap.css'
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import About from "./components/About"
import Projects from "./components/Projects"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/projects" element={<Projects/>} />
      <Route path="/about" element={<About/>} />
    </Routes>
    </div>
    </Router>
  );
}

export default App;
