export default function getPlaceLonLat(place) {

    return fetch(
        `https://api.geoapify.com/v1/geocode/autocomplete?text=${place}&type=city&format=json&apiKey=${process.env.REACT_APP_PLACES_API_KEY}`
    )
        .then((response) => response.json())
        .then((result) => {
            const lon = result.results[0].bbox.lon1;
            const lat = result.results[0].bbox.lat1;
            return {
                lon,
                lat
            }
        });
}
