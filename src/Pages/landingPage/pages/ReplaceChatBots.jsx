import React from "react";
import "./ReplaceChatBots.css";
import { MdCancel } from "react-icons/md";
import { FcOk } from "react-icons/fc";
import "../utils/Utils.css";
import pic from "../assets/Figure.png";
import square from "../assets/square.png";

function ReplaceChatBots() {
  return (
    <div className="container">
      <div className="replace_chat_bot" style={{ marginBottom: "10em" }}>
        <section className="replace_chat_bot_container">
          <div className="replace_text">
            <h1 style={{ color: "white", fontSize: "42px" }}>
              Replace your old school forms with <br />
              chatbots
            </h1>
            <p className="para2" style={{ color: "grey" }}>
              Typebot is a better way to ask for information. It leads to an
              increase in customer satisfaction and retention and multiply by 3
              your conversion rate compared to classical forms.
            </p>
          </div>
          <div className="cancelandcorrect_icon">
            <MdCancel color="red" />
            <FcOk />
          </div>
        </section>
        <section className="formandchatbot">
          <div className="oldform">
            Full name <br />
            <input
              type="text"
              placeholder="Full name"
              className="entry"
              required
            />
            <br />
            Email
            <br />
            <input type="text" placeholder="Email" className="entry" required />
            <br />
            What are the services are you interested in?
            <br />
            <input type="checkbox" className="boxes" />
            Website Dev <br />
            <input type="checkbox" className="boxes" />
            Content Marketing <br />
            <input type="checkbox" className="boxes" />
            social Media
            <br />
            <input type="checkbox" className="boxes" />
            UX/UI Design
            <br />
            Additional Information <br />
            <textarea
              className="texts"
              placeholder="Additional Information"
            ></textarea>
            <button className="create_formbot">Submit</button>
          </div>

          <div className="chatbot">
            <h4 className="internalmessage" style={{}}>
              Welcome to AA(Awesome Agency)
            </h4>
            <div className="images">
              <img
                src={square}
                alt=""
                className="square
              "
              />
              <img src={pic} alt="" className="gif" />
              <div
                className="hibtn"
                style={{ textAlign: "right", marginTop: "-10px" }}
              >
                <button className="chat-bubble">Hi</button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default ReplaceChatBots;
