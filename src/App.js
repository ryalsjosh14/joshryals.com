import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap'
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Education from './components/Education';
import Projects from './components/Projects'
import Interests from './components/Interests'
//import ScrollableAnchor from 'react-scrollable-anchor'

function App() {

  const [darkMode, setDarkMode] = React.useState(false);

  let background = darkMode ? "darkBack" : "back";

  return (
    <div className={background}>
      <div className="bar">
        <Header mode={darkMode} setMode={setDarkMode}></Header>
      </div>
      <div className="about">
        <AboutMe mode={darkMode}></AboutMe>
      </div>
      <div className="edu">
        <Education mode={darkMode}></Education>
      </div>
      <div className="projects">
        <Projects mode={darkMode}></Projects>
      </div>
      <div id="interests">
        <Interests mode={darkMode}></Interests>
      </div>
    </div>
  );
}

export default App;
