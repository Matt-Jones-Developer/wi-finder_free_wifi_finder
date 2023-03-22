import { useEffect, useState } from "react";
import searchCategories from "../constants/searchCategories";
import styles from "./styles/CheckBoxes.module.css";

const CheckBoxes = ({ values = [], onChange }) => {
  const [selectedCheckboxes, setSelectedCheckboxes] = useState(values);
  // define the checkboxes
  const checkBoxes = searchCategories.map((s) => ({
    label: s.name,
    value: s.value,
  }));

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
  useEffect(() => {
    onChange(selectedCheckboxes);
  }, [selectedCheckboxes, onChange]);
  return (
    <div
      className={`${styles.checkboxes} grid grid-cols-2 md:grid-cols-4 gap-2 
      justify-center p-2 text-white ml-16 mt-0`}
    >
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
