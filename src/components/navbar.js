import React from "react";

class Nav extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light ">
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
            <div className="navbar-nav">
              <a className="nav-item nav-link active" href="#">
                About Me <span className="sr-only">(current)</span>
              </a>
              <a className="nav-item nav-link active" href="#">
                Skills
              </a>
              <a className="nav-item nav-link active" href="#">
                Services
              </a>
              <a
                className="nav-item nav-link active"
                href="#"
                tabIndex="-1"
                aria-disabled="true"
              >
                Contact Me
              </a>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
export default Nav;
