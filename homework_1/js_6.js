// Реализуйте конвертор валют. Пользователь вводит доллары, программа переводит в евро. Курс валюты храните в константе.
let hw_01_6 = document.getElementById("hw_01_6");

hw_01_6.onclick = function () {

    const exchangeRate = 0.901856;

    let dollarAmount, euroAmount;

    dollarAmount = prompt("Enter the amound in USD");

    euroAmount = dollarAmount * exchangeRate;

    alert(`${dollarAmount} USD = ${euroAmount.toFixed(3)} EUR as of 06.11.2019`);

    return false;
}
