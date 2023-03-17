import { useEffect, useState } from "react";

import { Link, useNavigate } from "react-router-dom";

import styles from "./styles/Main.module.css";
import Splash from "../components/Splash.jsx";

const Main = () => {
  // always auto-scroll
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <section className={`${styles.main}`}>
      <Splash />
    </section>
  );
};

export default Main;
