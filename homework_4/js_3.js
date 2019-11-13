// Написать функцию, которая принимает три отдельные цифры и превращает их в одно число. Например: цифры 1, 4, 9 превратятся в число 149.

let hw_04_3 = document.getElementById("hw_04_3");

hw_04_3.onclick = function () {

    let firstNumber, secondNumber, thirdNumber, result, Connector;

    firstNumber = prompt("Enter the first number");
    secondNumber = prompt("Enter the second number");
    thirdNumber = prompt("Enter the third number");

    Connector = function (_firstNumber, _secondNumber, _thirdNumber) {
        result = `${_firstNumber}${_secondNumber}${_thirdNumber}`;
        alert(`Your result is ${result}`);
    }

    Connector(firstNumber, secondNumber, thirdNumber);

    return false;
};