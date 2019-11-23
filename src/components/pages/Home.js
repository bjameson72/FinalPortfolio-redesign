import React from "react";
import "../../styling/Home.css";
import Splash from "../Splash";
import About from "../About";
import Projects from "../Projects";
import Contact from "../Contact";
import NavBar from "../NavBar";

class Home extends React.Component {
  render() {
    return (
      <div id="HomeContainer">
        <NavBar />
        <Splash />
        <About />
        <Projects />
        <Contact />
      </div>
    );
  }
}

export default Home;
