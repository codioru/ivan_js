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

//to boolean
//false
//0, '', null, undefined, NaN
// true
let switcher = null;
if (switcher) {
    console.log('Working...');
}
// 2 
console.log(typeof (Boolean('4')));
// 3
console.log(typeof (!!('4')));


//Какое будет выведено значение: let x = 5; alert(x++); ?
let x = 5; console.log(x++);
// 5
//Чему равно такое выражение: [ ] + false - null + true ?
// [] + false - null + true;
// [] == ''; // это нужно запомнить.
console.log([] + false - null + true);
// NaN
//Что выведет этот код: let y = 1; let x = y = 2; alert(x); ?
let y = 1; let x = y = 2; console.log(x);
// 2
//Чему равна сумма [ ] + 1 + 2?
let s = [] + 1 + 2; console.log(s);
// 12
//Что выведет этот код: alert( "1"[0] )?
console.log('1'[0]);
// 1 // значение по интексу 0
//Чему равно 2 && 1 && null && 0 && undefined ?
if (2 && 1 && null && 0 && undefined) { console.log('true') };
// и запинается на лжи
// или запинается на правде

//Есть ли разница между выражениями? !!( a && b ) и (a && b)?
// есть
//Что выведет этот код: alert( null || 2 && 3 || 4 ); ?
// 3
//a = [1, 2, 3]; b = [1, 2, 3]; Правда ли что a == b ?
// не равны
//Что выведет этот код: alert( +"Infinity" ); ?
//
//Верно ли сравнение: "Ёжик" > "яблоко"?
// false
//Чему равно 0 || "" || 2 || undefined || true || falsе ?
// 2