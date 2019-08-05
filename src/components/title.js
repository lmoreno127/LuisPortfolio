import React from "react";
import Typed from "typed.js";
class Title extends React.Component {
  componentDidMount() {
    const opts = {
      strings: [
        "Luis Moreno",
        "Fullstack Developer",
        "Mathematician",
        "Community Manager",
        "Traveler",
        "Welcome to my Page"
      ],
      typeSpeed: 100,
      loop: true
    };
    this.typed = new Typed(this.el, opts);
  }

  componentWillUnmount() {
    this.typed.destroy();
  }

  render() {
    return (
      <div id="typedc">
        <span
          id="typed"
          ref={el => {
            this.el = el;
          }}
        />
      </div>
    );
  }
}

export default Title;
