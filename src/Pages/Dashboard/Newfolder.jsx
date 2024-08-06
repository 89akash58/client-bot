import React, { useState } from "react";
import "./Newfolder.css";

function Newfolder({ onClose, isOpen, onCreateFolder }) {
  const [folderName, setFolderName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitting new folder:", folderName);
    if (folderName.trim()) {
      onCreateFolder(folderName);
      setFolderName("");
      onClose();
    } else {
      alert("Folder name cannot be empty.");
    }
  };

  const handleCancel = () => {
    setFolderName("");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="newfolder_container">
      <div className="newfolder_title">
        <h3>Create New Folder</h3>
      </div>
      <form className="newfolder_input" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Folder Name"
          className="newfolder_inputs"
          value={folderName}
          onChange={(e) => setFolderName(e.target.value)}
        />
        <div className="newfolder_button">
          <button className="done_button" type="submit">
            Done
          </button>
          <p style={{ fontSize: "40px", fontWeight: "100" }}>|</p>
          <button
            className="cancel_button"
            type="button"
            onClick={handleCancel}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default Newfolder;
