'use strict';

const box = document.getElementById('box'),
    btns = document.getElementsByTagName('button'),
    circles = document.getElementsByClassName('circle'),
    wrapper = document.querySelector('.wrapper'),
    hearts = wrapper.querySelectorAll('.heart'),
    oneHeart = wrapper.querySelector('.heart');

// box.style.backgroundColor = 'blue';
// box.style.width = '500px';
box.style.cssText = 'background-color: blue; width: 500px';
btns[1].style.borderRadius = '100%';
//circles.style.backgroundColor = 'red'; так делать не нужно, так как это массив
circles[0].style.backgroundColor = 'red';

// for (let i = 0; i < hearts.length; i++) {
//     hearts[i].style.backgroundColor = 'blue';
// }
hearts.forEach(item => {
    item.style.backgroundColor = 'grey';
});

const div = document.createElement('div'); // элемент создается в js
const text = document.createTextNode('Тут был я');

div.classList.add('black');

wrapper.append(div);
//wrapper.appendChild(div); // устаревший
//wrapper.insertBefore(div, hearts[2]); //устаревший
//wrapper.removeChild(hearts[1]); // устаревший
//wrapper.replaceChild(circles[0], hearts[0]); // устаревший
//wrapper.prepend(div);
//hearts[0].before(div);
//hearts[0].after(div);

//document.body.append(div);

//circles[0].remove();
hearts[0].replaceWith(circles[0]);

div.innerHTML = '<h1>Hello World!</h1>';
//div.textContent = 'Hello';
//div.insertAdjacentHTML("beforebegin", '<h1>Hello</h1>');
div.insertAdjacentHTML("afterend", '<h1>Hello</h1>');