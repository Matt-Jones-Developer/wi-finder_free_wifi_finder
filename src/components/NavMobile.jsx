// required imports
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
// should need to import this to style the mobileNav?
// import mobileNavStyles from "./styles/navBar.scss"

// Define pages as an array of objects with name and link properties
const pages = [
  { name: "Main", link: "/" },
  { name: "Results", link: "/results" },
  { name: "Dev Team", link: "/team" },
  { name: "Contact", link: "/contact" },
];

const NavMobile = () => {
  // useState
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const menus = pages.filter((page) => {
    return page.link !== location.pathname;
  });

  return (
    <>
      <input
        type="checkbox"
        checked={isOpen}
        className="hide"
        id="menu-trigger"
        role="button"
        title="menu"
        onChange={() => setIsOpen(!isOpen)} // use onChange instead of onClick for input element
      />
      <label
        htmlFor="menu-trigger"
        aria-hidden="true"
        title="menu"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="burger">
          <span className="bar">
            <span className="visually-hidden">Menu</span>
          </span>
        </span>
      </label>
      <nav id="menu">
        {menus.map((menu, index) => (
          <Link key={index} onClick={() => setIsOpen(!isOpen)} to={menu.link}>
            {menu.name}
          </Link>
        ))}
      </nav>
    </>
  );
};

// standard export
export default NavMobile;
