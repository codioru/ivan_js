"use strict";
function first() {
    // fff
    setTimeout(function () {
        console.log(1);
    }, 500);
}

function second() {
    console.log(2);
}

first();
second();

function learnJS(lang, callback) {
    console.log(`Я учу: ${lang}`);
    callback();
}

function done() {
    console.log('Я прошел этот урок!');
}
learnJS('JavaScript', done);
    
// learnJS('JavaScript', function () {
//     console.log('Я прошел этот урок!')
// });

// 1 способ создания объекта
// const obj = new Object();
// 2 способ
const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function () {
        console.log('Test')
    }
};
// деструктуризация объекта
const { border, bg } = options.colors;
console.log(border);
//методы объекта
options.makeTest();
// console.log(options.name);
// delete options.name;
// console.log(options);
//for (let key of options) { // for of не перебирает объекты, только fot in работает перебор 
for (let key in options) {
    if (typeof (options[key]) === 'object') {
        for (let i in options[key]) {
            console.log(`Свойство ${key} имеет значение ${options[key][i]}`);
        }
    } else console.log(`Свойство ${key} имеет значение ${options[key]}`);
}
console.log(Object.keys(options));
console.log(Object.keys(options).length);



const arr = [2, 13, 26, 8, 10];
arr.sort(compareNum);
console.log(arr);
function compareNum(a, b) {
    return a - b;
}
//arr.pop(); // удаляет последний элемент
arr.push(10); // добавляет элемент в массив
arr.forEach(function (item, i, arr) {
    console.log(`${i}: ${item} внутри массива ${arr}`);
});
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
for (let value of arr) {
    console.log(value);
}
const str = prompt('', '');
const products = str.split(', ');
products.sort();
console.log(products.join('; '));