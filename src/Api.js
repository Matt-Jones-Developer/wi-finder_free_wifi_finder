// const apiKey = "bbed476c883d42868b6e210c7d0c7830"

// const place = "london"
// getLocation(place)

// function getLocation(place) {
//     return fetch(`https://api.geoapify.com/v1/geocode/autocomplete?text=${place}&type=city&format=json&apiKey=${apiKey}`)
//         .then(response => response.json())
//         .then(result => {
//             const lon = result.results[0].bbox.lon1
//             const lat = result.results[0].bbox.lat1
//             // const placeId = result.results[0].place_id
//             getWifiLocations(lon, lat)
//         })
// }

// // filter = place:${ placeId }

// function getWifiLocations(lon, lat) {
//     return fetch(`https://api.geoapify.com/v2/places?categories=commercial.supermarket,catering.restaurant,catering.fast_food,catering.cafe,catering.food_court,catering.bar,catering.pub&conditions=internet_access.free&filter=circle:${lon},${lat},5000&limit=20&apiKey=${apiKey}`)
//         .then(response => response.json())
//         .then(result => {
//             let websites = result.features.map(x => x.properties.formatted)
//             console.log(websites)

//         })
// }



// path to website
// result.features[0].properties.datasource.raw.website
// result.features.map(x => x.properties.datasource.raw.website)


//wheelchair safe
// result.features[0].properties.datasource.raw.wheelchair
// result.features.map(x => x.properties.datasource.raw.wheelchair)


// opening hours
// result.features[0].properties.datasource.raw.opening_hours
// result.features.map(x => x.properties.datasource.raw.opening_hours)

//phone number
// result.features[0].properties.datasource.raw.phone
// result.features.map(x => x.properties.datasource.raw.phone)

//name
// result.features[0].properties.datasource.raw.name
// result.features.map(x => x.properties.datasource.raw.name)

//address
// result.features[0].properties.address_line2
// result.features.map(x => x.properties.address_line2)

//full address
// result.features[0].properties.formatted
// result.features.map(x => x.properties.formatted)

//postcode
// result.features[0].properties.postcode
// result.features.map(x => x.properties.postcode)
