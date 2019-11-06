// Запросите у пользователя радиус окружности и выведите площадь такой окружности.

let circleRadius, circleArea;

circleRadius = prompt("Enter the radius of the circle in cm");

circleArea = Math.PI * Math.pow(circleRadius, 2);

alert(`Circle area is ${circleArea.toFixed(3)} sq cm`);