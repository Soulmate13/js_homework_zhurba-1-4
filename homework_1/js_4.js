// Запросите у пользователя радиус окружности и выведите площадь такой окружности.
let hw_01_4 = document.getElementById("hw_01_4");

hw_01_4.onclick = function () {

    let circleRadius, circleArea;

    circleRadius = prompt("Enter the radius of the circle in cm");

    circleArea = Math.PI * Math.pow(circleRadius, 2);

    alert(`Circle area is ${circleArea.toFixed(3)} sq cm`);

    return false;
}