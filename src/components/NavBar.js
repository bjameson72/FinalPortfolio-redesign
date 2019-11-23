import React from "react";
import "../styling/NavBar.css";
import Resume from "../assets/images/Brock Resume-2019.pdf";
import { Link, animateScroll as scroll } from "react-scroll";

// import logo from "../assets/images/BJamesonLogo.png";
import logo from "../assets/images/smalllogo.png";

const debounce = (func, wait) => {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
};

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollPositionY: 0
    };
  }

  componentDidMount() {
    // 32 is the number of milliseconds to debounce
    // I picked this because it's approx 1 frame (ie: 16.7ms)
    // You'll want to modulate that to your taste.
    // Add console.logs in handleScroll function to check if its flooding.
    return window.addEventListener("scroll", debounce(this.handleScroll, 16));
  }

  componentWillUnmount() {
    return window.removeEventListener(
      "scroll",
      debounce(this.handleScroll, 16)
    );
  }

  handleScroll = () => {
    // + is unary operator, same as Number(window.scrollY)
    const scrollPositionY = +window.scrollY;
    return this.setState({ scrollPositionY });
  };
  render() {
    // !! coerces value to be a Boolean
    // we want it to be true or false (true if scrollPositionY> 0)
    // it works because scrollPositionY=== 0 is falsy
    const isScrolling = !!this.state.scrollPositionY;
    return (
      <div
        className={
          isScrolling ? "NavBarContainer isScrolling" : "NavBarContainer"
        }
      >
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
            offset={-130}
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
            offset={-120}
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
            offset={-130}
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
