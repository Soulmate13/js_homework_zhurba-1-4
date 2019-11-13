// Определить количество цифр в введенном числе.

let hw_03_4 = document.getElementById("hw_03_4");

hw_03_4.onclick = function () {

    let number, i;

    number = +prompt("Enter the number for digit evaluation");
    i = 0;

    while (number > 1) {
        number /= 10;
        i++;
    }

    alert(`Your number has ${i} digits`);

    return false;
};