import React from "react";
import logo from "./assets/Formbotlogo.png";
import "./LandingPage.css";
import ReplaceChatBots from "./pages/ReplaceChatBots";
import DemoContainer from "./pages/DemoContainer";
import EasyBuilding from "./pages/EasyBuilding";
import IntegrationPlatform from "./pages/IntegrationPlatform";
import CollectResult from "./pages/CollectResult";
import Features from "./pages/Features";
import Improve from "./pages/Improve";
import Footer from "./pages/Fotter";
import { useNavigate } from "react-router-dom";

function LandingPage() {
  const navigate = useNavigate();
  const handleclicktologin = () => {
    navigate("/login");
  };
  const handleclicktosignup = () => {
    navigate("/signup");
  };
  return (
    <div className="landing_container">
      <section className="all_container">
        <section className="navbar">
          <div className="navbar_container">
            <div className="logo">
              <img src={logo}></img>
              <text
                style={{
                  color: "white",
                  position: "absolute",
                  margin: "8px",
                  fontWeight: "660",
                }}
              >
                FormBot
              </text>
            </div>
            <div className="navbar_button">
              <button className="sign-up" onClick={handleclicktosignup}>
                Sign Up
              </button>
              <button className="create_formbot" onClick={handleclicktologin}>
                Create a FormBot
              </button>
            </div>
          </div>
        </section>
        <DemoContainer></DemoContainer>
        <ReplaceChatBots></ReplaceChatBots>
        <EasyBuilding></EasyBuilding>
        <IntegrationPlatform></IntegrationPlatform>
        <CollectResult></CollectResult>
        <Features></Features>
        <Improve></Improve>
        <Footer></Footer>
      </section>
    </div>
  );
}

export default LandingPage;
