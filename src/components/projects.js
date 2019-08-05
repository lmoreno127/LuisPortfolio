import React from "react";
import Im from "./p1.png";
import Carousel from "react-bootstrap/Carousel";
import sr from "./ScrollReveal";
import Modal from "react-bootstrap/Modal";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalBody from "react-bootstrap/ModalBody";
import ModalFooter from "react-bootstrap/ModalFooter";
import Button from "react-bootstrap/Button";
import ProCont from "./projects-content";
import Badge from "react-bootstrap/Badge";
class Projects extends React.Component {
  state = { show: false, title: "", des: "", tecs: [] };
  handleClose = () => this.setState({ show: false });
  handleShow = idx => {
    var badges = ProCont[idx].tecs.map(tec => (
      <Badge pill variant="success">
        {tec}
      </Badge>
    ));
    this.setState({
      show: true,
      title: ProCont[idx].title,
      des: ProCont[idx].desc,
      tecs: badges
    });
  };

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
            <img
              className="d-block w-40"
              src={Im}
              alt="First slide"
              onClick={() => this.handleShow(0)}
            />
            <Carousel.Caption>
              <h3>Portfolio</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-40"
              src={Im}
              alt="First slide"
              onClick={() => this.handleShow(1)}
            />
            <Carousel.Caption>
              <h3>Portfolio</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-40"
              src={Im}
              alt="First slide"
              onClick={() => this.handleShow(2)}
            />
            <Carousel.Caption>
              <h3>Portfolio</h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{this.state.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {this.state.des}
            {this.state.tecs}
          </Modal.Body>
          <Modal.Footer />
        </Modal>
      </div>
    );
  }
}

export default Projects;
