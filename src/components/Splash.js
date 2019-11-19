import React from "react";
import "../styling/Splash.css";

import CodeVid from "../assets/video/Source-Code.mp4";
import NavBar from "./NavBar";

class Splash extends React.Component {
  render() {
    return (
      <div id="SplashContainer">
        <NavBar />
        <video id="videoTag" autoPlay loop muted>
          <source src={CodeVid} type="video/mp4" />
        </video>
        <div id="SplashInfo">hey this is it</div>
      </div>
    );
  }
}

export default Splash;
