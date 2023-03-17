export default function getCurrentLocation() {
    return new Promise((resolve, reject) => {
        return navigator.geolocation.getCurrentPosition((position) => {
            const location = {
                lat: position.coords.latitude,
                lon: position.coords.longitude,
            }
            resolve(location)
        });
    })
}

// google map
// AIzaSyBHqhirseGtyYg2Vz51l0srH9MUIqLpCTs


