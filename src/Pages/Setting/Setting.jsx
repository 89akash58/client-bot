import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoIosLogOut } from "react-icons/io";
import axios from "axios";
import { CiLock } from "react-icons/ci";
import { MdOutlineMail, MdOutlinePersonOutline } from "react-icons/md";
import "./Setting.css";

function Setting() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    oldPassword: "",
    newPassword: "",
  });
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validateForm = () => {
    let valid = true;
    let errors = {};

    if (!formData.username.trim()) {
      errors.username = "Username is required";
      valid = false;
    }

    if (!formData.email.trim()) {
      errors.email = "Email is required";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email address is invalid";
      valid = false;
    }

    if (formData.oldPassword && !formData.newPassword) {
      errors.newPassword = "New password is required";
      valid = false;
    }

    if (formData.newPassword && !formData.oldPassword) {
      errors.oldPassword = "Old password is required";
      valid = false;
    }

    setErrors(errors);
    return valid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      const token = localStorage.getItem("token");
      const userId = localStorage.getItem("userId"); // Make sure to save userId in localStorage on login

      const response = await axios.patch(
        `https://formbot-server.onrender.com/updateuser/${userId}`,
        {
          username: formData.username,
          email: formData.email,
          oldpassword: formData.oldPassword,
          newpassword: formData.newPassword,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      setMessage(response.data.message);
      // Clear the form
      setFormData({
        username: "",
        email: "",
        oldPassword: "",
        newPassword: "",
      });
    } catch (error) {
      console.error("Error updating user:", error);
      setMessage(error.response ? error.response.data.message : "Server error");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    sessionStorage.clear();
    navigate("/login");
  };

  return (
    <div className="login_container">
      <div className="login_form_container">
        <form className="login_form" onSubmit={handleSubmit}>
          <h1 style={{ textAlign: "center", marginBottom: "20px" }}>
            Settings
          </h1>
          <div className="setting_input">
            <MdOutlinePersonOutline className="setting_icons" />
            <input
              className="login_input"
              type="text"
              name="username"
              placeholder="Name"
              value={formData.username}
              onChange={handleChange}
            />
          </div>
          {errors.username && <p className="error">{errors.username}</p>}
          <div className="setting_input">
            <MdOutlineMail className="setting_icons" />
            <input
              className="login_input"
              type="text"
              name="email"
              placeholder="Update Email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          {errors.email && <p className="error">{errors.email}</p>}
          <div className="setting_input">
            <CiLock className="setting_icons" />
            <input
              className="login_input"
              type="password"
              name="oldPassword"
              placeholder="Old password"
              value={formData.oldPassword}
              onChange={handleChange}
            />
          </div>
          {errors.oldPassword && <p className="error">{errors.oldPassword}</p>}
          <div className="setting_input">
            <CiLock className="setting_icons" />
            <input
              className="login_input"
              type="password"
              name="newPassword"
              placeholder="New Password"
              value={formData.newPassword}
              onChange={handleChange}
            />
          </div>
          {errors.newPassword && <p className="error">{errors.newPassword}</p>}
          <button className="login_button" type="submit">
            Update
          </button>
          {message && <p className="message">{message}</p>}
        </form>
      </div>
      <div className="logout">
        <button className="logout_button" onClick={handleLogout}>
          <IoIosLogOut
            style={{
              marginRight: "5px",
              fontSize: "20px",
            }}
          />
          Log Out
        </button>
      </div>
    </div>
  );
}

export default Setting;
