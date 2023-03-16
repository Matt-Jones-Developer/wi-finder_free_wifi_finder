import React from "react";
import { useSearchParams } from "react-router-dom";
import MapFeture from "../components/Map.jsx";
import "./styles/Results.scss";

import getCurrentLocation from "../utils/getCurrentLocation";
import getWifiLocations from "../utils/getWifiLocations";
import getPlaceLonLat from "../utils/getPlaceLonLat";

export default () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [currentLocation, setCurrentLocation] = React.useState(null);
  const [wifiLocations, setWifiLocations] = React.useState([]);

  // http://localhost:3000/results?location=london
  const location = searchParams.get("location");
  // const categories = searchParams.get("categories")?.split(",");
  const range = searchParams.get("range");

  // console.log(location);
  // console.log(categories);

  React.useEffect(() => {
    async function init() {
      if (location) {
        const { lon, lat } = await getPlaceLonLat(location);
        const locations = await getWifiLocations(lon, lat, range);
        setWifiLocations(locations);
      } else {
        const currentLocation = await getCurrentLocation();
        const locations = await getWifiLocations(
          currentLocation.lon,
          currentLocation.lat,
          range
        );
        setWifiLocations(locations);
      }
    }
    init();
  }, []);

  return (
    <>
      <div>
        <MapFeture />
      </div>
      {wifiLocations.map((wifiLocation) => {
        return (
          <div>
            <div className="box">
              <a className="button" href="#popup1" key={wifiLocation.name}>
                {wifiLocation.name}
              </a>
            </div>

            <div id="popup1" class="overlay">
              <div className="popup">
                <h2>Known info</h2>
                <h2 key={wifiLocation.name}>{wifiLocation.name}</h2>
                <a className="close" href="#">
                  &times;
                </a>
                <div className="content">
                  <p key={wifiLocation.fullAddress}>
                    Address: {wifiLocation.fullAddress}
                  </p>
                  <a key={wifiLocation.website} href={wifiLocation.website}>
                    website: {wifiLocation.website}
                  </a>
                  <p key={wifiLocation.openingHours}>
                    Opening Hours: {wifiLocation.openingHours}
                  </p>
                  <p key={wifiLocation.contactNumbers}>
                    Contact Number:{wifiLocation.contactNumbers}
                  </p>
                  <p key={wifiLocation.wheelChair}>
                    wheelChair Safe:{wifiLocation.wheelChair}
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};
