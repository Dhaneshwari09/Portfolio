import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Skill from './components/SkillsSection';
import Project from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <div id="home">
        <Home />
      </div>
      <div id="skills">
        <Skill />
      </div>
      <div id="projects">
        <Project />
      </div>
      <div id="education">
        <Education />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </>
  );
}

export default App;
