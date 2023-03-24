import wifiIcon from "../assets/png/wifinder_icon_trs.png";
import styles from './styles/Footer.module.css';
import emailIcon from "../assets/png/email_icon.png";
import termsofuse from "../assets/pdf/wifinder_terms_of_use.pdf";
import about from "../assets/pdf/wifinder_about.pdf";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className={`${styles.footer}`}>
      <div className="w-full ml-3 md:px-6 py-4 -mt-2">
        <div className={`${styles.footerContainer} pt-3 sm:flex sm:items-center sm:justify-between`}>
          <a
            href="https://github.com/Matt-Jones-Developer/wi-finder_free_wifi_finder"
            className="flex items-center mb-4 sm:mb-0"
          >
            <img
              className={`${styles.wifiLogo} h-12 pr-6`}
              src={`${wifiIcon}`}
              alt="coder icon"
            ></img>
            <span className={`${styles.textLock} self-center text-2xl font-semibold whitespace-nowrap`}>
              WiFinder.com
            </span>
          </a>
          <ul className="flex items-center mb-6 text-sm sm:mb-0">
            <li>
              <a href={`${about}`}
                target="_blank"
                className="mr-4 hover:underline md:mr-6 "
                rel="noreferrer"
              >
                About
              </a>
            </li>
            <li>
              <a
                href={`${termsofuse}`}
                target="_blank"
                className="mr-4 hover:underline md:mr-6 "
                rel="noreferrer"
              >
                Terms of use
              </a>
            </li>
            <li>
              <NavLink to="/contact">
                <img
                  className="h-8 pr-6 mt-4"
                  src={`${emailIcon}`}
                  alt="email icon"
                ></img>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </footer>

  );

}

export default Footer;