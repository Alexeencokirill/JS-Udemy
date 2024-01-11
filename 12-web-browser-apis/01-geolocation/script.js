// getCurrentPosition()
function curSuccess(pos) {
    const coords = pos.coords;
console.log(`Latitude: ${coords.latitude}`);
console.log(`Longitude: ${coords.longitude}`);
console.log(`Within: ${coords.accuracy} meters`)
}

function curError(err) {
    console.log(`Error: ${err.code} - ${err.message}`)
}

const curOptions = {
    enableHghAccuracy: true, // Use gps if available
};

navigator.geolocation.getCurrentPosition(curSuccess, curError, 
    curOptions);


// watchPosition()

function watchSuccess(pos) {
    const coords = pos.coords;
console.log(`Latitude: ${coords.latitude}`);
console.log(`Longitude: ${coords.longitude}`);
console.log(`Within: ${coords.accuracy} meters`)
}

function watchError(err) {
    console.log(`Error: ${err.code} - ${err.message}`)
}

const watchOptions = {
    enableHghAccuracy: true, // Use gps if available
};

navigator.geolocation.watchCurrentPosition(watchSuccess, watchError, 
    watchOptions);
