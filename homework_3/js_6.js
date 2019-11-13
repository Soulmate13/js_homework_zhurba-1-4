// Зациклить калькулятор.Запросить у пользователя 2 числа и знак, решить пример, вывести результат и спросить, хочет ли он решить еще один пример.И так до тех пор, пока пользователь не откажется.

let hw_03_6 = document.getElementById("hw_03_6");

hw_03_6.onclick = function () {

    while (window.confirm("Wanna solve a problem?") == true) {

        let firstNumber, secondNumber, symbol, str, result;

        firstNumber = prompt("Enter first number");
        secondNumber = prompt("Enter second number");
        symbol = prompt("Enter the symbol * / + -");

        str = (firstNumber + symbol + secondNumber);
        result = eval(str);

        alert(`${str} = ${result}`);
    }


    return false;
};