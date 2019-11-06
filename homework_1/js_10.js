// Пользователь вводит сумму вклада в банк на 2 месяца, с процентной ставкой депозита 5% годовых. Вывести сумму начисленных процентов.
const rate = 0.05;

let deposit, interestAccrued;

deposit = prompt("Enter your deposit amount for 2 month in USD")

interestAccrued = deposit * rate * 1 / 6;

alert(`Your interest accrued is going to amount to ${interestAccrued.toFixed(3)} in two months`);