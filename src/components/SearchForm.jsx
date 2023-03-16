import React, { useState } from "react";
import styles from "./styles/SearchForm.module.css";
import btnStyles from "./styles/Button.module.css"

const SearchForm = () => {

  // current states and setStates
  const [enteredLocation, setEnteredLocation] = useState("");
  const [enteredRange, setEnteredRange] = useState("");


  const locationChangeHandler = (event) => {
    // save the value
    setEnteredLocation(event.target.value);
  };

  const rangeChangeHandler = (event) => {
    setEnteredRange(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const locationData = {
      location: enteredLocation,
      range: enteredRange
    };

    console.log(locationData);
    // reset value to "" using 2-way binding
    setEnteredLocation("");
    setEnteredRange("");
  };

  return (
    <div
      className={`${styles.formInput} container flex text-center
      p-4 justify-center bg-tone max-w-full p-4 mx-auto`}
    >
      <form onSubmit={submitHandler}>
        <div className={`${styles.locationInputControls}`}>
          <div className={`${styles.locationInputControl}`}>
            <label>Location</label>
            <input
              type="text"
              value={enteredLocation}
              onChange={locationChangeHandler}
            />
          </div>
          <div className={`${styles.locationInputControl}`}>
            <label>Range</label>
            <input
              type="number"
              min="0.01"
              step="0.01"
              value={enteredRange}
              onChange={rangeChangeHandler}
            />
          </div>
        </div>
        <div className={`${styles.locationInputAction}`}>
          <button 
          className={`${btnStyles.btn} bg-purps text-white 
          rounded-full py-2 px-4`}
          type="submit">Add Location</button>
        </div>
      </form>
    </div>
  );
};

export default SearchForm;
