import React from "react";
import Nav from "./components/navbar";
import Title from "./components/title";
import Description from "./components/description";
import Education from "./components/edu";
function Main() {
  return (
    <div>
      <Nav />
      <div id="large-header" className="large-header">
        <canvas id="demo-canvas" />
      </div>
      <Title />
      <Description />
      <Education />
    </div>
  );
}

export default Main;
