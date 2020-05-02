import * as Time from "./time";
import * as Name from "./name";
import * as Todo from "./todo";
import * as Gio from "./gio";

const init = () => {
    Time.init();
    Name.init();
    Todo.init();
    Gio.init();
}

init();