import React from "react";
import "./DemoContainer.css";
import formimage from "../assets/formimage.png";
import svg9 from "../assets/SVG (9).png";
import svg10 from "../assets/SVG (10).png";
import { useNavigate } from "react-router-dom";

function DemoContainer() {
  const navigate = useNavigate();
  const handle = () => {
    navigate("/login");
  };
  return (
    <div>
      <section className="create_demo">
        <div className="create_demo_container">
          <div className="shape">
            <img src={svg9} className="triangle" style={{ top: "0" }} />
          </div>
          <div className="shape ">
            <img
              src={svg10}
              className="semicircle"
              style={{ top: "0" }}
              alt=""
            />
          </div>
          <div className="create_demo_text">
            <h1 className="heading_1">Build advanced chatbots visually</h1>
            <p className="para_1" style={{ color: "white", fontSize: "16px" }}>
              Typebot gives you powerful blocks to create unique chat
              experiences. Embed them anywhere on your web/mobile apps and start
              collecting results like magic.
            </p>
            <button
              className="create_formbot"
              onClick={handle}
              style={{ padding: "15px", fontWeight: "550" }}
            >
              Create a Formbot for free
            </button>
          </div>
        </div>
        <div className="formimage">
          <img
            src={formimage}
            className="image"
            style={{ marginBottom: "100px" }}
          />
        </div>
      </section>
    </div>
  );
}

export default DemoContainer;
