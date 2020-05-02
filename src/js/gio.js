import { load, save  } from "./localStorage";

const KEY = 'COORDS';
let coords = null;
let addedCallback = null;

export const eventCoords = (callback) => {
    addedCallback = callback;
    if (coords) {
        callback(coords);
    } else {
        init();
    }
}
const handleSucess = (e) => {
    const {latitude, longitude} = e.coords;
    coords = {
        latitude,
        longitude
    }
    if (addedCallback) {
        addedCallback(coords);
    }
    saveCoords(coords);
}
const handleFail = (e) => {
    
}

const saveCoords = (obj) => {
    save(KEY, JSON.stringify(obj))
}
const askGio = () => {
    navigator.geolocation.getCurrentPosition(handleSucess, handleFail)
}

const init = () => {
    coords = JSON.parse(load(KEY));
    if (coords === null) {
        askGio();
    } else {
        addedCallback(coords);
    }
}