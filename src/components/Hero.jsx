import heroApp from "../assets/png/iso_city.png";
import pinIcon from "../assets/png/pin.png";
import styles from "./styles/Hero.module.css";

const Hero = () => {
  return (
    <>
      {/* hero image */}
      <div className={`${styles.heroImg} w-full -mt-4`}>
        <img width="680px" src={heroApp} alt="isometric city vector art" />
        <div className={`${styles.heroPin}`}>
          <img
            className={`${styles.pin} animate-floating`}
            src={pinIcon}
            width="30px"
            alt="search pin"
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
