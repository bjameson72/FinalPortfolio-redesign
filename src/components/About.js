import React from "react";
import "../styling/About.css";
import TabContainer from "./Tabber/TabContainer";

class About extends React.Component {
  render() {
    return (
      <div id="AboutContainer">
        <h1 id="AboutTitle">About Me</h1>
        <TabContainer />
      </div>
    );
  }
}

export default About;
