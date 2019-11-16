// Написать функцию, которая проверяет, является ли переданное ей число совершенным. Совершенное число – это число, равное сумме всех своих собственных делителей.

let hw_04_5 = document.getElementById("hw_04_5");

hw_04_5.onclick = function () {

    let number, sum, PerfectCheck;

    number = prompt("Enter a number for checking");
    sum = 0;

    PerfectCheck = function (_number) {

        for (i = 1; i < _number; i++) {

            if ((_number % i) == 0) {
                sum += i;
            }
        }

        if (sum == _number) {
            alert(`Number ${number} is perfect!`)

        }

        else {
            alert(`Number ${number} is not perfect`)

        }
    }

    PerfectCheck(number);

    return false;
};