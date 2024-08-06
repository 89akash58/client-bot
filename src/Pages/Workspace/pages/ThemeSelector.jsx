import React, { useState } from "react";
// import "./ThemeSelector.css";
import Navigation from "./Navigation";
import img1 from "../assets/image 1.png";
import img2 from "../assets/image 2.png";
import img3 from "../assets/Group 17.png";
import styles from "./Theme.module.css";

const ThemeSelector = () => {
  const [theme, setTheme] = useState("light");
  const [selectedTheme, setSelectedTheme] = useState("light");

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
    setSelectedTheme(newTheme);
  };

  return (
    <div className={`${styles.container} ${styles[theme]}`}>
      <Navigation />
      <div className={`${styles.main} flex`}>
        <div className={styles.themeContainer}>
          <div className={styles.heading}>
            <h1 className="sans-font text-white">Customize the theme</h1>
          </div>
          <div className={styles.themeOption}>
            <img
              src={img1}
              alt="Light Theme"
              className={`${selectedTheme === "light" ? styles.border : ""}`}
              onClick={() => handleThemeChange("light")}
            />
          </div>
          <div className={styles.themeOption}>
            <img
              src={img2}
              alt="Dark Theme"
              className={`${selectedTheme === "dark" ? styles.border : ""}`}
              onClick={() => handleThemeChange("dark")}
            />
          </div>
          <div className={styles.themeOption}>
            <img
              src={img3}
              alt="Blue Theme"
              className={` ${selectedTheme === "blue" ? styles.border : ""}`}
              onClick={() => handleThemeChange("blue")}
            />
          </div>
        </div>

        <div className={styles.chatBg}>
          <button className={`${styles.leftBtn} ${styles.btn}`}>hello</button>
          <div className={styles.dot}></div>
          <button className={`${styles.rightBtn} ${styles.btn}`}>hi</button>
        </div>
      </div>
    </div>
  );
};

export default ThemeSelector;
