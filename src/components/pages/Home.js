import React from "react";
import "../../styling/Home.css";
import Splash from "../Splash";
import About from "../About";
import Projects from "../Projects";
import Contact from "../Contact";

class Home extends React.Component {
  render() {
    return (
      <div id="HomeContainer">
        <Splash />
        <About />
        <Projects />
        <Contact />
      </div>
    );
  }
}

export default Home;
