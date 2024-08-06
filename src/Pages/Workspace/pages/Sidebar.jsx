import React, { useState } from "react";
import { PiChatText } from "react-icons/pi";
import { CiCalendarDate, CiImageOn, CiText } from "react-icons/ci";
import { TbMovie } from "react-icons/tb";
import { BsTelephone } from "react-icons/bs";
import { FaRegStar } from "react-icons/fa6";
import { IoMdCheckboxOutline } from "react-icons/io";
import { MdGif, MdOutlineEmail, MdOutlineNumbers } from "react-icons/md";
import "./Sidebar.css";


function Sidebar({ addSelectedItem }) {
  // console.log("Stored Form ID:", storedFormId);
  const handleSelectItem = (item) => {
    //setSelectedItem(item);
    addSelectedItem(item);

    // const token = localStorage.getItem("token");

    // // Ensure you have access to the current form ID
    // const currentFormId = localStorage.getItem("formId");

    // const payload = {
    //   items: [
    //     {
    //       type: item,
    //       name: `${item}`,
    //     },
    //   ],
    //   formId: currentFormId, // Add this line
    // };

    // console.log("Sending payload:", payload);

    // axios
    //   .post("http://localhost:4000/createformitem", payload, {
    //     headers: {
    //       "Content-Type": "application/json",
    //       Authorization: `Bearer ${token}`,
    //     },
    //   })
    //   .then((response) => {
    //     console.log("Form item created successfully:", response.data);
    //     // You might want to update your local state here to reflect the new item
    //   })
    //   .catch((error) => {
    //     console.error("Error creating form item:", error);
    //   });
  };
  return (
    <div className="side-panel">
      <div className="section">
        <h2 className="side_B_I">Bubbles</h2>
        <div className="options">
          <button className="option" onClick={() => handleSelectItem("Text")}>
            <PiChatText className="bubble_icon" />
            Text
          </button>
          <button className="option" onClick={() => handleSelectItem("Image")}>
            <CiImageOn className="bubble_icon" />
            Image
          </button>
          <button className="option" onClick={() => handleSelectItem("Video")}>
            <TbMovie className="bubble_icon" />
            Video
          </button>
          <button className="option" onClick={() => handleSelectItem("GIF")}>
            <MdGif className="bubble_icon" />
            GIF
          </button>
        </div>
      </div>
      <div className="section">
        <h2 className="side_B_I">Inputs</h2>
        <div className="options">
          <button
            className="option"
            onClick={() => handleSelectItem("TextInput")}
          >
            <CiText className="inputs_icons" />
            Text
          </button>
          <button
            className="option"
            onClick={() => handleSelectItem("NumberInput")}
          >
            <MdOutlineNumbers className="inputs_icons" />
            Number
          </button>
          <button
            className="option"
            onClick={() => handleSelectItem("EmailInput")}
          >
            <MdOutlineEmail className="inputs_icons" />
            Email
          </button>
          <button
            className="option"
            onClick={() => handleSelectItem("PhoneInput")}
          >
            <BsTelephone className="inputs_icons" />
            Phone
          </button>
          <button
            className="option"
            onClick={() => handleSelectItem("DateInput")}
          >
            <CiCalendarDate className="inputs_icons" />
            Date
          </button>
          <button
            className="option"
            onClick={() => handleSelectItem("RatingInput")}
          >
            <FaRegStar className="inputs_icons" />
            Rating
          </button>
          <button
            className="option"
            onClick={() => handleSelectItem("ButtonInput")}
          >
            <IoMdCheckboxOutline className="inputs_icons" />
            Buttons
          </button>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
