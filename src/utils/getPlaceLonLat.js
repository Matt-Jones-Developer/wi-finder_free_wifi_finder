export default function getPlaceLonLat(place) {

    return fetch(
        `https://api.geoapify.com/v1/geocode/search?text=${place}&format=json&apiKey=${process.env.REACT_APP_PLACES_API_KEY}`
    )
        .then((response) => response.json())
        .then((result) => {
            const lon = result.results[0].lon;
            const lat = result.results[0].lat;
            return {
                lon,
                lat
            }
        });
}
