import React, { useState } from "react";
import styles from "./styles/LightDarkMode.module.css";

function LightDarkToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleToggleClick = () => {
    setIsDarkMode(!isDarkMode);
  };

  // if isDarkMode is true
  document.body.classList.toggle("body-dark-mode", isDarkMode);

  return (
    <div className={`${styles.toggleArea} flex-1 -ml-2`}>
      <button
        id="light-dark-btn"
        className="btn btn-dark btn-info ml-2 mt-1"
        onClick={handleToggleClick}
      >
        <i
          className={`fas fa-toggle-${isDarkMode ? "on" : "off"} fa-2x`}
        ></i>
      </button>
    </div>
  );
}

export default LightDarkToggle;
