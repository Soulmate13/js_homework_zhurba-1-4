// Написать функцию, которая принимает длину и ширину прямоугольника и вычисляет его площадь. Если в функцию передали 1 параметр, то она вычисляет площадь квадрата.

let hw_04_4 = document.getElementById("hw_04_4");

hw_04_4.onclick = function () {

    let rectLength, rectHeight, rectArea, CaclucateArea;

    rectLength = +prompt("Enter rectangle length to calculate the area");
    rectHeight = +prompt("Enter rectange height  to calculate the area");

    CaclucateArea = function (_rectLength, _rectHeight) {

        if (_rectLength === 0) {
            rectArea = _rectHeight * _rectHeight;
            alert(`The area of the rectangle is ${rectArea}`);
        }

        else if (_rectHeight === 0) {
            rectArea = _rectLength * _rectLength;
            alert(`The area of the rectangle is ${rectArea}`);
        }

        else {

            rectArea = _rectLength * _rectHeight;
            alert(`The area of the rectangle is ${rectArea}`);
        }
    }

    CaclucateArea(rectLength, rectHeight);

    return false;
};