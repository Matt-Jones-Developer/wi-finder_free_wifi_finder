import { useNavigate } from "react-router-dom";
import wifi_logo from "../assets/png/wifi_logo_gb.png";
import freeWifi from "../assets/png/wifi_bnw_logo.png";
import styles from "./styles/Splash.module.css";
import SearchForm from "./SearchForm";

// [TODO] quick splash loader

const Splash = () => {
  const navigate = useNavigate();
  return (
    <>
      <div
        className={`${styles.splash} container flex-1 text-center
      bg-tone max-w-full p-4`}
      >
        <h1>
          <b>WiFi</b>nder
        </h1>
        <h2>free Wi-Fi locator</h2>
        <button onClick={() => navigate("/results")} className="btn_lg">
          <img
            src={wifi_logo}
            alt="wifi logo"
            width="350px"
            className="p-6 pt-8 mx-auto justify-center"
          />
        </button>
      </div>
      {/* colour section */}
      <div className={`${styles.splashBottom}`}>
        {/* content cards */}
        <div
          className={`${styles.card} shadow-md p-4
        text-center`}
        >
          <h2 className="text-lg font-medium text-white-900">
            Grab Some free WiFi NOW
          </h2>
          <img
            className="mx-auto -mb-2"
            src={freeWifi}
            alt="wifi stamp icon"
            width="100px"
          />
        </div>
        <SearchForm />
      </div>
    </>
  );
};

export default Splash;
