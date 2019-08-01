import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <div id="footer">
      <h2>Footer</h2>
      <FontAwesomeIcon icon={faEnvelope} />
    </div>
  );
}

export default Footer;
