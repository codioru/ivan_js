/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/

'use strict';

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },
    rememberMyFilms: function() {
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
    },
    rememberMyFilms2: function() {
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
    },
    detectPerconalLevel: function() {
        console.log('count '+ personalMovieDB.count);
        if (personalMovieDB.count < 10) {
            alert('Просмотрено довольно мало фильмов!');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
            alert('Вы классический зритель!');
        } else if (personalMovieDB.count > 30) {
            alert('Вы киноман!');
        } else {
            alert('Error!');
        }
    },
    writeYourGenres: function() {
        for (let i = 1; i <= 3; i++) {
            let genr = prompt(`Ваш любимый жанр под номером ${i}`, ''); 
            if (genr == '' || genr == null) {
                console.log('Вы ввели некорректные данные или не ввели вообще!')
                i-- ;
            } else personalMovieDB.genres.push(genr);     
        };
        personalMovieDB.genres.forEach(function (item, i) {
            console.log(`Любимый жанр # ${i+1} - это ${item}`);
        })
    },
    writeYourGenres2: function() {
        for (let i = 1; i < 2; i++) {
            let genr = prompt("Введите любимые жанры через запятую", '').toLowerCase(); 
            if (genr == '' || genr == null) {
                console.log('Вы ввели некорректные данные или не ввели вообще!')
                i--;
            } else {
                personalMovieDB.genres = genr.split(', ');
                personalMovieDB.genres.sort();
            }
        };
        personalMovieDB.genres.forEach(function (item, i) {
            console.log(`Любимый жанр # ${i+1} - это ${item}`);
        })
    },
    showMyDB: function() {
        if (personalMovieDB.privat == false) {
            console.log(personalMovieDB);
        } else console.log(personalMovieDB.privat);
    },
    toggleVisibleMyDB: function() {
        personalMovieDB.privat = !personalMovieDB.privat;
    },
    
};

personalMovieDB.start();
personalMovieDB.rememberMyFilms();
personalMovieDB.detectPerconalLevel();
personalMovieDB.writeYourGenres2();
personalMovieDB.showMyDB();
personalMovieDB.toggleVisibleMyDB();
personalMovieDB.showMyDB();

