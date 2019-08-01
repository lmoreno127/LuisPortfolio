import React from "react";
import Tec from "./tec";
import htmlogo from "./html5.png";
import csslogo from "./css3.png";
import jlogo from "./javascript.png";
import rlogo from "./react.png";
import rulogo from "./ruby.png";
import ralogo from "./rails.png";
import jqlogo from "./jquery.png";
import slogo from "./sql.png";
import glogo from "./git.png";
import hlogo from "./heroku.jpg";
import blogo from "./bootstrap.png";
import sr from "./ScrollReveal";
class Skills extends React.Component {
  componentDidMount() {
    const config = {
      origin: "left",
      duration: 1500,
      delay: 150,
      distance: "700px",
      scale: 4,
      easing: "ease"
    };
    sr.reveal(this.refs.skill, config);
  }
  render() {
    return (
      <div id="skills" ref="skill">
        <h2 id="st">Skills</h2>
        <div className="container" id="skcontainer">
          <div className="row">
            <div className="col">
              <Tec imr={htmlogo} tname="HTML5" />
            </div>
            <div className="col">
              <Tec imr={csslogo} tname="CSS3" />
            </div>
            <div className="col">
              <Tec imr={jlogo} tname="JavaScript" />
            </div>
            <div className="col">
              <Tec imr={rlogo} tname="React.js" />
            </div>
            <div className="col">
              <Tec imr={rulogo} tname="Ruby" />
            </div>
            <div className="col">
              <Tec imr={ralogo} tname="Ruby on Rails" />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <Tec imr={jqlogo} tname="JQuery" />
            </div>
            <div className="col">
              <Tec imr={blogo} tname="Bootstrap" />
            </div>
            <div className="col">
              <Tec imr={slogo} tname="SQL" />
            </div>
            <div className="col">
              <Tec imr={glogo} tname="Git" />
            </div>
            <div className="col">
              <Tec imr={hlogo} tname="Heroku" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Skills;
