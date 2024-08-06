import React, { useState, useEffect } from "react";
import axios from "axios";
import "./MainContent.css";
import Sidebar from "./Sidebar";
import { RiDeleteBin6Line, RiFlagFill } from "react-icons/ri";
import { PiChatText } from "react-icons/pi";
import { CiCalendarDate, CiImageOn, CiText } from "react-icons/ci";
import { TbMovie } from "react-icons/tb";
import { BsTelephone } from "react-icons/bs";
import { FaRegStar } from "react-icons/fa6";
import { IoMdCheckboxOutline } from "react-icons/io";
import { MdGif, MdOutlineEmail, MdOutlineNumbers } from "react-icons/md";

function MainContent() {
  const [selectedItems, setSelectedItems] = useState([]);
  const [currentFormId, setCurrentFormId] = useState(() => {
    const formId = localStorage.getItem("formId");
    console.log("Initial currentFormId:", formId);
    return formId;
  });

  const fetchData = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get(
        `https://formbot-server.onrender.com/items/${currentFormId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setSelectedItems(response.data);
    } catch (error) {
      console.error(
        "Error fetching items:",
        error.response ? error.response.data : error.message
      );
    }
  };

  useEffect(() => {
    if (currentFormId) {
      fetchData();
    }
  }, [currentFormId]);

  useEffect(() => {
    const formId = localStorage.getItem("formId");
    if (formId) {
      setCurrentFormId(formId);
    }
  }, []);

  const deleteItem = async (id) => {
    try {
      const token = localStorage.getItem("token");
      await axios.delete(
        `https://formbot-server.onrender.com/deleteitem/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      await fetchData(); // Fetch updated items after deletion
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  const addSelectedItem = async (item) => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        "https://formbot-server.onrender.com/createformitem",
        {
          items: [{ type: item, name: item }],
          formId: currentFormId,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("form item created", response.data);
      await fetchData(); // Fetch updated items after addition
    } catch (error) {
      console.error("Error adding item:", error);
    }
  };

  const updateItemName = async (id, newName) => {
    try {
      const token = localStorage.getItem("token");
      await axios.put(
        `https://formbot-server.onrender.com/updateitem/${id}`,
        { name: newName },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      await fetchData(); // Fetch updated items after update
    } catch (error) {
      console.error("Error updating item name:", error);
    }
  };

  const renderSelectedItem = (item, index) => {
    const commonElements = (
      <>
        <RiDeleteBin6Line
          className="delete_icon"
          onClick={() => deleteItem(item._id)}
        />
        <h2>{item.name}</h2>
      </>
    );
    switch (item.type) {
      case "Text":
        return (
          <div className="bubble">
            {commonElements}
            <input
              type="text"
              className="editable-name"
              placeholder="Click to add the text"
              onChange={(e) => updateItemName(index, e.target.value)}
            />
            <PiChatText className="bubble_icons" />
          </div>
        );
      case "Image":
        return (
          <div className="bubble">
            {commonElements}
            <input
              type="text"
              className="editable-name"
              placeholder="Enter image name"
              onChange={(e) => updateItemName(index, e.target.value)}
            />
            <CiImageOn className="bubble_icons" />
          </div>
        );
      case "Video":
        return (
          <div className="bubble">
            {commonElements}
            <input
              type="text"
              className="editable-name"
              placeholder="Enter video name"
              onChange={(e) => updateItemName(index, e.target.value)}
            />
            <TbMovie className="bubble_icons" />
          </div>
        );
      case "GIF":
        return (
          <div className="bubble">
            {commonElements}
            <input
              type="text"
              className="editable-name"
              placeholder="Enter GIF name"
              onChange={(e) => updateItemName(index, e.target.value)}
            />
            <MdGif className="bubble_icons" />
          </div>
        );
      case "TextInput":
        return (
          <div className="input">
            {commonElements}
            <p className="para">HINT: User will input a text on his form</p>
            <CiText className="inputs_icon" />
          </div>
        );
      case "NumberInput":
        return (
          <div className="input">
            {commonElements}
            <p className="para">HINT: User will input a number on his form</p>
            <MdOutlineNumbers className="inputs_icon" />
          </div>
        );
      case "EmailInput":
        return (
          <div className="input">
            {commonElements}
            <p className="para">HINT: User will input a email on his form</p>
            <MdOutlineEmail className="inputs_icon" />
          </div>
        );
      case "PhoneInput":
        return (
          <div className="input">
            {commonElements}
            <p className="para">HINT: User will input a phone on his form</p>
            <BsTelephone className="inputs_icon" />
          </div>
        );
      case "DateInput":
        return (
          <div className="input">
            {commonElements}
            <input type="date" />
            <CiCalendarDate className="inputs_icon" />
          </div>
        );
      case "RatingInput":
        return (
          <div className="input">
            {commonElements}
            <p className="para">HINT: User will tap to rate out of 5</p>
            <FaRegStar className="inputs_icon" />
          </div>
        );
      case "ButtonInput":
        return (
          <div className="input">
            {commonElements}
            <input
              type="text"
              // value={item.name}
              placeholder="Button Input"
              onChange={(e) => updateItemName(index, e.target.value)}
            />
            <IoMdCheckboxOutline className="inputs_icon" />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="main-content">
      <Sidebar addSelectedItem={addSelectedItem} />
      <div className="start">
        <div className="start-name">
          <span className="flag-icon">
            <RiFlagFill />
          </span>{" "}
          Start
        </div>
        <div className="selected-items">
          {selectedItems.map((item, index) => (
            <div key={item._id} className="selected-item">
              {renderSelectedItem(item, index)}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MainContent;
