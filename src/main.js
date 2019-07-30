import React from "react";
import Nav from "./components/navbar";
function Main() {
  return (
    <div>
      <Nav />
      <div id="large-header" className="large-header">
        <canvas id="demo-canvas" />
      </div>
    </div>
  );
}

export default Main;
