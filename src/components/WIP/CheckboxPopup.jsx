import { useState } from "react";
import styles from "./styles/CheckboxPopup.module.css";


const CheckboxPopup = ({ showPopup }) => {
  const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);

  // define the checkboxes
  const checkBoxes = [
    { label: "Leisure", value: "Leisure" },
    { label: "Library", value: "Library" },
    { label: "Museums", value: "Museums" },
    { label: "Hotels", value: "Hotels" },
    { label: "Restaurants", value: "Restaurants" },
    { label: "Bars", value: "Bars" },
    { label: "Cafes", value: "Cafes" },
    { label: "Transport", value: "Transport" },
    { label: "Airports", value: "Airports" },
  ];

  // onClick handler
  const checkHandler = (value) => {
    setSelectedCheckboxes((prevSelected) => {
      if (prevSelected.includes(value)) {
        return prevSelected.filter((val) => val !== value);
      } else {
        return [...prevSelected, value];
      }
    });
  };

  return (
    <div
      className={`${styles.popup} ${showPopup ? styles.showPopup : ""}
      popup grid md:grid-cols-3 gap-1 p-8 mx-auto" 
      ${showPopup ? "" : "hidden"}`}
    >
      {checkBoxes.map((checkbox, index) => (
        <label className="block mb-4" key={index}>
          <input
            className="mr-4"
            type="checkbox"
            value={checkbox.value}
            checked={selectedCheckboxes.includes(checkbox.value)}
            onChange={() => checkHandler(checkbox.value)}
          />
          {checkbox.label}
        </label>
      ))}
      {/* <button 
      className="closePopup btn"
      type="button"
      >done</button> */}
    </div>
  );
};

export default CheckboxPopup;
