import { save, load } from "./localStorage";

const API_KEY = 'eb7343bdb9fa9d75ca84237f0c496425';

const elInputName = document.getElementById('input-name');
const elName = document.querySelector('.name');
const elForm = document.getElementById('form-name');
const KEY_NAME = 'KEY_NAME';

export const getWeather = (lat, lon) => {
    cfetch(`api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`)
        .then(res => {
            debugger;
        });
}

export const init = () => {
    
}