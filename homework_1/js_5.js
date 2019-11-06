// Запросите у пользователя расстояние в км между двумя городами и за сколько часов он хочет добраться. Посчитайте скорость, с которой необходимо двигаться, чтобы успеть вовремя.

let distance, expectedHours, minimalSpeed;

distance = +prompt("What is the distance between the cities in km?");
expectedHours = +prompt("How many hours do you want your journey to take");

minimalSpeed = distance / expectedHours;
minimalSpeed = Math.round(minimalSpeed);

alert(`If you want to be on time you should drive at the speed not less than ${minimalSpeed} km/hour`);