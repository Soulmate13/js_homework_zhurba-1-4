// Пользователь вводит сумму денег в кошельке и цену одной шоколадки. Программа выводит, сколько шоколадок может купить пользователь, и сколько сдачи у него останется.
const priceChocolate = 10;

let amount, numberChocolate, amountLeft;

amount = +prompt("How much money is in your pockets (in dollars)?");

if (amount <= 9) alert(`Not enough cash for a chocolate bar`);
else

    numberChocolate = amount / priceChocolate;
amountLeft = amount % priceChocolate;

alert(`You can buy ${numberChocolate.toFixed(0)} chocolate bar(s) and still have ${amountLeft} dollar(s) in your pockets`);

