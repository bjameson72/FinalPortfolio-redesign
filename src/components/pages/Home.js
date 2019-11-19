import React from "react";
import Splash from "../Splash";
import About from "../About";

class Home extends React.Component {
  render() {
    return (
      <div id="homeContainer">
        <Splash />
        <About />
      </div>
    );
  }
}

export default Home;
