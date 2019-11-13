// Написать функцию, которая вычисляет факториал переданного ей числа.

let hw_04_2 = document.getElementById("hw_04_2");

hw_04_2.onclick = function () {

    let number, GetFactorial, result;

    result = 1;

    number = +prompt("Enter the number for the calculation of the factorial");

    GetFactorial = function (_number) {

        while (_number >= 1) {
            result *= _number--;
        }

        alert(`The factorial is ${result}`);
    }

    GetFactorial(number);

    return false;
};