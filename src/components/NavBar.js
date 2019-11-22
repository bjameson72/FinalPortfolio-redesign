import React from "react";
import "../styling/NavBar.css";
import Resume from "../assets/images/Brock Resume-2019.pdf";

// import logo from "../assets/images/BJamesonLogo.png";
import logo from "../assets/images/smalllogo.png";

class NavBar extends React.Component {
  render() {
    return (
      <div id="NavBarContainer">
        <div id="logoContainer">
          <img src={logo} id="logo" alt="Brock Jameson" />
        </div>
        <div id="linksContainer">
          <a className="NavLink">About</a>
          <a className="NavLink">Projects</a>
          <a className="NavLink">Contact</a>
          <a href={Resume} className="NavLink" target="_blank">
            Resume
          </a>
        </div>
      </div>
    );
  }
}

export default NavBar;
