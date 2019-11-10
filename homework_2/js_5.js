// Запросить у пользователя пятиразрядное число и определить, является ли оно палиндромом.

// 12321 = palindrome 12312 = not a palindrome

let hw_02_5 = document.getElementById("hw_02_5");

hw_02_5.onclick = function () {

    let number, firstNumber, secondNumber, fourthNumber, fifthNumber;

    number = prompt("Enter a 5-digit number for checking");

    firstNumber = number.slice(0, 1);
    secondNumber = number.slice(1, 2);
    fourthNumber = number.slice(3, 4);
    fifthNumber = number.slice(4);

    if ((firstNumber == fifthNumber) && (secondNumber == fourthNumber)) {

        alert("Your 5-digit number is indeed a palindrome");

    }

    else {

        alert("Your number is not a palindrome or you have entered incorrect information");

    }

    return false;
};