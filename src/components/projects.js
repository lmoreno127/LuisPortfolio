import React from "react";
import Im from "./p1.png";
import Carousel from "react-bootstrap/Carousel";
import sr from "./ScrollReveal";
class Projects extends React.Component {
  componentDidMount() {
    const config = {
      origin: "left",
      duration: 1500,
      delay: 180,
      distance: "700px",
      scale: 4,
      easing: "ease"
    };
    sr.reveal(this.refs.pro, config);
  }
  render() {
    return (
      <div id="projects" ref="pro">
        <h2 id="proti">Projects</h2>
        <Carousel id="carousel">
          <Carousel.Item>
            <img className="d-block w-40" src={Im} alt="First slide" />
            <Carousel.Caption>
              <h3>Portfolio</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-40" src={Im} alt="First slide" />
            <Carousel.Caption>
              <h3>Portfolio</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-40" src={Im} alt="First slide" />
            <Carousel.Caption>
              <h3>Portfolio</h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}

export default Projects;
