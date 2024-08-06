import React from "react";
import { FaCalculator } from "react-icons/fa";
import "./Features.css";
import { TbManFilled, TbBrandStackshare } from "react-icons/tb";
import { IoPersonAddSharp } from "react-icons/io5";
import { BiSolidShareAlt } from "react-icons/bi";
import { IoIosFolderOpen } from "react-icons/io";
import svg1 from "../assets/SVG (1).png";
import svg2 from "../assets/SVG (2).png";
import svg3 from "../assets/SVG (3).png";
import svg4 from "../assets/SVG (4).png";
import svg5 from "../assets/SVG (8).png";
import svg6 from "../assets/SVG (5).png";
import svg7 from "../assets/SVG (6).png";
import svg8 from "../assets/SVG (7).png";

function Features() {
  return (
    <div className="features-container">
      <h2>And many more features</h2>
      <p className="subtitle">
        Typebot makes form building easy and comes with powerful features
      </p>
      <div className="features-grid">
        <div className="feature-card">
          <TbManFilled className="feature-icon" />
          <h3>Hidden fields</h3>
          <p>
            Include data in your form URL to segment your user and use its data
            directly in your form.
          </p>
        </div>
        <div className="feature-card">
          <IoPersonAddSharp className="feature-icon" />
          <h3>Team collaboration</h3>
          <p>Invite your teammates to work on your typebots with you.</p>
        </div>
        <div className="feature-card">
          <TbBrandStackshare className="feature-icon" />
          <h3>Link to sub typebots</h3>
          <p>Reuse your typebots in different parent bots.</p>
        </div>
        <div className="feature-card">
          <FaCalculator className="feature-icon" />
          <h3>Custom code</h3>
          <p>Customize everything with your own JavaScript & CSS code.</p>
        </div>
        <div className="feature-card">
          <BiSolidShareAlt className="feature-icon" />
          <h3>Custom domain</h3>
          <p>Connect your typebot to the custom URL of your choice.</p>
        </div>
        <div className="feature-card">
          <IoIosFolderOpen className="feature-icon" />
          <h3>Folder management</h3>
          <p>
            Organize your typebots in specific folders to keep it clean and work
            with multiple clients.
          </p>
        </div>
      </div>
      <div className="partners">
        <h3>Loved by teams and creators from all around the world</h3>
        <div className="partners-logos">
          <img src={svg1} alt="iBanFirst" />
          <img src={svg2} alt="lemlist" />
          <img src={svg3} alt="MakerLead" />
          <img src={svg4} alt="SocialHackrs" />
          <img src={svg5} alt="Pinpoint Interactive" />
          <img src={svg6} alt="BOLE" />
          <img src={svg7} alt="WebiSharp" />
          <img src={svg8} alt="Awwsome" />
        </div>
      </div>
    </div>
  );
}

export default Features;
