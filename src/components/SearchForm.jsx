import React, { useState, useEffect } from "react";
import styles from "./styles/SearchForm.module.css";
import btnStyles from "./styles/Button.module.css";

const SearchForm = () => {
  // reveal form effect
  // get current state, set state
  const [revealed, setRevealed] = useState(false);
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
    console.log(locationData);
    // reset value to "" using 2-way binding
    setEnteredLocation("");
    setEnteredRange("");
  };

  return (
    // Input form flex container
    <div
      className={`${styles.searchForm} container flex text-center
      p-4 justify-center bg-tone max-w-full p-4 mx-auto mt-6`}
    >
      <form
        // reveal animation
        className={`transform transition-all duration-500 ease-out 
          ${revealed ? "revealed" : "translate-y-full"}`}
        onSubmit={submitHandler}
      >
        {/* Location input */}
        <div className={`${styles.locationInputControls} -mt-2`}>
          <div className={`${styles.locationInputControl}`}>
            <label className="animate-fadeIn">Location</label>
            <input
              type="text"
              value={enteredLocation}
              onChange={locationChangeHandler}
              placeholder="Enter a town or city"
            />
          </div>
          {/* Range input */}
          <div className={`${styles.locationInputControl} mt-2`}>
            {/* edit to true range */}
            <label>Range (0.1-2000m)</label>
            <input
              type="number"
              min="1"
              step="0.1"
              value={enteredRange}
              onChange={rangeChangeHandler}
              placeholder="Choose a range in metres"
            />
          </div>
        </div>
        {/* CTA Button */}
        <div className={`${styles.locationInputAction}`}>
          <button
            className={`${btnStyles.btnAlt} 
            rounded-full py-2 px-4 mr-6`}
            type="submit"
          >
            Add Location
          </button>
          {/* refine search options btn */}
          <button
            className={`${btnStyles.btnAlt} 
            rounded-full py-2 px-4`}
            type="submit"
          >
            Refine Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchForm;
