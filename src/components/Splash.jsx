import wifi_logo from "../assets/png/wifi_logo_gb.png";
import freeWifi from "../assets/png/wifi_bnw_logo.png";
import styles from "./styles/Splash.module.css";

const Splash = () => {
  return (
    <>
      <div
        className={`${styles.splash} container flex-1 text-center
      p-4 bg-tone max-w-full p-4`}
      >
        <h1>
          <b>WiFi</b>nder
        </h1>
        <h2>free Wi-Fi locator</h2>
        <button className="btn_lg">
          <img
            src={wifi_logo}
            alt="wifi logo"
            className="p-6 pt-8 mx-auto justify-center"
          />
        </button>
      </div>
      {/* colour section */}
      <div className={`${styles.splashBottom}`}>
        {/* content cards */}
        <div
          className={`${styles.card} shadow-md p-4
        text-center mb-4`}
        >
          <h2 className="text-lg font-medium mb-2 text-white-900 mb-4">
            Grab Some free WiFi NOW
          </h2>
          <p className="text-gray-500 mb-4">We can search for any location.</p>
          <button
            className={`${styles.btn} bg-purps text-white rounded-full
           py-2 px-4 hover:bg-blue-600`}
          >
            Let's GO
          </button>
        </div>
      </div>
    </>
  );
};

export default Splash;
