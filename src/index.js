import * as Time from "./js/time";
import * as Name from "./js/name";
import * as Todo from "./js/todo";
import * as Gio from "./js/gio";
import * as Weather from "./js/weather";
import * as Background from "./js/background";
import './style.css';

const init = () => {
    Background.init();
    Time.init();
    Name.init();
    Todo.init();
    Weather.init();
}

init();