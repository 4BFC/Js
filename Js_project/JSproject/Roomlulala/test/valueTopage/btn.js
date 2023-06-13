const Pbtn = document.querySelector('.plus');
const Mbtn = document.querySelector('.minus');

const value = document.querySelector('span');

window.localStorage.setItem('count', '0');
let count = window.localStorage.getItem('count');



Pbtn.addEventListener('click', () => { count++; value.innerText = count; console.log(count); });
Mbtn.addEventListener('click', () => { count--; value.innerText = count; console.log(count); })