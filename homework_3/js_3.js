// Запросить у пользователя число и вывести все делители этого числа.

let hw_03_3 = document.getElementById("hw_03_3");

hw_03_3.onclick = function () {

    let number, buffer, i;

    number = +prompt("Enter number to check for dividers");
    i = 0;
    buffer = ``;

    while (i <= number) {

        if ((number % i) == 0) {
            buffer += `${i} `;
            i++;
            continue;
        }

        else {
            i++;
            continue;
        }

    }
    alert(`Your dividers are as follows ${buffer}`);
    return false;
};