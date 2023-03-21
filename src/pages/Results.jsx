import React from "react";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Header from "../components/Header.jsx";
import SearchSettingsBar from "../components/SearchSettingsBar.jsx";
import Map from "../components/Map.jsx";
import Button from "../components/Button.jsx";

import getCurrentLocation from "../utils/getCurrentLocation";
import getWifiLocations from "../utils/getWifiLocations";
import getPlaceLonLat from "../utils/getPlaceLonLat";
import "./styles/Results.scss";

const Results = () => {
  // always auto scroll hook
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  const [loading, setLoading] = React.useState(true);
  const [searchParams] = useSearchParams();
  const [currentLocation, setCurrentLocation] = React.useState(null);
  const [wifiLocations, setWifiLocations] = React.useState([]);
  const [selectedLocation, setSelectedLocation] = React.useState(null);

  const location = searchParams.get("location");
  const categories = (searchParams.get("categories") || undefined)?.split(",");
  const range = searchParams.get("range") || undefined;

  const handleMarkerClick = (location) => {
    setSelectedLocation(location);
  };

  React.useEffect(() => {
    async function init() {
      if (location) {
        const { lon, lat } = await getPlaceLonLat(location);
        const locations = await getWifiLocations(lon, lat, range, categories);
        setWifiLocations(locations);
        setCurrentLocation({ lat, lon });
      } else {
        const currentLocation = await getCurrentLocation();
        const locations = await getWifiLocations(
          currentLocation.lon,
          currentLocation.lat,
          range,
          categories
        );
        setCurrentLocation(currentLocation);
        setWifiLocations(locations);
      }
      setLoading(false);
    }
    init();
  }, [categories, location, range]);

  return (
    <>
      <Header />
      <SearchSettingsBar />
      <div className={`mt-0`}>
        <Map
          key={`maps-${loading}`}
          centreLocation={currentLocation}
          markers={wifiLocations}
          isLoading={loading}
          onClick={handleMarkerClick}
        />
        {!!selectedLocation && (
          <div>
            <div id="popup1" className="overlay">
              <div className="popup">
                <h2>Known info</h2>
                <h2 key={selectedLocation.name}>{selectedLocation.name}</h2>
                <button
                  onClick={() => setSelectedLocation(null)}
                  className="close"
                >
                  &times;
                </button>
                <div className="content">
                  <p key={selectedLocation.fullAddress}>
                    Address: {selectedLocation.fullAddress}
                  </p>
                  <a
                    key={selectedLocation.website}
                    href={selectedLocation.website}
                  >
                    website: {selectedLocation.website}
                  </a>
                  <p key={selectedLocation.openingHours}>
                    Opening Hours: {selectedLocation.openingHours}
                  </p>
                  <p key={selectedLocation.contactNumbers}>
                    Contact Number:{selectedLocation.contactNumbers}
                  </p>
                  <p key={selectedLocation.wheelChair}>
                    wheelChair Safe:{selectedLocation.wheelChair}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
        <div className="box">
          {wifiLocations.map((wifiLocation) => {
            return (
              <Button
                onClick={() => setSelectedLocation(wifiLocation)}
                key={wifiLocation.name}
              >
                {wifiLocation.name}
              </Button>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Results;
