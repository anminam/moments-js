const elTime = document.querySelector('.time');
const elDate = document.querySelector('.date');

const getFormatTime = (time) => {
    
}

const getNowTime = () => {
    const t = new Date();

    let YYYY = t.getFullYear();
    let MM = t.getMonth() + 1;
    let DD = t.getDate();
    let hh = t.getHours();
    let mm = t.getMinutes();
    let ss = t.getSeconds();
    
    const date = `${YYYY}-${MM < 10? `0${MM}` : MM }-${DD < 10? `0${DD}` : DD }`;
    const time = `${hh < 10? `0${hh}` : hh }:${mm < 10? `0${mm}` : mm }:${ss < 10? `0${ss}` : ss }`;
    return {
        date,
        time
    }
}

export const init = () => {
    setInterval(() => {
        const {date, time} = getNowTime();
        elTime.innerText = time
        elDate.innerText = date
    }, 1000);
}