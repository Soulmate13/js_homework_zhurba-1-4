// Написать функцию, которая принимает 2 числа и возвращает - 1, если первое меньше, чем второе; 1 – если первое больше, чем второе; и 0 – если числа равны.

let hw_04_1 = document.getElementById("hw_04_1");

hw_04_1.onclick = function () {

    let firstNumber, secondNumber, Evaluation, result;

    Evaluation = function (_firstNumber, _secondNumber) {
        if (_firstNumber > _secondNumber) {
            result = "1";
            alert(`${result}`);
        }

        else if (_firstNumber < _secondNumber) {
            result = "-1"
            alert(`${result}`);
        }

        else {
            result = "0";
            alert(`${result}`);
        }
    }

    firstNumber = prompt("Enter first number");
    secondNumber = prompt("Enter second number");

    Evaluation(firstNumber, secondNumber);

    return false;
};