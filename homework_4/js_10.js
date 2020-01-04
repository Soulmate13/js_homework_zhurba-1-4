// Написать функцию, которая считает разницу между датами. Функция принимает 6 параметров, которые описывают 2 даты, и возвращает результат в виде строки «чч:мм:сс». При выполнении задания используйте функции из предыдущих 2-х заданий: сначала обе даты переведите в секунды, узнайте разницу в секундах, а потом разницу переведите обратно в «чч:мм:сс»

let hw_04_10 = document.getElementById("hw_04_10");

hw_04_10.onclick = function () {

    let CompareDates, DateInSeconds, dateOne, dateTwo, difference, secondsToTime, secondsResult;

    DateInSeconds = function (_hours, _minutes, _seconds) { // getting the time from the user and converting it to seconds

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
        return secondsResult

    }

    CompareDates = function (_dateOne, _dateTwo) { // substracting the bigger date from a smaller date

        if (_dateOne === _dateTwo) {
            difference = _dateOne - _dateTwo;
            return difference;
        }

        else if (_dateOne > _dateTwo) {
            difference = _dateOne - _dateTwo;
            return difference;
        }

        else {
            difference = _dateTwo - _dateOne;
            return difference;
        }
    }

    secondsToTime = function (_secondsInput) { // coverting the difference back to the HH-MM-SS

        let hours, minutes, seconds, date;

        hours = Math.floor(_secondsInput / 3600);
        minutes = Math.floor(_secondsInput % 3600 / 60)
        seconds = Math.floor(_secondsInput % 3600 % 60);

        date = new Date();
        date.setHours(hours);
        date.setMinutes(minutes);
        date.setSeconds(seconds);

        alert(`The difference is ${date.toLocaleTimeString()}`);
    }

    dateOne = DateInSeconds();
    dateTwo = DateInSeconds();

    CompareDates(dateOne, dateTwo);

    secondsToTime(difference);

    return false;
}
