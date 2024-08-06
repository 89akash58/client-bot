import React from "react";
import "./CollectResult.css";
import square from "../assets/square.png";
function CollectResult() {
  return (
    <div>
      <div className="collect_result_container">
        <div className="collect_result">
          <h1>Collect results in real-time</h1>
          <p>
            One of the main advantage of a chat application is that you collect
            the user's responses on each question. <br />
            <b> You won't lose any valuable data.</b>
          </p>
        </div>
        <div className="collect" style={{ textAlign: "center" }}>
          <h4 className="message">
            As you answer this chat, you'll see your result in the real Airtable
            spreadsheet
          </h4>
          <h4 className="message">You can think of it as a guestbook 😂</h4>

          <div className="images">
            <h4 className="message">Ready?</h4>
            <img
              src={square}
              alt=""
              className="square
              "
              style={{ top: 8 }}
            />
            <div className="hibtn">
              <button
                className="chat-bubble"
                style={{ position: "absolute", left: "34vw" }}
              >
                Yeah!
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CollectResult;
