// Запросить 2 числа и найти только наибольший общий делитель.
// GREATEST COMMON FACTOR = Наибольший общий делитель.

let hw_03_2 = document.getElementById("hw_03_2");

hw_03_2.onclick = function () {

    let firstNumber, secondNumber, remainder;

    firstNumber = +prompt("Enter the first number");
    secondNumber = +prompt("Enter the second number");

    if (secondNumber == 0) {
        alert(`Greatest common factor = ${firstNumber}`);
    }

    else {
        while ((firstNumber % secondNumber) > 0) {

            remainder = (firstNumber % secondNumber);

            firstNumber = secondNumber;
            secondNumber = remainder;
        }

        alert(`Greatest common factor = ${secondNumber}`);
    }


    return false;
};