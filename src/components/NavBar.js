import React from "react";
import "../styling/NavBar.css";
import Resume from "../assets/images/Brock Resume-2019.pdf";
import { Link, animateScroll as scroll } from "react-scroll";

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
          <Link
            className="NavLink"
            activeClass="active"
            to="AboutContainer"
            spy={true}
            smooth={true}
            offset={-20}
            duration={600}
          >
            About
          </Link>
          <Link
            className="NavLink"
            activeClass="active"
            to="ProjectsContainer"
            spy={true}
            smooth={true}
            offset={-15}
            duration={650}
          >
            Projects
          </Link>
          <Link
            className="NavLink"
            activeClass="active"
            to="ContactContainer"
            spy={true}
            smooth={true}
            offset={15}
            duration={700}
          >
            Contact
          </Link>
          <a
            href={Resume}
            className="NavLink"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </div>
      </div>
    );
  }
}

export default NavBar;
