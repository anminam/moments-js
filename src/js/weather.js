import { save, load } from "./localStorage";
import { eventCoords } from "./gio";

const API_KEY = 'eb7343bdb9fa9d75ca84237f0c496425';

const elWapper = document.querySelector('.wapper-weather');
const elTemp = document.querySelector('.temperature');
const elCity = document.querySelector('.city');
const elWeatherImg = document.querySelector('.img-weather');

export const getWeatherAsync = (lat, lon) => {
    return fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`)
        .then(res => {
            return res.text();
        })
        .then(res => {
            const obj = JSON.parse(res);
            const city = obj.name;
            const temp = obj.main.temp;
            const icon = obj.weather[0].icon;
            elTemp.innerText = temp;
            elCity.innerText = city;
            const weather = obj.weather[0].main;
            const iconUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`;
            elWeatherImg.setAttribute('src', iconUrl);
            elWeatherImg.setAttribute('alt', weather);
            elWapper.style.display = 'block';
        })
}

const onGetGio = async(coords) => {
    const { latitude, longitude} = coords;
    const obj = await getWeatherAsync(latitude, longitude)
}

export const init = () => {
    elWapper.style.display = 'none';
    eventCoords(onGetGio)
}