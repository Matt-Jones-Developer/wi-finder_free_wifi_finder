import { useEffect, useState } from "react";

import { Link, useNavigate } from "react-router-dom";

import styles from "./styles/Main.module.css";
import Splash from "../components/Splash.jsx";

const Main = () => {
  // always auto-scroll
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <section className={`${styles.main}`}>
      <Splash />
    </section>
  );
};

export default Main;

// how i thought to link with checkboxes

// const navigate = useNavigate();
// const [place, setPlace] = useState("");
// const [categories, setCategories] = useState(new Map());

// function handleOnChange(e) {
//   setCategories(categories.set(e.target.value, e.target.checked));
// }

// function handleSearch() {
//   const checkedCategories = Array.from(categories)
//     .filter(([name, value]) => !!value)
//     .map(([name]) => name);

//   const queryString = new URLSearchParams({
//     location: place,
//     categories: checkedCategories.join(","),
//   }).toString();

//   navigate(`/results?${queryString}`);
// }

// const searchCategories = [
//   {
//     name: "Library",
//     value: "library",
//   },
//   {
//     name: "Airports",
//     value: "airport",
//   },
// ];
{
  /* <div>
        <Link to="/results">Near me</Link>
      </div>

      <div>
        <input
          style={{ color: "black" }}
          type="text"
          placeholder="Place here"
          value={place}
          onChange={(e) => setPlace(e.target.value)}
        />
        <button onClick={handleSearch}>Search here</button>

        <ul>
          {searchCategories.map(({ name, value }) => (
            <>
              <input
                type="checkbox"
                value={value}
                checked={categories[value]}
                onChange={handleOnChange}
              />
              {name}
            </>
          ))}
        </ul>
      </div> */
}
