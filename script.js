const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');

const newYear = '6 april 2022';

function countDown() {

    const newYearDate = new Date(newYear);
    const currentDate = new Date();

    const totalDate = (newYearDate - currentDate) / 1000;

    const days = Math.floor(totalDate / 3600 / 24);
    const hours = Math.floor(totalDate / 3600) % 24;
    const minutes = Math.floor(totalDate / 60) % 60;
    const seconds = Math.floor(totalDate) % 60;
    

    daysEl.innerHTML = days;
    hoursEl.innerHTML = formateTime(hours);
    minutesEl.innerHTML = formateTime(minutes);
    secondsEl.innerHTML = formateTime(seconds);

}

function formateTime(time) {
    return time < 10 ? `0${time}` : time;
}



countDown();
setInterval(countDown, 1000);





// FINISH THE JS CODE HERE
// Copyright: Rakib Hossen
// Fiverr ID: https://www.fiverr.com/rakib_11/