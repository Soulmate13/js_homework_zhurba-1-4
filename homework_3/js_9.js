// Вывести таблицу умножения для всех чисел от 2 до 9. Каждое число необходимо умножить на числа от 1 до 10.

let hw_03_9 = document.getElementById("hw_03_9");

hw_03_9.onclick = function () {

    let desk = document.getElementById("desk1");
    let table = document.createElement("table");
    desk.appendChild(table);

    for (let i = 1; i < 11; i++) {

        let row = document.createElement("tr")
        table.appendChild(row);

        for (let j = 2; j < 10; j++) {
            let data = document.createElement("td");
            data.style.paddingRight = "15px"
            data.innerText = `${j} * ${i} = ${j * i}`;
            row.appendChild(data);
        }

    }

    return false;
};