import wifiIcon from "../assets/png/wifinder_icon_trs.png";
import styles from './styles/Footer.module.css';
import emailIcon from "../assets/png/email_icon.png";

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
                <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">WiFinder.com</span>
            </a>
            <ul class="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
                <li>
                    <a href="#" class="mr-4 hover:underline md:mr-6">Privacy Policy</a>
                </li>
                <li>
                    <a href="#" class="mr-4 hover:underline md:mr-6 ">Terms & Conditions</a>
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









/*
        <div>
            <div className={`${styles.footer} gap-8 columns-3 pl-4 pb-20 pt10`}>
                <div className= "w-full">
                    <img className="h-12 pr-6 inline"
                        src={`${wifiIcon}`}
                        alt="coder icon">
                    </img>
                    <div className="text-2xl font-bold decoration-white">
                
                            WiFinder.com
        
                    </div>
                </div>
                <div className= "w-full decoration-white">
                    Terms & conditions
                    Privacy Policy
                </div>
                <div >
                    Contact Us
                </div>
            </div>
        </div> */
    )

}

export default Footer;