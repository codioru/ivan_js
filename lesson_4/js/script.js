/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

'use strict';
let numberOfFilms;
function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    };
}
start();
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
    const a = prompt('Один из последних просмотренных фильмов?', ''),
          b = prompt('На сколько оцените его?', '');

    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('done');
    } else {
        console.log('error');
        i--;
    }
    }
}

rememberMyFilms();

function rememberMyFilms2() {
    let num = 0;
    let latestFilm = '',
        estimationFilm = '';
    while (num < 2) {
        do {
            latestFilm = prompt('Один из последних просмотренных фильмов?', '');
            estimationFilm = prompt('На сколько оцените его?', '');
        }
        while (latestFilm == null || estimationFilm == null || latestFilm == '' || estimationFilm == '' || latestFilm.length >= 50);

        num++;
        console.log(num);
        personalMovieDB.movies[latestFilm] = estimationFilm;
    }
}

function detectPerconalLevel() {
    if (personalMovieDB.count < 10) {
        alert('Просмотрено довольно мало фильмов!');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
        alert('Вы классический зритель!');
    } else if (personalMovieDB.count > 30) {
        alert('Вы киноман!');
    } else alert('Error!');

}

detectPerconalLevel();

function writeYourGenres() {
    let genre;
    for (let i = 1; i <= 3; i++) {
        genre = prompt(`Ваш любимый жанр под номером ${i}`, '');
        personalMovieDB.genres.push(genre);
    }
}

writeYourGenres();

function showMyDB() {
    if (personalMovieDB.privat === false) {
        console.log(personalMovieDB);
    } else console.log(personalMovieDB.privat);
}
showMyDB();