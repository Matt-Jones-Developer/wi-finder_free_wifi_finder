import React, { useState, useEffect } from "react";
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

  // handle navbar reveal scroll
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setHasScrolled(true);
        console.log("has scrolled old value!:", hasScrolled);
      } else {
        setHasScrolled(false);
        console.log("has scrolled new value!:", hasScrolled);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [hasScrolled]);

  return (
    <>
      {/* build the NavBar */}
      <nav
        className={`object-navbar p-5 flex items-center sticky top-0 w-full z-40 mx-auto
        transition-colors duration-300
        ${!hasScrolled ? "bg-transparent" : "bg-white"}
        `}
      >
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
        <div className="z-10 hidden lg:flex lg:gap-x-12 nav-items">
          {/* import NavTabs component */}
          <NavTabs />
        </div>
      </nav>
      {/* mobile toggle nav links [TODO] */}
    </>
  );
};

export default NavBar;
