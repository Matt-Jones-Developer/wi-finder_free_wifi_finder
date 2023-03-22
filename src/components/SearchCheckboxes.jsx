// Possibly Marc's checkbox code. Need to double check this with Marc

import React, { useState, useEffect } from "react";
import styles from "./styles/SearchForm.module.css";
import btnStyles from "./styles/Button.module.css";
import { useNavigate } from "react-router-dom";

const searchCategories = [
  {
    value: "leisure",
    name: "Leisure, Entertainment centres and parks",
  },
  {
    value: "library",
    name: "Libraries",
  },
  {
    value: "museums",
    name: "Museum",
  },
  {
    value: "hotels",
    name: "Hotels and Hostels",
  },
  {
    value: "transport",
    name: "Transport Hubs",
  },
  {
    value: "restaurants",
    name: "Restaurants and Cafes",
  },
  {
    value: "bars",
    name: "Bars & Pubs",
  },
  {
    value: "retail",
    name: "Retail",
  },
];
const SearchCheckboxes = () => {
    // reveal form effect
    // get current state, set state
    const [categories, setCategories] = useState(new Map());
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
        const checkedCategories = Array.from(categories)
            .filter(([name, value]) => !!value)
            .map(([name]) => name);

        const searchData = {
            location: enteredLocation,
            range: enteredRange,
            categories: checkedCategories.join(","),
        };
        // clear form

        const queryString = new URLSearchParams(searchData).toString();

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
                placeholder="Enter a town or city"
              />
            </div>
            <div className={`${styles.locationInputControl} mt-2`}>
              <label>Range (1-20000m)</label>
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
          <div>
            <ul>
              {searchCategories.map(({ name, value }) => (
                <li>
                  <label>
                    <input
                      type="checkbox"
                      value={value}
                      checked={categories[value]}
                      onChange={(e) =>
                        setCategories(
                          categories.set(e.target.value, e.target.checked)
                        )
                      }
                    />
                    {name}
                  </label>
                </li>
              ))}
            </ul>
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
export default SearchCheckboxes;

