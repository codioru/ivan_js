"use strict";
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
