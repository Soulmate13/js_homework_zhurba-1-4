// Запросите у пользователя год его рождения, посчитайте, сколько ему лет и выведите результат. Текущий год укажите в коде как константу.

const currentYear = 2019;

let birthYear, yearsOld;

birthYear = +prompt("What year were you born?");

yearsOld = currentYear - birthYear;

alert(`You are ${yearsOld} years old, congratulations!`);