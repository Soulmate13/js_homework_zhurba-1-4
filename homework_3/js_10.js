// Игра «Угадай число». Предложить пользователю загадать число от 0 до 100 и отгадать его следующим способом: каждую итерацию цикла делите диапазон чисел пополам, записываете результат в N и спрашиваете у пользователя «Ваше число > N, < N или == N?». В зависимости от того, что указал пользователь, уменьшаете диапазон. Начальный диапазон от 0 до 100, поделили пополам и получили 50. Если пользователь указал, что его число > 50, то изменили диапазон на от 51 до 100. И так до тех пор, пока пользователь не выберет == N.

let hw_03_10 = document.getElementById("hw_03_10");

hw_03_10.onclick = function () {

    let start = 0;
    let end = 100;


    while (true) {

        let number = Math.floor((start + end) / 2);
        let result = prompt(`Is your number bigger than (b), less than (l) or equal to ${number}`);

        if (result == "=") {
            alert("Congratulations!");
            break;
        }

        if (result == "b") {
            start = number + 1;
        }

        if (result == "l") {
            end = number - 1;
        }


    }



    return false;
};