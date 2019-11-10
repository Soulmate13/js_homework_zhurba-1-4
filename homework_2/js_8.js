// Запросить у пользователя длину окружности и периметр квадрата. Определить, может ли такая окружность поместиться в указанный квадрат.

// When a circle is inscribed in a square, the diameter of the circle is equal to the side length of the square.

let hw_02_8 = document.getElementById("hw_02_8");

hw_02_8.onclick = function () {

    let circleLength, squarePerimeter, squareSide, cirlceDiameter;

    circleLength = +prompt("Enter circle circumference for checking");

    squarePerimeter = +prompt("Enter square perimeter for checking");

    squareSide = squarePerimeter / 4;

    cirlceDiameter = circleLength / Math.PI;

    alert((squareSide >= cirlceDiameter) ? "The circle can fit inside this square" : "The circle cannot fit inside this square");

    return false;
};