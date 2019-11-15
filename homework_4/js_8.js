// Написать функцию, которая принимает часы, минуты и секунды и возвращает это время в секундах.

let hw_04_8 = document.getElementById("hw_04_8");

hw_04_8.onclick = function () {

    let seconds, minutes, hours, secondsResult, clock;

    clock = function (_hours, _minutes, _seconds) {

        hours = +prompt("Enter hours");

        while (hours < 0 || hours > 23) {
            hours = +prompt("Please enter valid hours. Between 0 and 23");
        };

        minutes = +prompt("Enter minutes");

        while (minutes < 0 || minutes > 59) {
            minutes = +prompt("Please enter valid minutes. Between 0 and 59");
        };

        seconds = +prompt("Enter seconds");

        while (seconds < 0 || seconds > 59) {
            seconds = +prompt("Please enter valid minutes. Between 0 and 59");
        };


        secondsResult = (seconds) + (minutes * 60) + (hours * 3600);

        alert(`Your time is equal to ${secondsResult} seconds`)
    }

    clock(hours, minutes, seconds);


    return false;
};