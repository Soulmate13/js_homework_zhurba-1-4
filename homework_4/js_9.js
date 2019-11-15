// Написать функцию, которая принимает количество секунд, переводит их в часы, минуты и секунды и возвращает в виде строки «чч:мм:сс».
let hw_04_9 = document.getElementById("hw_04_9");

hw_04_9.onclick = function () {

    let secondsInput, secondsToTime

    secondsToTime = function (_secondsInput) {

        secondsInput = +prompt("Enter seconds for conversion");

        let hours, minutes, seconds, date;

        hours = Math.floor(secondsInput / 3600);
        minutes = Math.floor(secondsInput % 3600 / 60)
        seconds = Math.floor(secondsInput % 3600 % 60);

        date = new Date();
        date.setHours(hours);
        date.setMinutes(minutes);
        date.setSeconds(seconds);

        alert(`The time is ${date.toLocaleTimeString()}`);
    }

    secondsToTime(secondsInput);

    return false;
};