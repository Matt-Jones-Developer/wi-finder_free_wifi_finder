import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import NavTabs from "./NavTabs";
import SlidingLogo from "./SlidingLogo";
import styles from "./styles/NavBar.module.css";
import "../App.css";
// import NavMobile from "./NavMobile";

const menuItems = {
  home: {
    icon: (
      <i className="fa-solid fa-house sm ml-5" 
      style={{ color: "#ffffff" }}></i>
    ),
    link: "/",
    name: "Home",
  },
  search: {
    icon: (
      <i className="fa-solid fa-wifi sm ml-5" 
      style={{ color: "#ffffff" }}></i>
    ),
    link: "/results",
    name: "Search",
  },
  team: {
    icon: (
      <i
        className="fa-solid fa-people-group sm ml-5"
        style={{ color: "#ffffff" }}
      ></i>
    ),
    link: "/devteam",
    name: "Team",
  },
  contact: {
    icon: (
      <i
        className="fa-solid fa-envelope sm ml-5"
        style={{ color: "#ffffff" }}
      ></i>
    ),
    link: "/contact",
    name: "Contact",
  },
};

const NavBar = () => {
  // set toggle init state
  const [toggle, setToggle] = useState(false);
  // animate state
  const [animate, setAnimate] = useState(false);
  // handle toggles function
  const handleToggle = () => {
    setToggle(!toggle);
    setAnimate(!animate);
  };

  // define location of nav pages - for an object array
  const location = useLocation();
  const mobileMenu = Object.values(menuItems).filter((page) => {
    return page.link !== location.pathname;
  });

  // handle navbar reveal scroll
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
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
        className={`object-navbar p-5 flex items-center fixed top-0 w-full z-50 mx-auto
        transition-colors duration-300
        ${!hasScrolled ? "bg-transparent" : "bg-white"}
        `}
      >
        <div className="flex lg:flex-1 items-center">
          <SlidingLogo />
        </div>
        {/* mobile nav toggle nav */}
        <div className="mobile-nav flex ml-auto lg:hidden -mt-0.5">
          <button
            type="button"
            className="burger -m-2.5 inline-flex items-center rounded-md p-2.5"
            onClick={handleToggle}
          >
            {/* hamburger divs */}
            <div className={`burgerBars space-y-1`}>
              <div className="bBar w-10 h-1.5 mb-1 bg-bg-tone rounded-md"></div>
              <div className="bBar w-10 h-1.5 mb-1 bg-bg-tone rounded-md"></div>
              <div className="bBar w-10 h-1.5 mb-1 bg-bg-tone rounded-md"></div>
            </div>
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12 nav-items z-50">
          {/* import NavTabs component */}
          <NavTabs />
        </div>
      </nav>
      {/* mobile toggle nav links */}
      {/* <NavMobile /> */}
      {toggle && (
        <>
          <div
            className={`fixed top-0 left-0 w-full h-full bg-purps opacity-90 z-40 ${
              animate ? "animate-slideDown" : ""
            }`}
            onClick={handleToggle}
          />

          <nav
            id="menu"
            className={`${styles.menu} fixed top-20 left-2.5 w-full h-full 
            flex flex-col z-40 animate-slideInLeft
            ${toggle ? styles.open : ""}`}
            style={{
              transform: toggle ? "translateX(0%)" : "translateX(-100%)",
            }}
          >
            {/* map the object items */}
            {mobileMenu.map((menu, index) => (
              <div className="flex items-center" key={index}>
                {/* {icons[index]} */}
                {menu.icon}
                <Link
                  key={index}
                  onClick={handleToggle}
                  to={menu.link}
                  className="
                text-white text-xl py-4 px-6 
                hover:text-bg-tone"
                >
                  {menu.name}
                </Link>
              </div>
            ))}
          </nav>
        </>
      )}
    </>
  );
};

export default NavBar;
