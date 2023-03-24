import styles from './styles/Header.module.css'

const Header = () => {
  return (
    <div
      // header container
      className={`${styles.header} container flex-1 text-center
          mt-10 bg-tone max-w-full animate-fadeIn`}
    >
      <h1>
        <b>WiFi</b>nder
      </h1>
      <h2 className="-mt-10">free Wi-Fi locator</h2>
      <h4 className={`${styles.tagLine}`}>
        your ultimate "get online wherever" app
        <i className="fa-solid fa-location-dot ml-2"></i>
      </h4>
    </div>
  );
};

export default Header;
