/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

// 1) Удалить все рекламные блоки со страницы (правая часть сайта)
const promoAdv = document.querySelectorAll('.promo__adv img');
promoAdv.forEach(item => {
    //console.log(item);
    item.remove();
});

//2) Изменить жанр фильма, поменять "комедия" на "драма"
const promoGenre = document.querySelector('.promo__genre'); // находим жанр
promoGenre.textContent = 'ДРАМА'; // изменяем контекст

//3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
const promoBg = document.querySelector('.promo__bg');
//promoBg.style.background = 'url("img/bg.jpg") top center/cover no-repeat';
promoBg.style.backgroundImage = 'url("img/bg.jpg")';
//        background: url('../img/mars.webp') center (center / cover) no-repeat;
//promoGenre.insertAdjacentHTML('beforebegin', '<img src="img/bg.jpg" alt="film picture"></img>');
//4) Список фильмов на странице сформировать на основании данных из этого JS файла. Отсортировать их по алфавиту 

// const mov = movieDB.movies.sort();
// console.log(mov);
// const promoInteractiveItem = document.querySelectorAll('.promo__interactive-item');
// let i = 0;
// promoInteractiveItem.forEach(item => {
//     item.textContent = `${i+1}. ${mov[i]}`;
//     i++;
// });
const movi = document.querySelector('.promo__interactive-list');
movi.innerHTML = '';
movieDB.movies.sort();
movieDB.movies.forEach((film, i) => {
    movi.innerHTML += `
    <li class="promo__interactive-item">${i+1}. ${film}
        <div class="delete"></div>
    </li>
    `;

});

// console.log(document.body);
// console.log(document.head);
//console.log(document.documentElement);
//console.log(document.body.childNodes); // получаем все ноды внутри родителя
//console.log(document.body.firstChild);
//console.log(document.body.firstElementChild);

// console.log(document.body.lastChild);
//console.log(document.querySelector('.promo__menu').parentNode.parentNode);
//console.log(document.querySelector('.promo__menu').parentElement);
for (let node of document.body.childNodes) {
    if (node.nodeName == '#text') {
        continue;
    }
    console.log(node);
};