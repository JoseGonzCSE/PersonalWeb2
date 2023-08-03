import logo from './logo.svg';
import React, { useRef } from 'react';
import './App.css';
import Nav from './Nav';
import Home from './Pages/Home';
import AboutMe from './Pages/AboutMe';
import Contact from './Pages/Contact';
import ScrollToTopButton from './Pages/scrollToTop';
import{Route,Routes} from "react-router-dom"



function App() {
 const aboutMeRef=useRef();
 const contactRef=useRef();
 
  return (
    <>
      <div className="scrollable">
        <Nav aboutMeRef={aboutMeRef} contactRef={contactRef} />
        <div className="Content">
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/aboutme" element={<AboutMe/>}/>
          </Routes>
          <AboutMe aboutMeRef={aboutMeRef}/>
          <Contact contactRef={contactRef}/>
        </div>
      </div>
      <ScrollToTopButton/>
    </>
  )
}

export default App;
