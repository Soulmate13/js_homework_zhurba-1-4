// Запросить у пользователя 10 чисел и подсчитать, сколько он ввел положительных, отрицательных и нулей. При этом также посчитать, сколько четных и нечетных. Вывести статистику на экран. Учтите, что достаточно одной переменной (не 10) для ввода чисел пользователем.

let hw_03_5 = document.getElementById("hw_03_5");

hw_03_5.onclick = function () {

    let positive = 0;
    let negative = 0;
    let zero = 0;
    let odd = 0;
    let even = 0;

    for (let index = 0; index < 10; index++) {

        let number = +prompt("Enter a number for checking");

        if (number == 0) {
            zero++;
        }

        if (number > 0) {
            positive++;
        }

        if (number < 0) {
            negative++;
        }

        if (number % 2 == 0) {
            even++;
        }

        if (number % 2 !== 0) {
            odd++;
        }

    }

    alert(`You have entered \n ${positive} positive numbers \n ${negative} negative numbers \n ${zero} zeors \n ${even} even numbers \n ${odd} odd numbers`);

    return false;
};