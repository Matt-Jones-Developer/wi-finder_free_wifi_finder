import GoogleMap from "google-maps-react-markers";
import { useEffect, useRef, useState } from "react";
const Marker = () => (
  <img
    onClick={() => alert("Test")}
    width="50"
    src="https://assets.stickpng.com/images/5888925dbc2fc2ef3a1860ad.png"
    alt="Red Map Pin"
    itemprop="contentUrl"
  ></img>
);

const coordinates = [
  [
    {
      lat: 45.4046987,
      lng: 12.2472504,
      name: "Venice",
    },
    {
      lat: 41.9102415,
      lng: 12.3959151,
      name: "Rome",
    },
    {
      lat: 45.4628328,
      lng: 9.1076927,
      name: "Milan",
    },
  ],
  [
    {
      lat: 40.8518,
      lng: 14.2681,
      name: "Naples",
    },
    {
      lat: 43.7696,
      lng: 11.2558,
      name: "Florence",
    },
    {
      lat: 37.5023,
      lng: 15.0873,
      name: "Catania",
    },
  ],
];

const App = () => {
  const mapRef = useRef(null);
  const [mapReady, setMapReady] = useState(false);
  const [mapBounds, setMapBounds] = useState({});
  const [usedCoordinates, setUsedCoordinates] = useState(0);
  const [currCoordinates, setCurrCoordinates] = useState(
    coordinates[usedCoordinates]
  );
  const [highlighted, setHighlighted] = useState(null);

  /**
   * @description This function is called when the map is ready
   * @param {Object} map - reference to the map instance
   * @param {Object} maps - reference to the maps library
   */
  // eslint-disable-next-line no-unused-vars
  const onGoogleApiLoaded = ({ map, maps }) => {
    mapRef.current = map;
    setMapReady(true);
  };

  // eslint-disable-next-line no-unused-vars
  const onMarkerClick = (e, { markerId, lat, lng }) => {
    setHighlighted(markerId);
  };

  const onMapChange = ({ bounds, zoom }) => {
    const ne = bounds.getNorthEast();
    const sw = bounds.getSouthWest();
    /**
     * useSupercluster accepts bounds in the form of [westLng, southLat, eastLng, northLat]
     * const { clusters, supercluster } = useSupercluster({
     *	points: points,
     *	bounds: mapBounds.bounds,
     *	zoom: mapBounds.zoom,
     * })
     */
    setMapBounds({
      ...mapBounds,
      bounds: [sw.lng(), sw.lat(), ne.lng(), ne.lat()],
      zoom,
    });
    setHighlighted(null);
  };

  const updateCoordinates = () => setUsedCoordinates(!usedCoordinates ? 1 : 0);

  useEffect(() => {
    setCurrCoordinates(coordinates[usedCoordinates]);
  }, [usedCoordinates]);

  return (
    <main>
      <div className="map-container">
        <GoogleMap
          apiKey=""
          defaultCenter={{ lat: 45.4046987 - 50, lng: 12.2472504 - 50 }}
          defaultZoom={5}
          options={{}}
          mapMinHeight="100vh"
          onGoogleApiLoaded={onGoogleApiLoaded}
          onChange={onMapChange}
        >
          {currCoordinates.map(({ lat, lng, name }, index) => (
            <Marker
              key={index}
              lat={lat - 50}
              lng={lng - 50}
              markerId={name}
              onClick={onMarkerClick}
              className="marker"
            />
          ))}
        </GoogleMap>
        {highlighted && (
          <div className="highlighted">
            {highlighted}{" "}
            <button type="button" onClick={() => setHighlighted(null)}>
              X
            </button>
          </div>
        )}
      </div>
    </main>
  );
};

export default App;
