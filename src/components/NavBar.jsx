import React, { useState } from "react";
import NavTabs from "./NavTabs";
import SlidingLogo from "./SlidingLogo";
// import styles from "./styles/NavBar.module.css";
import "../App.css";

const NavBar = () => {
  // FOR NEW NAVBAR TOGGLER [TODO]
  // set toggle init state
  const [toggle, setToggle] = useState(false);
  // handle toggles function
  const handleToggle = () => setToggle(!toggle);
  // handle side toggle navs onClick
  // const handleLinkClick = () => {
  //   setToggle(false);
  // };

  return (
    <>
      {/* build the NavBar */}
      <nav className="p-4 flex items-center fixed top-0 w-full z-40 mx-auto">
        <div className="flex lg:flex-1 items-center">
          <SlidingLogo />
        </div>
        {/* mobile nav toggle nav */}
        <div className="flex ml-auto pr-4 lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center rounded-md p-2.5 text-dark"
            onClick={handleToggle}
          >
            {/* hamburger divs */}
            <div className="space-y-2">
              <div className="w-10 h-1.5 bg-dark"></div>
              <div className="w-10 h-1.5 bg-dark"></div>
              <div className="w-10 h-1.5 bg-dark"></div>
            </div>
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12 nav-items">
          {/* import NavTabs component */}
          <NavTabs />
        </div>
      </nav>
      {/* mobile toggle nav links [TODO] */}
    </>
  );
};

export default NavBar;
