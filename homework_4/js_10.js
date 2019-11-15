// Написать функцию, которая считает разницу между датами. Функция принимает 6 параметров, которые описывают 2 даты, и возвращает результат в виде строки «чч:мм:сс». При выполнении задания используйте функции из предыдущих 2-х заданий: сначала обе даты переведите в секунды, узнайте разницу в секундах, а потом разницу переведите обратно в «чч:мм:сс»

let hw_04_10 = document.getElementById("hw_04_10");

hw_04_10.onclick = function () {

    let CompareDates, DateInSeconds, date, dateOne, dateTwo, difference, secondsToTime, secondsResult, MillisecondsResult;

    DateInSeconds = function (_year, _month, _day) {

        do {
            _year = +prompt("Enter the year");
        }

        while (_year < 0);

        do {
            _month = +prompt("Enter the month. From 0 to 11");
        }

        while ((_month < 0 || _month > 12));

        _day = +prompt("Enter day");

        if ((_month == 0) || (_month == 2) || (_month == 4) || (_month == 6) || (_month == 7) || (_month == 9) || (_month == 11)) {

            while (_day > 31) {
                _day = +prompt("Enter day");
            }
        }

        if ((_month == 3) || (_month == 5) || (_month == 7) || (_month == 10)) {

            while (_day > 30) {
                _day = +prompt("Enter day");
            }

        }

        if (_month == 1) {

            while (_day > 28) {

                _day = +prompt("Enter day");

            }
        }

        date = new Date();
        date.setFullYear(_year, _month, _day);
        MillisecondsResult = date.getTime();
        secondsResult = Math.floor(MillisecondsResult / 1000);
        return secondsResult

    }



    // DateInSeconds = function (_hours, _minutes, _seconds) { // getting the time from the user and converting it to seconds

    //     hours = +prompt("Enter hours");

    //     while (hours < 0 || hours > 23) {
    //         hours = +prompt("Please enter valid hours. Between 0 and 23");
    //     };

    //     minutes = +prompt("Enter minutes");

    //     while (minutes < 0 || minutes > 59) {
    //         minutes = +prompt("Please enter valid minutes. Between 0 and 59");
    //     };

    //     seconds = +prompt("Enter seconds");

    //     while (seconds < 0 || seconds > 59) {
    //         seconds = +prompt("Please enter valid minutes. Between 0 and 59");
    //     };

    //     secondsResult = (seconds) + (minutes * 60) + (hours * 3600);
    //     return secondsResult

    // }

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