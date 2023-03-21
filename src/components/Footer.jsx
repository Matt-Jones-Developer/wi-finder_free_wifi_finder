import wifiIcon from "../assets/png/wifinder_icon_trs.png";
import styles from "../components/styles/Footer.module.css"
import emailIcon from "../assets/png/email_icon.png";
import { NavLink } from 'react-router-dom';
import "../App.css";

const Footer = () => {
    return (

  
<footer>
    <div class="w-full contain md:px-6 md:py-4">
        <div class="sm:flex sm:items-center sm:justify-between">
            <a href="https://github.com/Matt-Jones-Developer/wi-finder_free_wifi_finder" class="flex items-center mb-4 sm:mb-0">
                <img className="h-12 pr-6 "
                        src={`${wifiIcon}`}
                        alt="coder icon">
                    </img>
                <span class="self-center text-2xl font-semibold whitespace-nowrap">WiFinder.com</span>
            </a>
            <ul class="flex flex-wrap items-center text-sm">
                    <li className="pr-6" >
                            <NavLink
                                to="/about"
                                className={({ isActive }) =>
                                    isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
                                }
                            >
                                About
                            </NavLink>

                        </li>
                        <li className ="pr-6">
                            <NavLink
                                to="/termsofuse"
                                className={({ isActive }) =>
                                    isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
                                }
                            >
                                Terms of Use
                            </NavLink>

                        </li>
                        <li>
                        <NavLink
                                to="/contact"
                                className={({ isActive }) =>
                                    isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
                                }
                                >
                                <img className="h-8 pr-6 "
                                    src={`${emailIcon}`}
                                    alt="email icon"></img>
                            </NavLink>

                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer;