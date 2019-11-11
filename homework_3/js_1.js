// Подсчитать сумму всех чисел в заданном пользователем диапазоне.

let hw_03_1 = document.getElementById("hw_03_1");

hw_03_1.onclick = function () {

    let firstNumber, secondNumber, sumTotal;

    firstNumber = +prompt("Enter the first number");
    secondNumber = +prompt("Enter the second number. It should be bigger than the first number");
    sumTotal = 0;

    for (firstNumber; firstNumber <= secondNumber; firstNumber++) {
        sumTotal = sumTotal + firstNumber;
    }

    alert(`The total sum is ${sumTotal}`);

    return false;
};