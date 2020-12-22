/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */

'use strict';
let latestFilm,
    estimationFilm;
const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '1');
latestFilm = prompt('Один из последних просмотренных фильмов?', '1');
estimationFilm = prompt('На сколько оцените его? от 1 до 5', '0');

console.log(numberOfFilms, latestFilm, estimationFilm);
const movies = {},
    actors = {},
    genres = [];

const personalMovieDB = {
    count: numberOfFilms,
    movies: movies,
    actors: actors,
    genres: genres,
    privat: false
};

movies['logan'] = '8.1';
movies['latestFilm'] = latestFilm;
movies['estimationFilm'] = estimationFilm;
personalMovieDB['movies'] = movies;
console.log(movies);
console.log(personalMovieDB);