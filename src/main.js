import React from "react";
import Nav from "./components/navbar";
import Title from "./components/title";
import Description from "./components/description";
import ScrollReveal from "scrollreveal";
import Education from "./components/edu";
import Skills from "./components/skills";
import Projects from "./components/projects";
import Contact from "./components/contact";
import Footer from "./components/footer";
class Main extends React.Component {
  render() {
    return (
      <div>
        <Nav />
        <div id="large-header" className="large-header">
          <canvas id="demo-canvas" />
        </div>
        <Title />
        <Description />
        <Education />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default Main;
