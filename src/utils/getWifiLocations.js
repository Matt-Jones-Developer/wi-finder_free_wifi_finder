function calculateDistance(source, target) {
    return Math.acos(Math.sin(source.lat) * Math.sin(target.lat) + Math.cos(source.lat) * Math.cos(target.lat) * Math.cos(target.lon - source.lon)) * 6371
}

function sortByDistance(a, b) {
    if (a.distance < b.distance) {
        return -1;
    }
    if (a.distance > b.distance) {
        return 1;
    }
    return 0;
}

export default function getWifiLocations(lon, lat, range = 7000) {
    const categories = [
        "accommodation",
        "education.library",
        "entertainment.museum",
        "public_transport",
        "commercial.gas",
        "building.transportation",
        "building.spa",
        "beach.beach_resort",
        "national_park",
        "leisure",
        "entertainment",
        "catering",
        "commercial.supermarket",
        "commercial.shopping_mall",
        "tourism.information"
    ].join(",")

    const conditions = [
        "internet_access.free"
    ].join(",")

    const queryString = new URLSearchParams({
        conditions,
        categories,
        filter: `circle:${lon},${lat},${range}`,
        limit: 20,
        apiKey: process.env.REACT_APP_PLACES_API_KEY,
    }).toString()

    return fetch(`https://api.geoapify.com/v2/places?${queryString}`)
        .then((response) => response.json())
        .then((result) => {
            return result.features.map((x) => ({
                distance: calculateDistance(x.properties, { lon, lat }),
                website: x.properties.datasource.raw.website,
                name: x.properties.datasource.raw.name,
                postcode: x.properties.postcode,
                fullAddress: x.properties.formatted,
                openingHours: x.properties.datasource.raw.opening_hours,
                contactNumbers: x.properties.datasource.raw.phone,
                wheelChair: x.properties.datasource.raw.wheelchair
            })).sort(sortByDistance);

        });
}
