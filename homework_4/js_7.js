// Написать функцию, которая принимает время (часы, минуты, секунды) и выводит его на экран в формате «чч:мм:сс».Если при вызове функции минуты и/или секунды не были переданы, то выводить их как 00.

let hw_04_7 = document.getElementById("hw_04_7");

hw_04_7.onclick = function () {

    let seconds, minutes, hours, clock, date;

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

        date = new Date();
        date.setHours(hours);
        date.setMinutes(minutes);
        date.setSeconds(seconds);

        alert(`The time is ${date.toLocaleTimeString()}`);
    }

    clock();


    return false;
};