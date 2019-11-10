// Задать пользователю 3 вопроса, в каждом вопросе по 3 варианта ответа. За каждый правильный ответ начисляется 2 балла. После вопросов выведите пользователю количество набранных баллов.
let hw_02_9 = document.getElementById("hw_02_9");

hw_02_9.onclick = function () {

    let score, response, questions;

    questions = [
        {
            question: "What language is spoken in Argentina? \n (a) Argentinian \n (b) Portugese \n (c) Spanish ",
            answer: "c"
        },

        {
            question: "What language is spoken in Brazil? \n (a) Portugese \n (b) JavaScript (c) Brazilian",
            answer: "a"
        },

        {
            question: "What language is spoken in Greenland \n (a) Greenlandic \n (b) Icelandic \n (c) English",
            answer: "a"
        }
    ];

    score = 0;

    for (let i = 0; i < questions.length; i++) {
        response = window.prompt(questions[i].question);

        if (response == questions[i].answer) {
            score += 2;
            alert(`Correct! You have ${score} points.`);
        }

        else {
            alert(`Wrong! You have ${score} points.`)
        }
    }

    alert(`Thanks for playing! Total score: ${score} points`)

    return false;
};