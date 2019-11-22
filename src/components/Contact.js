import React from "react";
import "../styling/Contact.css";
import Github from "../assets/images/github.jpg";
import Linkedin from "../assets/images/linkedin.png";
import Instagram from "../assets/images/Instagram.png";
import headshot from "../assets/images/headshot.jpeg.jpg";
import Form from "./Form";

class Contact extends React.Component {
  render() {
    return (
      <div id="ContactContainer">
        <div id="FormContainer">
          <div id="LeftTitleContainer">
            <h1 className="ContactTitle">Have a question?</h1>
            <h1 className="ContactTitleBottom">Want to grab a coffee?</h1>
          </div>
          <div id="Form">
            <Form />
          </div>
        </div>
        <div id="NoFormContainer">
          <div id="HeadshotContainer">
            <img id="Headshot" src={headshot} alt="Brock Jameson" />
          </div>
          <div id="ContactSocialButtons">
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
          <div id="RightTitleContainer">
            <h1 className="ContactTitle">Don't like forms?</h1>
            <h1 className="ContactTitleBottom">Connect with me above!</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
