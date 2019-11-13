// Зациклить вывод дней недели таким образом: «День недели. Хотите увидеть следующий день?» и так до тех пор, пока пользователь нажимает OK.

let hw_03_8 = document.getElementById("hw_03_8");

hw_03_8.onclick = function () {

    let day;

    day = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
    ]

    for (i = 0; i < day.length; i++) {
        window.confirm(`Today is ${day[i]}. Wanna see the next day?`);
    }

    return false;
};