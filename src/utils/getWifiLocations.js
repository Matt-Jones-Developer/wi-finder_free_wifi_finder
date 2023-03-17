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

const categoryMap = {
    leisure: [
        "leisure",
        "building.spa",
        "entertainment",
        "national_park",
        "beach.beach_resort",
    ],
    library: [
        "education.library",
    ],
    museums: [
        "entertainment.museum",
    ],
    hotels: [
        "accommodation",
    ],
    transport: [
        "commercial.gas",
        "public_transport",
        "building.transportation",
    ],
    restaurants: [
        "catering",
    ],
    retail: [
        "commercial.supermarket",
        "commercial.shopping_mall",
        "tourism.information"
    ]
}

export default function getWifiLocations(lon, lat, range = 8000, categories = Object.keys(categoryMap)) {
    const searchCategories = categories.flatMap(category => categoryMap[category])

    const conditions = [
        "internet_access.free"
    ]

    const queryString = new URLSearchParams({
        conditions: conditions.join(","),
        categories: searchCategories.join(","),
        filter: `circle:${lon},${lat},${range}`,
        limit: 10,
        apiKey: process.env.REACT_APP_PLACES_API_KEY,
    }).toString()

    return fetch(`https://api.geoapify.com/v2/places?${queryString}`)
        .then((response) => response.json())
        .then((result) => {
            return result.features.map((x) => {
                const coordinates = {
                    lat: x.properties.lat,
                    lon: x.properties.lon,
                }
                return {
                    distance: calculateDistance(coordinates, { lon, lat }),
                    coordinates,
                    website: x.properties.datasource.raw.website,
                    name: x.properties.datasource.raw.name,
                    postcode: x.properties.postcode,
                    fullAddress: x.properties.formatted,
                    openingHours: x.properties.datasource.raw.opening_hours,
                    contactNumbers: x.properties.datasource.raw.phone,
                    wheelChair: x.properties.datasource.raw.wheelchair
                }
            }).sort(sortByDistance);

        });
}
