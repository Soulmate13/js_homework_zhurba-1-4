// Написать конвертор валют.Пользователь вводит количество USD, выбирает, в какую валюту хочет перевести EUR, UAN или AZN, и получает в ответ соответствующую сумму.

let hw_02_6 = document.getElementById("hw_02_6");

hw_02_6.onclick = function () {

    const EUR_RATE = 0.907419;
    const UAH_RATE = 24.5994;
    const AUD_RATE = 1.45657;

    let amountUSD, currency, convertedAmount;

    amountUSD = +prompt("Enter your USD amount for convertion. Use numbers");
    currency = prompt("Enter currency you want to convert your amount to. EUR, UAH or AUD");

    switch (currency) {
        case "EUR":
            convertedAmount = amountUSD * EUR_RATE;
            alert(`${amountUSD} USD is equal to ${convertedAmount} EUR as of 09.11.2019`);
            break;

        case "UAH": convertedAmount = amountUSD * UAH_RATE;
            alert(`${amountUSD} USD is equal to ${convertedAmount} UAH as of 09.11.2019`);
            break;

        case "AUD": convertedAmount = amountUSD * AUD_RATE;
            alert(`${amountUSD} USD is equal to ${convertedAmount} AUD as of 09.11.2019`);
            break;

        default: alert("Error! Choose a valid currency name");
    }

    return false;
};