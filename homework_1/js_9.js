// Запросите у пользователя трехзначное число и выведите его задом наперед. Для решения задачи вам понадобится оператор % (остаток от деления).
let hw_01_9 = document.getElementById("hw_01_9");

hw_01_9.onclick = function () {

    let number, numberReverse;

    number = +prompt("Enter a 3 digit number"); /// getting the number, for example "123"
    numberReverse = 0;

    numberReverse = number % 10; // getting the last digit "3"
    number = number / 10; // putting the last digit behind the decimal "12.3"

    number = Math.trunc(number); //  truncating the decimal "12"
    numberReverse = (numberReverse * 10) + (number % 10); // preparing the attachment of the next digit "30", separating the next digit "2" and attaching them "32"

    number = number / 10; // putting the last digit behind the decimal "1.2"
    number = Math.trunc(number); // truncating the the decimal "1"

    numberReverse = (numberReverse * 10) + (number); // preparing the attachement of the next digit "320", and attaching "321"

    alert(`Your reversed number is ${numberReverse}`);

    console.log(numberReverse); // for console checking purposes

    return false;
}