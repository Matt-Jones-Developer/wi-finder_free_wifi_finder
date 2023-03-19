import React from "react";
import { useSearchParams } from "react-router-dom";
import Map from "../components/Map.jsx";
import "./styles/Results.scss";

import getCurrentLocation from "../utils/getCurrentLocation";
import getWifiLocations from "../utils/getWifiLocations";
import getPlaceLonLat from "../utils/getPlaceLonLat";

const Results = () => {
  const [loading, setLoading] = React.useState(true);
  const [searchParams, setSearchParams] = useSearchParams();
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
  }, []);

  return (
    <>
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
              <a
                onClick={() => setSelectedLocation(null)}
                className="close"
                // cannot be #
                href="/"
              >
                &times;
              </a>
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
      {wifiLocations.map((wifiLocation) => {
        return (
          <div>
            <div className="box">
              <a
                onClick={() => setSelectedLocation(wifiLocation)}
                className="button"
                key={wifiLocation.name}
                href="/"
              >
                {wifiLocation.name}
              </a>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Results;
