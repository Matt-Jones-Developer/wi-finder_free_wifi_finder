import React, { useState } from "react";

function LightDarkToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleToggleClick = () => {
    setIsDarkMode(!isDarkMode);
  };

  // if isDarkMode is true
  document.body.classList.toggle("body-dark-mode", isDarkMode);

  return (
    <div className="container mx-auto">
      <button
        id="light-dark-btn"
        className="btn btn-dark btn-info ml-6 mt-1"
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
