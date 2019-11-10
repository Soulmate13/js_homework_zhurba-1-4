// Запросить у пользователя число от 0 до 9 и вывести ему спецсимвол, который расположен на этой клавише (1–!, 2–@, 3–# и т. д).

let hw_02_2 = document.getElementById("hw_02_2");

hw_02_2.onclick = function () {

    let number;

    number = +prompt("Enter your keyboard number to get the symbol");

    switch (number) {

        case 1:
            alert("Your symbol is !");
            break;

        case 2:
            alert("Your symbol is @");
            break;

        case 3:
            alert("Your symbol is #");
            break;

        case 4:
            alert("Your symbol is $");
            break;

        case 5:
            alert("Your symbol is %");
            break;

        case 6:
            alert("Your symbol is ^");
            break;

        case 7:
            alert("Your symbol is &");
            break;

        case 8:
            alert("Your symbol is *");
            break;

        case 9:
            alert("Your symbol is (");
            break;

        case 0:
            alert("Your symbol is )");
            break;

        default:
            alert("Error! Please write the appropriate number!")
    }

    return false;
};