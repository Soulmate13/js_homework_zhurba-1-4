// Запросить у пользователя год и проверить, високосный он или нет. Високосный год либо кратен 400, либо кратен 4 и при этом не кратен 100.


let hw_02_4 = document.getElementById("hw_02_4");

hw_02_4.onclick = function () {

    let year;

    year = +prompt("Enter a year for checking");

    if ((year % 400 == 0) || (year % 4 == 0) && (year % 100 !== 0)) {

        alert("You have entered a leap year!");

    }

    else {

        alert("You have entered a non-leap year!")
    }
    return false;
};