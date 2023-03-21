import React from "react";
import { useHistory } from "react-router-dom";

const SearchForm = () => {
  const history = useHistory();
  const [location, setLocation] = React.useState("");
  const [range, setRange] = React.useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    history.push(`/results?location=${location}&range=${range}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="location">Location:</label>
      <input
        type="text"
        id="location"
        value={location}
        onChange={(event) => setLocation(event.target.value)}
      />
      <br />
      <label htmlFor="range">Range (in metres):</label>
      <input
        type="number"
        id="range"
        value={range}
        onChange={(event) => setRange(event.target.value)}
      />
      <br />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;
