// Запросите у пользователя длину стороны квадрата и выведите периметр такого квадрата.
let hw_01_3 = document.getElementById("hw_01_3");

hw_01_3.onclick = function () {

    let squareSide, squarePerimeter;

    squareSide = +prompt("Enter square side")

    squarePerimeter = (Math.imul(squareSide, 4));

    alert(`Perimeter of the square is ${squarePerimeter}`);

    return false;
}

