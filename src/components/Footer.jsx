import wifiIcon from "../assets/png/wifinder_icon_trs_white.png";
import styles from './styles/Footer.module.css';
import emailIcon from "../assets/png/email_icon_white.png";
import "../App.css";

const Footer = () => {
    return (

<footer>
    <div class={`${styles.footer} w-full contain md:px-6 md:py-4`}>
        <div class="sm:flex sm:items-center sm:justify-between">
            <a href="https://github.com/Matt-Jones-Developer/wi-finder_free_wifi_finder" class="flex items-center mb-4 sm:mb-0">
                <img className="h-12 pr-6 "
                        src={`${wifiIcon}`}
                        alt="coder icon">
                    </img>
                <span class={`${styles.wifinderTextLock} self-center text-2xl font-semibold whitespace-nowrap`}>WiFinder.com</span>
            </a>
            <ul class={`${styles.pageLinks} flex flex-wrap items-center text-sm`}>
                <li>
                    <a href="#" class="mr-4 md:mr-6 ">About</a>
                </li>
                <li>
                    <a href="#" class="mr-4 md:mr-6 ">Terms & Conditions</a>
                </li>
                <li>
                    <a href="#" >
                        <img className="h-8 pr-6 "
                        src={`${emailIcon}`}
                        alt="email icon"></img>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</footer>
 )
}

export default Footer;