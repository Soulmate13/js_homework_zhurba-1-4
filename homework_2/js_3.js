// Запросить у пользователя трехзначное число и проверить, есть ли в нем одинаковые цифры.

let hw_02_3 = document.getElementById("hw_02_3");

hw_02_3.onclick = function () {

    let number, firstDigit, secondDigit, thirdDigit;

    number = prompt("Enter a 3-digit number for checking");

    firstDigit = number.slice(0, 1);

    secondDigit = number.slice(1, 2);

    thirdDigit - number.slice(2);

    if ((firstDigit == secondDigit) || (firstDigit == thirdDigit) || (secondDigit == thirdDigit)) {

        alert("Your number has same digits");

    }

    else {
        alert("Your number has different digits");
    }

    return false;
};