import React from "react";
import "../styling/Projects.css";
import sliceit from "../assets/images/Slicer.png";
import aura from "../assets/images/Aura.png";

class Projects extends React.Component {
  render() {
    return (
      <div id="ProjectsContainer">
        <h1 id="ProjectsTitle">Recent Projects</h1>
        <div id="LaptopContainer">
          <a href="www.sliceit.pizza" target="_blank" rel="noopener noreferrer">
            <img className="laptop" src={sliceit} alt="Slice it link" />
          </a>
          <a href="www.sliceit.pizza" target="_blank" rel="noopener noreferrer">
            <img className="laptop" src={aura} alt="Aura link" />
          </a>
        </div>
        <div id="ButtonContainer">
          <button id="ProjectsButton">View more work!</button>
        </div>
      </div>
    );
  }
}

export default Projects;
