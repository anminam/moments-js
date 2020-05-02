import { load } from "./localStorage";
import {save} from "./localStorage";

const elInputName = document.getElementById('input-name');
const elName = document.querySelector('.name');
const elForm = document.getElementById('form-name');
const KEY = 'COORDS';

export const eventCoords = () => {

}
const handleSucess = (e) => {
    const {latitude, longitude} = e.coords;
    const coords = {
        latitude,
        longitude
    }
    saveCoords(coords);
}
const handleFail = (e) => {
    
}

const saveCoords = (obj) => {
    save(Key, JSON.stringify(obj))
}
const askGio = () => {
    navigator.geolocation.getCurrentPosition(handleSucess, handleFail)
}

export const init = () => {
    const coords = load(KEY);
    if (coords === null) {
        askGio();
    }
}