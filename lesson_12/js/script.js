/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

'use strict';

document.addEventListener('DOMContentLoaded', () => {
        const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };

    const promoAdv = document.querySelectorAll('.promo__adv img'),
        promoBg = document.querySelector('.promo__bg'),
        promoGenre = document.querySelector('.promo__genre'),
        movieList = document.querySelector('.promo__interactive-list'),
        addForm = document.querySelector('form.add'),
        addInput = addForm.querySelector('.adding__input'),
        checkbox = addForm.querySelector('[type="checkbox"]');

    addForm.addEventListener('submit', (event) => {
        event.preventDefault(); // отменяет стандартное дейсвие по перезагрузке страницы при нажатии на кнопку.
        let newFilm = addInput.value;
        const favorite = checkbox.checked;
        console.log(newFilm);
        console.log(favorite);
        if (newFilm) {
            if (newFilm.length > 21) {
                newFilm = `${newFilm.substring(0, 22)}...`;
            }
            if (favorite) {
                console.log('Добавляем любимый фильм');
            }
            movieDB.movies.push(newFilm);
            sortArr(movieDB.movies);
            createMovieList(movieDB.movies, movieList);
        } else console.log('Фильм не введен и не будет записан!');
        
        addForm.reset();
        // event.target.reset();
    });
    
    const deleteAdv = (arr) => {
        arr.forEach(item => {
            item.remove();
        });

    };
    
    const makeChanges = () => { 
        promoGenre.textContent = 'драма'; // изменяем контекст
        promoBg.style.backgroundImage = 'url("img/bg.jpg")';
    };
    
    const sortArr = (arr) => { 
        arr.sort();
    };
    
    function createMovieList(films, parent) {
        sortArr(films);
        parent.innerHTML = '';
        films.forEach((film, i) => {
            parent.innerHTML += `
            <li class="promo__interactive-item">${i+1}. ${film}
                <div class="delete"></div>
            </li>
            `;
        });
        

        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);

                createMovieList(films, parent);
            });
        });
    }

    deleteAdv(promoAdv);
    makeChanges();
    createMovieList(movieDB.movies, movieList);


    //     onclick = function () {
    //     
    // };

    // console.log(document.body);
    // console.log(document.head);
    //console.log(document.documentElement);
    //console.log(document.body.childNodes); // получаем все ноды внутри родителя
    //console.log(document.body.firstChild);
    //console.log(document.body.firstElementChild);

    // console.log(document.body.lastChild);
    //console.log(document.querySelector('.promo__menu').parentNode.parentNode);
    //console.log(document.querySelector('.promo__menu').parentElement);
    // for (let node of document.body.childNodes) {
    //     if (node.nodeName == '#text') {
    //         continue;
    //     }
    //     console.log(node);
    // };

});