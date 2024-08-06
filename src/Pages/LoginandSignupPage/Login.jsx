import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import elp1 from "./assets/Ellipse 1.png";
import elp2 from "./assets/Ellipse 2.png";
import grp1 from "./assets/Group 2.png";
import { IoMdArrowRoundBack } from "react-icons/io";

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError({});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const response = await fetch(
          "https://formbot-server.onrender.com/login",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          }
        );
        const data = await response.json();
        // console.log(data);
        if (response.ok) {
          localStorage.setItem("token", data.token);
          localStorage.setItem("userId", data.userId);
          navigate("/dashboard");
        } else {
          setError({ form: data.message });
        }
      } catch (error) {
        console.error("Error during fetch:", error);
        setError({ form: "An error occurred. Please try again." });
      }
    }
  };

  const handleclicktosignup = () => {
    navigate("/signup");
  };

  const handleclicktolanding = () => {
    navigate("/client-bot");
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.email) {
      newErrors.email = "Email is required *";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.password) {
      newErrors.password = "Password is required *";
    }
    setError(newErrors);
    return Object.keys(newErrors).length === 0;
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
          Email <br />
          <input
            className="login_input"
            type="email"
            name="email"
            placeholder="Enter Your Email"
            value={formData.email}
            onChange={handleChange}
          />
          {error.email && <p className="error">{error.email}</p>}
          <br />
          Password <br />
          <input
            className="login_input"
            type="password"
            name="password"
            placeholder="**********"
            value={formData.password}
            onChange={handleChange}
          />
          {error.password && <p className="error">{error.password}</p>}
          <br />
          <button className="login_button" type="submit">
            Log In
          </button>
          {error.form && <p className="error">{error.form}</p>}
          <p style={{ textAlign: "center" }}>
            Don't have an account?{" "}
            <button
              type="button"
              onClick={handleclicktosignup}
              style={{
                background: "transparent",
                color: "blue",
                margin: "0px",
                padding: "0px",
              }}
            >
              Register now
            </button>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
