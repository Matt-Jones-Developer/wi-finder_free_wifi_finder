import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./styles/Main.module.css";
import MainCTA from "../components/MainCTA";
import Hero from "../components/Hero";
import PullOutTray from "../components/PullOutTray";

const Main = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);
  const navigate = useNavigate();
  const handleSearchClick = () => navigate("/results");
  return (
    <>
      {/* <Header /> */}
      {/* main section */}
      <main className={`${styles.main}`}>
        <div
          // main container
          className={`${styles.hero} container flex-1 text-center
          bg-tone max-w-full p-4 mt-0 mb-2 animate-fadeIn`}
        >
          {/* 2 col CTA + Hero modules container */}
          <div className="grid md:grid-cols-2 gap-2 mx-auto">
            <MainCTA onClick={handleSearchClick} />
            <Hero />
          </div>
        </div>
        {/* end main*/}
      </main>
      {/* tray section */}
      <PullOutTray />
      {/* <Footer /> */}
    </>
  );
};

export default Main;
