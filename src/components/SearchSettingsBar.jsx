import { useState } from "react";
import styles from "./styles/SearchSettingsBar.module.css";
import "./styles/SearchSettingsBar.module.css";
import btnStyles from "./styles/Button.module.css";
import CheckBoxes from "./CheckBoxes";

const SearchSettingsBar = () => {
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
    <>
      <section className={`${styles.searchStrip} flex z-50`}>
        {/* the div that needs to stop flex and go BLOCK @1024px */}
        <div className={`${styles.splitRow} p-4 mt-8 justify-center items-center w-full bg-purps pt-2 pb-6 mx-auto`}>
          <form className={`${styles.searchStripForm} flex justify-center items-center bg-tone mx-auto mt-6 ml-8 animate-fadeIn`}>
            <div className={`${styles.searchDiv} flex flex-col lg:flex-row mr-8 justify-center items-center mx-auto`}>
              {/* search icon */}
              <i 
              className={`${styles.icon} 
              fa-solid fa-magnifying-glass fa-3x mr-4`}
              title="select a search location!"
              >
              </i>
              {/* input fields */}
              <div
                className={`${styles.locationInputControl} md:mr-16 md:mb-4`}
              >
                <label className="animate-fadeIn">Location</label>
                <input
                  type="text"
                  value={enteredLocation}
                  onChange={locationChangeHandler}
                  placeholder="Enter a town or city"
                />
              </div>
              <div
                className={`${styles.locationInputControl} md:mb-4`}
              >
                <label className="animate-fadeIn">Range (0.1-2000m)</label>
                <input
                  type="number"
                  min="1"
                  step="0.1"
                  value={enteredRange}
                  onChange={rangeChangeHandler}
                  placeholder="Choose a range in metres"
                />
              </div>
              {/* checkboxes forced style to attempt grid-area fix?? */}
              <CheckBoxes className={`${styles.CheckBoxes}`}/>
              {/* button */}
              <div
                className={`${styles.locationInputAction} ml-16 mt-4 md:mt-0`}
              >
                <button
                  className={`${btnStyles.btnAlt} rounded-full py-3 px-12
                  hover:animate-floating`}
                  type="submit"
                  onClick={submitHandler}
                >
                  SEARCH
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default SearchSettingsBar;