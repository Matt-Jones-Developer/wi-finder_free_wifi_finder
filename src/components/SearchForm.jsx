import React, { useState, useEffect } from "react";
import styles from "./styles/SearchForm.module.css";
import btnStyles from "./styles/Button.module.css";
import { useNavigate } from "react-router-dom";

const SearchForm = () => {
  // reveal form effect
  // get current state, set state
  const [revealed, setRevealed] = useState(false);
  const navigate = useNavigate();
  // handle y scroll
  useEffect(() => {
    function handleScroll() {
      // if user scrolls (reveal)
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        setRevealed(true);
      } else {
        setRevealed(false);
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // current states and setStates
  const [enteredLocation, setEnteredLocation] = useState("");
  const [enteredRange, setEnteredRange] = useState("");
  // on user input
  const locationChangeHandler = (event) => {
    // save the value
    setEnteredLocation(event.target.value);
  };

  const rangeChangeHandler = (event) => {
    setEnteredRange(event.target.value);
  };
  // button submit handling
  const submitHandler = (event) => {
    event.preventDefault();
    // store object
    const locationData = {
      location: enteredLocation,
      range: enteredRange,
    };
    // clear form
    // const checkedCategories = Array.from(categories)
    //   .filter(([name, value]) => !!value)
    //   .map(([name]) => name);

    const queryString = new URLSearchParams(locationData).toString();

    navigate(`/results?${queryString}`);
  };

  return (
    <div
      className={`${styles.formInput} container flex text-center
      p-4 justify-center bg-tone max-w-full p-4 mx-auto mt-6`}
    >
      <form
        className={`transform transition-all duration-500 ease-out 
          ${revealed ? "revealed" : "translate-y-full"}`}
        onSubmit={submitHandler}
      >
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
            type="submit"
          >
            Add Location
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchForm;
