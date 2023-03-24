import { NavLink } from 'react-router-dom';
import styles from './styles/NavTabs.module.css'

function NavTabs() {
  // Desktop LG Nav Items component
  return (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/results"
        className={({ isActive }) =>
          isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
        }
      >
        Search
      </NavLink>
      <NavLink
        to="/devteam"
        className={({ isActive }) =>
          isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
        }
      >
        Team
      </NavLink>
      <NavLink
        to="/contact"
        end
        className={({ isActive }) =>
          isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
        }
      >
        Contact
      </NavLink>
    </>
  );
}

export default NavTabs;