import React, { useState } from "react";
import "./Chat.css";
import { GoDotFill } from "react-icons/go";

const Chat = ({ theme }) => {
  const [messages, setMessages] = useState([
    { text: "Hello", sender: "other" },
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [hiClicked, setHiClicked] = useState(false);

  const handleHiClick = async () => {
    // Simulate database response
    const response = await new Promise((resolve) =>
      setTimeout(() => resolve(true), 1000)
    );
    if (response) {
      setHiClicked(true);
    }
  };

  const handleSendMessage = () => {
    if (inputMessage.trim()) {
      setMessages([...messages, { text: inputMessage, sender: "user" }]);
      setInputMessage("");
    }
  };

  return (
    <div className={`chat-container ${theme}`}>
      <div className="messages">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.sender}`}>
            <div className="message-content">{msg.text}</div>
            {index === 0 && (
              <button
                className={`hi-button ${hiClicked ? "clicked" : ""}`}
                onClick={handleHiClick}
              >
                Hi
                <GoDotFill
                  className="dot_icon"
                  style={{
                    position: "absolute",
                    right: "-8px",
                    top: "-8px",
                    fontSize: "20px",
                    color: "#007bff",
                  }}
                />
              </button>
            )}
          </div>
        ))}
      </div>
      {hiClicked && (
        <div className="input-container">
          <input
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            placeholder="Type a message"
          />
          <button onClick={handleSendMessage}>Send</button>
        </div>
      )}
    </div>
  );
};

export default Chat;
