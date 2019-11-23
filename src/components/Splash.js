import React from "react";
import "../styling/Splash.css";
import Github from "../assets/images/github.jpg";
import Linkedin from "../assets/images/linkedin.png";
import Instagram from "../assets/images/Instagram.png";

import CodeVid from "../assets/video/Source-Code.mp4";
import NavBar from "./NavBar";

class Splash extends React.Component {
  render() {
    return (
      <div id="SplashContainer">
        <div id="SplashSectionContainer">
          <video id="videoTag" autoPlay loop muted>
            <source src={CodeVid} type="video/mp4" />
          </video>
          <div id="SplashInfoButtonContainer">
            <h1 id="SplashInfo">Welcome to my portfolio!</h1>
            <button id="SplashButton">Check out my work!</button>
          </div>
          <div id="SplashSocialButtons">
            <a
              href="https://www.linkedin.com/in/brockjameson/"
              className="socialIcon"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="icon" src={Linkedin} alt="LinkedIn Link" />
            </a>
            <a
              href="https://www.instagram.com/bjameson72/?hl=ur"
              className="socialIcon"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="icon" src={Instagram} alt="Facebook Link" />
            </a>
            <a
              href="https://github.com/bjameson72"
              className="socialIcon"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="icon" src={Github} alt="Github Link" />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Splash;
