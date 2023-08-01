import logo from './logo.svg';
import React, { useRef } from 'react';
import './App.css';
import Nav from './Nav';
import Home from './Pages/Home';
import AboutMe from './Pages/AboutMe';
import{Route,Routes} from "react-router-dom"



function App() {
 const aboutMeRef=useRef();
 
  return (
    <>
      <div className="scrollable">
        <Nav aboutMeRef={aboutMeRef} />
        <div className="Content">
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/aboutme" element={<AboutMe/>}/>
          </Routes>
          <AboutMe aboutMeRef={aboutMeRef}/>
        </div>
      </div>
    </>
  )
}

export default App;
