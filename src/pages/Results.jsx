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
  const categories = searchParams.get("categories")?.split(",");

  console.log(location);
  console.log(categories);

  React.useEffect(() => {
    async function init() {
      if (location) {
        const { lon, lat } = await getPlaceLonLat(location);
        const locations = await getWifiLocations(lon, lat);
        setWifiLocations(locations);
      } else {
        const currentLocation = await getCurrentLocation();
        const locations = await getWifiLocations(
          currentLocation.lon,
          currentLocation.lat
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
          <div class="main">
            <input type="checkbox" id="drop-1" hidden />
            <label
              class="dropHeader dropHeader-1"
              for="drop-1"
              key={wifiLocation.name}
            >
              {wifiLocation.name}
            </label>
            <div class="list list-1">
              <div class="item">Option one</div>
              <div class="item">Option two</div>
              <div class="item">Option three</div>
              <div class="item">Option four</div>
            </div>
          </div>
        );
      })}
    </>
  );
};
