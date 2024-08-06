import React from "react";
import "./Integration.css";
import icon1 from "../assets/Container1.png";
import icon2 from "../assets/Container2.png";

function IntegrationPlatform() {
  return (
    <div className="integration-container">
      <div className="icon-grid">
        <img src={icon1} alt="Icon 1" className="icon" />
        <img src={icon2} alt="Icon 2" className="icon" />
      </div>
      <div className="integration-text">
        <h2>Integrate with any platform</h2>
        <p>
          Typebot offers several native integrations blocks as well as
          instructions on how to embed typebot on particular platforms.
        </p>
      </div>
    </div>
  );
}

export default IntegrationPlatform;
