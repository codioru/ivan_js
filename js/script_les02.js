"use strict";

//let num = 52;
// тернарные операторы
// (num === 50) ? console.log('ok') : console.log('Error');

// точное сравнение
const num = 50;
switch (num) {
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