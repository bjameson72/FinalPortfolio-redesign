import React from "react";
import "../styling/Projects.css";
import sliceit from "../assets/images/Slicer.png";
import aura from "../assets/images/Aura.png";
import crypto from "../assets/images/Crypto.png";

class Projects extends React.Component {
  render() {
    return (
      <div id="ProjectsContainer">
        <h1 id="ProjectsTitle">Recent Projects</h1>
        <div id="LaptopContainer">
          <a
            className="lapcont"
            href="http://www.sliceit.pizza"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="laptop" src={sliceit} alt="Slice it link" />
          </a>
          <a
            className="lapcont"
            href="https://www.aura.community"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="laptop" src={aura} alt="Aura link" />
          </a>
          <a
            className="lapcont"
            href="http://www.brockjameson.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="laptop" src={crypto} alt="Aura link" />
          </a>
        </div>
        <div id="ButtonContainer">
          <button id="ProjectsButton">
            <a
              id="GithubButton"
              href="https://www.github.com/bjameson72"
              target="_blank"
              rel="noopener noreferrer"
            >
              View more on Github!
            </a>
          </button>
        </div>
      </div>
    );
  }
}

export default Projects;
