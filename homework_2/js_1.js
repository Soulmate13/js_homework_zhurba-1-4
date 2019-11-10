// Запросить у пользователя его возраст и определить, кем он является: ребенком (0–12), подростком (12–18), взрослым (18_60) или пенсионером (60– ...).

let hw_02_1 = document.getElementById("hw_02_1");

hw_02_1.onclick = function () {

    let age;

    age = prompt("Enter your age");

    if ((0 < age) && (12 > age)) {

        alert("You are a child!");
    }

    else if ((12 <= age) && (18 > age)) {

        alert("You are a teenager!");
    }

    else if ((18 <= age) && (60 > age)) {

        alert("You are an adult!");
    }

    else if (60 <= age) {

        alert("You are retired!")
    }

    else {
        alert("Error! Please enter your real age in numbers!")
    }

    return false;
};