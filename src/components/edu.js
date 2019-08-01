import React from "react";
import sr from "./ScrollReveal";
class Education extends React.Component {
  componentDidMount() {
    const config = {
      origin: "left",
      duration: 1500,
      delay: 180,
      distance: "700px",
      scale: 4,
      easing: "ease"
    };
    sr.reveal(this.refs.edu, config);
  }
  render() {
    return (
      <div id="education" ref="edu">
        <h2 id="tie">Education</h2>
        <ul>
          <li>
            <h3>Full Stack Developer</h3>
            <br />
            <span className="place">Bogotá Bootcamp</span>
            <br />
          </li>
          <li>
            <h3>Mathematician</h3>
            <br />
            <span className="place">Pontificia Universidad Javeriana</span>
            <br />
          </li>
        </ul>
      </div>
    );
  }
}

export default Education;
