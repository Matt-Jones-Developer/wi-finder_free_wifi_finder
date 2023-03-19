// required imports
import { useState, Link} from "react";
import { useLocation } from "react-router-dom";

// * pages var? Not sure if that's what you wanted
const pages = {
  main: '../pages/Main.jsx',
  results: '../pages/Results.jsx',
  team: '../pages/DevTeam.jsx',
  contact: '../pages/Contact.jsx'
}

// I made it a const function since it was complaining
const NavMobile = () => {
                          // useState
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  // * undefined 'pages'
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
        {menus.map((menu) => (
          <Link onClick={() => setIsOpen(!isOpen)} to={menu.link}>
            {menu.name}
          </Link>
        ))}
      </nav>
    </>
  );
};

// standard export
export default NavMobile;
