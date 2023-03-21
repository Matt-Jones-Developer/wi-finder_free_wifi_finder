import { useState, useEffect } from "react";
import SearchForm from "./SearchForm";
import styles from "./styles/PullOutTray.module.css";
import freeWifi from "../assets/png/wifi_bnw_logo.png";

const PullOutTray = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Set isVisible to true delay b4 animation trigger
    setIsVisible(true);
    const timeout = setTimeout(() => setIsVisible(false), 500);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {/* slide out main bottom */}
      <section
        className={`${styles.bottom} ${
          isVisible
            ? "transform ease-out duration-500 translate-y-0 -translate-y-full"
            : ""
        }`}
      >
        {/* colour section */}
        <div className={`${styles.bottom} pt-2 items-center justify-center`}>
          {/* content card */}
          <div
            className={`${styles.card} shadow-md p-4 pb-2 flex justify-center
            text-center mx-auto`}
          >
            <div className={`${styles.grabWifiInline} flex items-center`}>
              <h4
                className={`${styles.grabText} text-sm font-medium text-white 
              animate-fadeIn delay-500`}
              >
                Grab Some
              </h4>
              <img
                className="mx-auto mb-2"
                src={freeWifi}
                alt="wifi stamp icon"
                width="100px"
              />
              <h4
                className={`${styles.grabText} 
                text-sm font-medium text-white animate-fadeIn delay-500`}
              >
                right NOW!
              </h4>
            </div>
          </div>
          {/* Input Form */}
          <SearchForm />
        </div>
      </section>
    </>
  );
};

export default PullOutTray;
