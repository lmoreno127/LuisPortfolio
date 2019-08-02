import React from "react";
import sr from "./ScrollReveal";
class Contact extends React.Component {
  componentDidMount() {
    const config = {
      origin: "left",
      duration: 1500,
      delay: 180,
      distance: "700px",
      scale: 4,
      easing: "ease"
    };
    sr.reveal(this.refs.cont, config);
  }
  render() {
    return (
      <div id="contact" ref="cont">
        <h2 id="contt">Contact Me</h2>
        <form>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea className="form-control" id="message" rows="3" />
          </div>
          <button type="button" className="btn btn-success">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default Contact;
