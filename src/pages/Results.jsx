import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import SearchSettingsBar from "../components/SearchSettingsBar";
import Map from "../components/Map.jsx";
import Button from "../components/Button.jsx";

import getCurrentLocation from "../utils/getCurrentLocation";
import getWifiLocations from "../utils/getWifiLocations";
import getPlaceLonLat from "../utils/getPlaceLonLat";
import searchCategories from "../constants/searchCategories";
import "./styles/Results.scss";

const Results = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  const [initiatedMap, setInitiatedMap] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const [searchParams] = useSearchParams();
  const [currentLocation, setCurrentLocation] = React.useState(null);
  const [wifiLocations, setWifiLocations] = React.useState([]);
  const [selectedLocation, setSelectedLocation] = React.useState(null);

  const location = searchParams.get("location") || undefined;
  const categories = (searchParams.get("categories") || undefined)?.split(",");
  const range = searchParams.get("range") || undefined;

  const handleMarkerClick = (location) => {
    setSelectedLocation(location);
  };

  const handleSearch = React.useCallback(
    async (locationData = { location, range, categories }) => {
      setLoading(true);
      const wifiCategories =
        locationData.categories?.length > 0
          ? locationData.categories
          : searchCategories.map((s) => s.value);

      if (locationData.location) {
        const { lon, lat } = await getPlaceLonLat(locationData.location);
        const locations = await getWifiLocations(
          lon,
          lat,
          locationData.range,
          wifiCategories
        );
        setWifiLocations(locations);
        setCurrentLocation({ lat, lon });

        const queryString = new URLSearchParams({
          location: locationData.location,
          range: locationData.range,
          categories: wifiCategories.join(","),
        }).toString();
        window.history.replaceState(null, null, `/results?${queryString}`);
      } else {
        const currentLocation = await getCurrentLocation();
        const wifiLocations = await getWifiLocations(
          currentLocation.lon,
          currentLocation.lat,
          locationData.range,
          wifiCategories
        );
        setCurrentLocation(currentLocation);
        setWifiLocations(wifiLocations);
      }
      setLoading(false);
    },
    [categories, location, range]
  );

  React.useEffect(() => {
    const init = async () => {
      handleSearch();
    };

    if (!initiatedMap) {
      init();
      setInitiatedMap(true);
    }
  }, [handleSearch, initiatedMap, categories, range]);

  return (
    <>
      <SearchSettingsBar
        location={location}
        range={range}
        categories={categories}
        onSearch={handleSearch}
      />
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
