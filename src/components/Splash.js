import React from "react";
import "../styling/Splash.css";
import Github from "../assets/images/github.jpg";
import Linkedin from "../assets/images/linkedin.png";
import Facebook from "../assets/images/facebook.png";

import CodeVid from "../assets/video/Source-Code.mp4";
import NavBar from "./NavBar";

class Splash extends React.Component {
  render() {
    return (
      <div id="SplashContainer">
        <NavBar />
        <div id="SplashSectionContainer">
          <video id="videoTag" autoPlay loop muted>
            <source src={CodeVid} type="video/mp4" />
          </video>
          <div id="SplashInfoButtonContainer">
            <h1 id="SplashInfo">Welcome to my portfolio!</h1>
            <button id="SplashButton">Check out my work!</button>
          </div>
          <div id="SplashSocialButtons">
            <a className="socialIcon">
              <img className="icon" src={Linkedin} />
            </a>
            <a className="socialIcon">
              <img className="icon" src={Facebook} />
            </a>
            <a className="socialIcon">
              <img className="icon" src={Github} />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Splash;
