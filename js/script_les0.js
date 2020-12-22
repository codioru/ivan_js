"use strict";
let number = 1;
const mes = 12;
//alert('В году ' + mes + ' месяцев');
//const result = confirm('Дела хорошо идут?');
//const answer = prompt('Вам есть 18?', '18');
//const answer = +prompt('Вам есть 18?', '18');
//console.log(typeof(answer));

const answers = [];
answers[0] = prompt('Как Вас зовут?', 'Serg');
answers[1] = prompt('Как Ваша фамилия?', 'vvv');
answers[2] = prompt('Сколько Вам лет?', '44');
//document.write(answers);
console.log(typeof (answers));
console.log(typeof (null)); // тоже выводит объект!
console.log(typeof 42);
// expected output: "number"

console.log(typeof 'blubber');
// expected output: "string"

console.log(typeof true);
// expected output: "boolean"

console.log(typeof undeclaredVariable);
// expected output: "undefined"

const obj = {
    a: 50
};

obj.a = 10;

console.log(obj);

 // Интерполяция - возможность встраивать переменные внутри строки

const category = 'toys';
//console.log('https://someurl.com/' + category + '')
console.log(`https://someurl.com/${category}/5`);
const  user = 'Ivan';
alert(`Привет, ${user}`);

let incr = 10;
decr = 10;
//++incr;
//--decr;

console.log(incr++);
console.log(decr--);
console.log(5 % 2); // остаток от деления
// && логическое и
// || логическое или
// ! отрицание оператор