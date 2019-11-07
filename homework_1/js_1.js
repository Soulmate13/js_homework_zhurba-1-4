// Запросите у пользователя его имя и выведите в ответ: «Привет, его имя!».
let hw_01_1 = document.getElementById("hw_01_1");

hw_01_1.onclick = function () {
    let name;

    name = prompt("Enter your name");

    alert(`Hello, ${name}!`);

    return false;
};