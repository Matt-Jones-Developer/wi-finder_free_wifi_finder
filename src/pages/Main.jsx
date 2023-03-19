import styles from "./styles/Main.module.css";
import Header from "../components/Header";
import MainCTA from "../components/MainCTA";
import Hero from "../components/Hero";
import PullOutTray from "../components/PullOutTray";

const Main = () => {

  return (
    <>
      <Header />
      {/* main section */}
      <main className={`${styles.main}`}>
        <div
          // main container
          className={`${styles.hero} container flex-1 text-center
          bg-tone max-w-full p-4 mt-0 mb-2 animate-fadeIn`}
        >
          {/* 2 col CTA + Hero modules container */}
          <div className="grid md:grid-cols-2 gap-2 mx-auto">
            <MainCTA />
            <Hero />
          </div>
        </div>
        {/* end main*/}
      </main>
      {/* tray section */}
      <PullOutTray />
    </>
  );
};

export default Main;
