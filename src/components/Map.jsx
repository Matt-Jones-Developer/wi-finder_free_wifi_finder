import GoogleMap from "google-maps-react-markers";
import { useState } from "react";
import Loading from "./Loading";
import styles from "./styles/Map.module.css";

const Marker = ({ onClick, src }) => (
  <img
    onClick={onClick}
    className="pin"
    style={{ transform: "translateX(-50%) translateY(-100%)" }}
    width="50px"
    src={src}
    alt="Map Pin"
  ></img>
);

const Map = ({ centreLocation, markers, isLoading, onClick }) => {
  const [mapBounds, setMapBounds] = useState({});

  const handleMarkerClick = (e, marker) => {
    onClick?.(marker);
  };

  const onMapChange = ({ bounds, zoom }) => {
    const ne = bounds.getNorthEast();
    const sw = bounds.getSouthWest();
    setMapBounds({
      ...mapBounds,
      bounds: [sw.lng(), sw.lat(), ne.lng(), ne.lat()],
      zoom,
    });
  };

  return (
    <div className={styles.mapContainer}>
      {!!isLoading && (
        <div className={styles.fullpageContainer}>
          <Loading />
        </div>
      )}
      <GoogleMap
        apiKey={process.env.REACT_APP_GOOGLE_MAP_API_KEY}
        defaultCenter={{
          lat: centreLocation?.lat || 51.529831,
          lng: centreLocation?.lon || -0.12006,
        }}
        options={{
          mapTypeControl: false,
        }}
        defaultZoom={12}
        mapMinHeight="100vh"
        onChange={onMapChange}
      >
        {!isLoading && !!centreLocation && (
          <Marker
            lat={centreLocation.lat}
            lng={centreLocation.lon}
            src="/search-pin.svg"
          />
        )}
        {!isLoading &&
          markers.map((marker, index) => (
            <Marker
              key={`${marker.coordinates.lat}-${marker.coordinates.lon}`}
              lat={marker.coordinates.lat}
              lng={marker.coordinates.lon}
              markerId={marker.name}
              onClick={(e) => handleMarkerClick(e, marker)}
              src="/place-pin.svg"
            />
          ))}
      </GoogleMap>
    </div>
  );
};

export default Map;
