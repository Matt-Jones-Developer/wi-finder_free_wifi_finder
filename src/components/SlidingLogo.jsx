import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import LightDarkToggle from "./LightDarkToggle";
import wifiIcon from "../assets/png/wifinder_icon_trs.png";
import tw from "tailwind-styled-components";

const SlideOutDiv = tw.div`
  absolute
  top-0
  left-0
  w-full
  h-full
  transition-transform
  duration-500
  transform
    translate-x-full
`;

function SlidingLogo() {
  // set shelf state
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Set isVisible to true after a short delay to trigger the animation
    const timeout = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div>
      {/* slide out nav brand bar/logo */}
      <SlideOutDiv style={{ transform: isVisible ? "translateX(0)" : "" }}>
        <div className="flex lg:flex-1 items-center mt-2">
          {/* Nav Icon btn and name link */}
          <Link to="/" className="flex items-center -m-2.5 p-2.5">
            <img
              className="h-12 pl-4 pr-6"
              src={`${wifiIcon}`}
              alt="coder icon"
            />
          </Link>
          {/* wifinder.com */}
          <span className="text-2xl font-bold text-accent">
            <a
              className="nameTag"
              href="https://github.com/Matt-Jones-Developer/wi-finder_free_wifi_finder"
            >
              WiFinder.com
            </a>
          </span>
          {/* light/dark mode button */}
          <LightDarkToggle />
        </div>
      </SlideOutDiv>
    </div>
  );
}

export default SlidingLogo;
