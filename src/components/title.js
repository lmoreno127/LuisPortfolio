import React from "react";
import Typed from "typed.js";
class Title extends React.Component {
  componentDidMount() {
    const opts = {
      strings: [
        "Hi, I'm Luis ",
        "I'm Fullstack Developer",
        "I'm Mathematician",
        "I'm Community Manager",
        "I Enjoy Programming a Lot",
        "I Enjoy to Travel",
        "I Enjoy Mathematics",
        "Welcome to my Page"
      ],
      typeSpeed: 100,
      smartBackspace: true,
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
