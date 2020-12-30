'use strict';
const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice();
newArray[1] = 'assdrfefvrv';
console.log(newArray);
console.log(oldArray);

const video = ['youtube', 'vimeo', 'rutube'],
    blogs = ['wordpress', 'lifejournal', 'blogger'],
    internet = [...video, ...blogs, 'vk', 'facebook'];
console.log(internet);

function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}
const num = [2, 5, 7];
log(...num);

const array = ['a', 'b'];
const newAarray = [...array];
console.log(newAarray);

const q = {
    one: 1,
    two: 2
};
const newObj = { ...q };
console.log(newObj);