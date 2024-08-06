import React, { useState } from "react";
import elp1 from "./assets/Ellipse 1.png";
import elp2 from "./assets/Ellipse 2.png";
import grp1 from "./assets/Group 2.png";
import { useNavigate } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import axios from "axios";

function Signup() {
  const navigate = useNavigate();
  const handleclicktologin = () => {
    navigate("/login");
  };
  const handleclicktolanding = () => {
    navigate("/client-bot");
  };
  const [FormData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");
  const handleChange = (e) => {
    setFormData({ ...FormData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };
  const validateForm = () => {
    let newErrors = {};
    if (!FormData.username) {
      newErrors.name = "Username is required *";
    }
    if (!FormData.email) {
      newErrors.email = "Email is required *";
    } else if (!/\S+@\S+\.\S+/.test(FormData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!FormData.password) {
      newErrors.password = "Password is required *";
    }
    if (FormData.password !== FormData.confirmPassword) {
      newErrors.confirmPassword = "Password do not match";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const { username, email, password, confirmPassword } = FormData;
        const response = await axios.post(
          "https://formbot-server.onrender.com/register",
          { username, email, password, confirmPassword },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        console.log(response.data);
        setFormData({
          username: "",
          email: "",
          password: "",
          confirmPassword: "",
        });
        setMessage("Registration Successful");
        setTimeout(() => {
          navigate("/login");
        }, 2000);
        setErrors({});
      } catch (err) {
        console.log("signup error", err);
        setMessage(
          err.response?.data?.message || "an error occured during signup"
        );
      }
    }
  };

  return (
    <div className="login_container">
      <div className="login_form_container">
        <IoMdArrowRoundBack
          className="back_icon"
          onClick={handleclicktolanding}
        />
        <img src={elp1} alt="" className="all_shapes circle1" />
        <img src={elp2} alt="" className="all_shapes circle2" />
        <img src={grp1} alt="" className="all_shapes tri" />
        <form className="login_form" onSubmit={handleSubmit}>
          Username <br />
          <input
            className="login_input"
            type="text"
            name="username"
            placeholder="Enter Your Username"
            value={FormData.username}
            onChange={handleChange}
          ></input>
          {errors.name && <p className="error">{errors.name}</p>}
          Email <br />
          <input
            className="login_input"
            type="text"
            name="email"
            placeholder="Enter Your Email"
            value={FormData.email}
            onChange={handleChange}
          ></input>
          {errors.email && <p className="error">{errors.email}</p>}
          Password <br />
          <input
            className="login_input"
            type="password"
            name="password"
            placeholder="**********"
            value={FormData.password}
            onChange={handleChange}
          ></input>
          {errors.password && <p className="error">{errors.password}</p>}
          Confirm Password <br />
          <input
            className="login_input"
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={FormData.confirmPassword}
            onChange={handleChange}
          ></input>
          {errors.confirmPassword && (
            <p className="error">{errors.confirmPassword}</p>
          )}
          <button className="login_button">Sign In</button>
          <p style={{ textAlign: "center" }}>
            Already have an Account?{" "}
            <button
              onClick={handleclicktologin}
              style={{
                background: "transparent",
                color: "blue",
                margin: "0px",
                padding: "0px",
              }}
            >
              Login
            </button>
            {message && <p className="success-message">{message}</p>}
          </p>
        </form>
      </div>
    </div>
  );
}

export default Signup;
