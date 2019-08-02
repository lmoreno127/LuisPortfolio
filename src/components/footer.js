import React from "react";
import sr from "./ScrollReveal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
class Footer extends React.Component {
  componentDidMount() {
    const config = {
      origin: "top",
      duration: 1500,
      delay: 180,
      distance: "700px",
      scale: 4,
      easing: "ease"
    };
    sr.reveal(this.refs.env, config);
    sr.reveal(this.refs.lin, config);
    sr.reveal(this.refs.git, config);
  }

  render() {
    return (
      <div id="footer">
        <a href="mailto:luismorenor127@hotmail.com" ref="env">
          <FontAwesomeIcon icon={faEnvelope} id="envelope" />
        </a>
        <a href="https://linkedin.com/in/lmoreno127" target="_blank" ref="lin">
          <FaLinkedin id="linkedin" />
        </a>
        <a href="https://github.com/lmoreno127" target="_blank" ref="git">
          <FaGithub id="github" />
        </a>
        <span id="copyr">&copy;2019 Luis Moreno</span>
      </div>
    );
  }
}

export default Footer;
