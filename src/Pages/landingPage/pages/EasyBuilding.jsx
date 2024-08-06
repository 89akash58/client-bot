import React from "react";
import "./EasyBuilding.css";
import easy from "../assets/easy.png";
import embed from "../assets/embed.png";
function EasyBuilding() {
  return (
    <div>
      <div className="easybulding">
        <div className="easybuilding_container">
          <div className="easy_embed">
            <img src={easy} className="easy" alt="" />
            <div className="easy_text">
              <h1 className="heading-3">Easy Building experience</h1>
              <p className="para-3">
                All you have to do is drag and drop blocks to create your app.
                Even if you have custom needs, you can always add custom code.
              </p>
            </div>
          </div>
          <div className="easy_embed">
            <div className="embed_text">
              <h1 className="heading-3">Embed it in a click</h1>
              <p className="para-3">
                Embedding your typebot in your applications is a walk in the
                park. Typebot gives you several step-by-step platform-specific
                instructions. Your typebot will always feel "native".
              </p>
            </div>
            <img src={embed} className="embed" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default EasyBuilding;
