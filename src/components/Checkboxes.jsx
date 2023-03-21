import { useState } from "react";
import styles from "./styles/CheckBoxes.module.css";

const CheckBoxes = () => {
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
    <div className={`${styles.checkboxes} grid grid-cols-2 md:grid-cols-4 gap-2 
      justify-center p-2 text-white ml-16 mt-0`}>
      {checkBoxes.map((checkbox, index) => (
        <label
          className="block w-full flex items-center mr-8 min-w-0"
          key={index}
        >
          <input
            className="mr-4 inline-block w-4 h-4"
            type="checkbox"
            value={checkbox.value}
            checked={selectedCheckboxes.includes(checkbox.value)}
            onChange={() => checkHandler(checkbox.value)}
          />
          {checkbox.label}
        </label>
      ))}
    </div>
  );
};

export default CheckBoxes;
