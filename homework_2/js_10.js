// Запросить дату (день, месяц, год) и вывести следующую за ней дату. Учтите возможность перехода на следующий месяц, год, а также високосный год.

let hw_02_10 = document.getElementById("hw_02_10");

hw_02_10.onclick = function () {

    let year, month, day, date;

    year = +prompt("Enter a valid year");
    month = +prompt("Enter a valid month. From 0 - January to 11 - December");
    day = +prompt("Enter the valid day");

    date = new Date;
    date.setFullYear(year);
    date.setMonth(month);
    date.setDate(day);

    alert(`You have entered ${date}`);

    date.setDate(date.getDate() + 1);

    alert(`${date} is one day plus`);

    return false;
};