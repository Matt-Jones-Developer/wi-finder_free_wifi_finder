import { NavLink } from 'react-router-dom';
import styles from './styles/NavTabs.module.css'

function NavTabs() {
  // [TODO] get these active and working - keep the 'selected/active' colour CSS
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
        to="/devpage"
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