"use strict";

let num = 50;
// циклы
// while (num <= 55) {
//     console.log(num);
//     num++;
// }

// do {
//     console.log(num);
//     num++;
// }
// while (num < 55);

// for (let i = 1; i < 8; i++) {
//     console.log(num);
//     num++;
// }

for (let i = 1; i < 10; i++) {
    if (i === 6) {
        // break; выход из цикла
        continue; // пропускает шаг цикла
    }
    console.log(i);
}

//let num = 52;
// тернарные операторы
// (num === 50) ? console.log('ok') : console.log('Error');

// точное сравнение
const num2 = 50;
switch (num2) {
    case 49:
        console.log('Неверно');
        break;
    case 100:
        console.log('Неверно');
        break;
    case 50:
        console.log('Верно!');
        break;
    default:
        console.log('Не в этот раз!');
        break;
}

showFirstMessage('Hello World!');

// Декларативный вызов функции, может вызываться до объявления
function showFirstMessage(text) {
    console.log(text);
}

const logger = function () {
    console.log('Hello');  
};
// Вызывается только после объявления
logger();

const calc = (a, b) => a + b;
console.log(calc);
