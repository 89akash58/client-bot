import React from "react";
import "./Imporve.css";
import svg9 from "../assets/SVG (9).png";
import svg10 from "../assets/SVG (10).png";
import { useNavigate } from "react-router-dom";

function Improve() {
  const navigate = useNavigate();
  const handle = () => {
    navigate("/login");
  };
  return (
    <div className="Improve_container">
      <div className="background">
        <div className="shape">
          <img src={svg9} className="triangle" alt="" />
        </div>
        <div className="shape ">
          <img src={svg10} className="semicircle" alt="" />
        </div>

        <div className="content">
          <h1>Improve conversion and user engagement with FormBots</h1>
          <button onClick={handle} className="create_formbot">
            Create a FormBot
          </button>
          <p>No trial. Generous free plan.</p>
        </div>
      </div>
    </div>
  );
}

export default Improve;
