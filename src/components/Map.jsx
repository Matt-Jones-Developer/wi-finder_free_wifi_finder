import GoogleMap from "google-maps-react-markers";
import { useEffect, useRef, useState } from "react";
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
  const mapRef = useRef(null);
  const [mapReady, setMapReady] = useState(false);
  const [mapBounds, setMapBounds] = useState({});

  const onGoogleApiLoaded = ({ map, maps }) => {
    mapRef.current = map;
    setMapReady(true);
  };

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
    <main>
      <div className="map-container">
        {!!isLoading && (
          <div className={styles.fullpageContainer}>
            <Loading />
          </div>
        )}
        <GoogleMap
          apiKey="AIzaSyBHqhirseGtyYg2Vz51l0srH9MUIqLpCTs"
          defaultCenter={{
            lat: centreLocation?.lat || 51.529831,
            lng: centreLocation?.lon || -0.12006,
          }}
          defaultZoom={12}
          options={{}}
          mapMinHeight="100vh"
          onGoogleApiLoaded={onGoogleApiLoaded}
          onChange={onMapChange}
        >
          {!!centreLocation && (
            <Marker
              lat={centreLocation.lat}
              lng={centreLocation.lon}
              src="/search-pin.svg"
            />
          )}
          {markers.map((marker, index) => (
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
    </main>
  );
};

export default Map;
