import React from "react";
import "../styling/Projects.css";
import laptop from "../assets/images/laptop copy.png";

class Projects extends React.Component {
  render() {
    return (
      <div id="ProjectsContainer">
        <h1 id="ProjectsTitle">Projects</h1>
        <div id="LaptopContainer">
          <img className="laptop" src={laptop} />
          <img className="laptop" src={laptop} />
        </div>
        <div id="ButtonContainer">
          <button id="ProjectsButton">View more work!</button>
        </div>
      </div>
    );
  }
}

export default Projects;
