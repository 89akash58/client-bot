import React from "react";
import Navigation from "./pages/Navigation";
import MainContent from "./pages/MainContent";
import "./Workspace.css";
function Workspace() {
  return (
    <div>
      <Navigation />
      <MainContent />
    </div>
  );
}

export default Workspace;
