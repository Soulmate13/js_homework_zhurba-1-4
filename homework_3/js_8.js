// Зациклить вывод дней недели таким образом: «День недели. Хотите увидеть следующий день?» и так до тех пор, пока пользователь нажимает OK.

let hw_03_8 = document.getElementById("hw_03_8");

hw_03_8.onclick = function () {

    let day = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
    ]

    index = 0;

    while (window.confirm(`Today is ${day[index]}. Wanna see the next day?`) == true) {
        index += 1;

        if (index == 7) {
            index = 0;
        }

    }

    return false;

};
