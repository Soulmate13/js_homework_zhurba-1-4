// Запросить у пользователя число и на сколько цифр его сдвинуть. Сдвинуть цифры числа и вывести результат (если число 123456 сдвинуть на 2 цифры, то получится 345612).

let hw_03_7 = document.getElementById("hw_03_7");

hw_03_7.onclick = function () {

    let number, shift, slicedNumber, result, newNumber;

    number = prompt("Please enter a number");
    shift = +prompt("How many integers do you want to shift?");
    slicedNumber = number.slice(0, shift);
    result = number.slice(shift);
    newNumber = result + slicedNumber;

    alert(`Your new numnber is ${newNumber}`);

    return false;
};