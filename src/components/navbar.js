import React from "react";
class Nav extends React.Component {
  highlight(el) {
    el.classList.add("activeb");
  }
  removehighligth() {
    var navitems = document.querySelectorAll(".nav-item");
    navitems.forEach(function(el) {
      el.classList.remove("activeb");
    });
  }
  componentDidMount() {
    var abouti = document.querySelector(".abouti");
    var skilli = document.querySelector(".skilli");
    var proji = document.querySelector(".proji");
    var conti = document.querySelector(".conti");
    document.addEventListener("scroll", e => {
      console.log(window.scrollY);
      // if (window.scrollY > 1800) {
      //   this.removehighligth();
      //   this.highlight(conti);
      // } else
      if (window.scrollY > 1370) {
        this.removehighligth();
        this.highlight(proji);
      } else if (window.scrollY > 876) {
        this.removehighligth();
        this.highlight(skilli);
      } else {
        this.removehighligth();
        this.highlight(abouti);
      }
    });
  }
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ml-auto">
              <a
                className="nav-item nav-link active abouti activeb"
                href="#large-header"
              >
                About Me <span className="sr-only">(current)</span>
              </a>
              <a className="nav-item nav-link active skilli" href="#skills">
                Skills
              </a>
              <a className="nav-item nav-link active proji" href="#projects">
                Projects
              </a>
              {/* <a
                className="nav-item nav-link active conti"
                href="#contact"
                tabIndex="-1"
                aria-disabled="true"
              >
                Contact Me
              </a> */}
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
export default Nav;
