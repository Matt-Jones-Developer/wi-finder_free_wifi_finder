import wifiIcon from "../assets/png/wifinder_icon_trs.png";
import styles from './styles/Footer.module.css';
import emailIcon from "../assets/png/email_icon.png";

const Footer = () => {
    return (

<footer className={`${styles.footer}`}>
    <div className="w-full ml-3 md:px-6 py-4">
        <div className="sm:flex sm:items-center sm:justify-between">
            <a href="https://github.com/Matt-Jones-Developer/wi-finder_free_wifi_finder" className="flex items-center mb-4 sm:mb-0">
                <img className="h-12 pr-6 "
                        src={`${wifiIcon}`}
                        alt="coder icon">
                    </img>
                <span className="self-center text-2xl font-semibold whitespace-nowrap">WiFinder.com</span>
            </a>
            <ul className="flex items-center mb-6 text-sm sm:mb-0">
                <li>
                    <a href="/" className="mr-4 hover:underline md:mr-6 ">About</a>
                </li>
                <li>
                    <a href="/" className="mr-4 hover:underline md:mr-6 ">Terms of use</a>
                </li>
                <li>
                    <a href="/" >
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
            <div classNameName={`${styles.footer} gap-8 columns-3 pl-4 pb-20 pt10`}>
                <div classNameName= "w-full">
                    <img classNameName="h-12 pr-6 inline"
                        src={`${wifiIcon}`}
                        alt="coder icon">
                    </img>
                    <div classNameName="text-2xl font-bold decoration-white">
                
                            WiFinder.com
        
                    </div>
                </div>
                <div classNameName= "w-full decoration-white">
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