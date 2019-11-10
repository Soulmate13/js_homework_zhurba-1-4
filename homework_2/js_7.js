// Запросить у пользователя сумму покупки и вывести сумму к оплате со скидкой: от 200 до 300 – скидка будет 3%, от 300 до 500 – 5%, от 500 и выше – 7%.
let hw_02_7 = document.getElementById("hw_02_7");

hw_02_7.onclick = function () {

    let price, discountedPrice;

    price = +prompt("Enter your price to calculate the discounted price");

    if ((price > 0) && (price < 200)) {

        discountedPrice = price;

        alert(`Your discounted price amounts to ${discountedPrice}`);
    }

    else if ((price >= 200) && (price < 300)) {

        discountedPrice = price - price * 0.03;

        alert(`Your discounted price amounts to ${discountedPrice.toFixed(2)}`)
    }

    else if ((price <= 300) && (price < 500)) {

        discountedPrice = price - price * 0.05;

        alert(`Your discounted price amounts to ${discountedPrice.toFixed(2)}`)
    }

    else if (price >= 500) {

        discountedPrice = price - price * 0.07;

        alert(`Your discounted price amounts to ${discountedPrice.toFixed(2)}`)
    }

    else {
        alert("Error! A price should be entered as a number!")
    }

    return false;
};
