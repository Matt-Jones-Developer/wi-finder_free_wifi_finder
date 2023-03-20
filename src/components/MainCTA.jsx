import styles from "./styles/MainCTA.module.css";
import btnStyle from "../components/styles/Button.module.css";
import wifi_icon from "../assets/png/wifi_icon_purps.png";

const MainCTA = ({ onClick }) => {
  return (
    <div className="w-full justify-center mt-8">
      <button className={`${styles.logoLg}btn_lg animate-pulse`}>
        <img
          src={wifi_icon}
          alt="wifi logo"
          width="350px"
          className="p-6 pt-8"
        />
      </button>
      <h2 className={`${styles.mainTextHide}`}>
        search any location... <br></br>...grab some free wifi
      </h2>
      <h4 className={`${styles.miniTag} mt-2 mx-auto`}>
        <em>
          scroll down to add a new location, select a search range & set
          exclusions!
        </em>
      </h4>
      {/* CTA button */}
      <button
        onClick={onClick}
        className={`${btnStyle.btnCTA} font-bold 
          rounded-full py-4 px-12 mt-6`}
      >
        SEARCH NOW
      </button>
    </div>
  );
};

export default MainCTA;
