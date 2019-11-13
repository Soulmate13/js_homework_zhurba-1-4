// Написать функцию, которая принимает минимальное и максимальное значения для диапазона, и выводит только те числа из диапазона, которые являются совершенными. Используйте написанную ранее функцию, чтобы узнавать, совершенное число или нет. 

let hw_04_6 = document.getElementById("hw_04_6");

hw_04_6.onclick = function () {

    let minNumber, maxNumber, sum, PerfectCheck, PerfectArrayCheck;

    minNumber = +prompt("Enter a minimal number for checking");
    maxNumber = +prompt("Enter a maximal number for checking");

    PerfectCheck = function (_number) {
        sum = 0;

        for (i = 1; i < _number; i++) {

            if ((_number % i) == 0) {
                sum += i;
            }
        }

        if (sum == _number) {
            alert(`Number ${_number} is perfect!`)

        }
    }

    PerfectArrayCheck = function (_minNumber, _maxNumber) {

        for (_maxNumber; _minNumber <= _maxNumber; _maxNumber--) {
            PerfectCheck(_maxNumber);
        }

    }

    PerfectArrayCheck(minNumber, maxNumber);


    return false;
};