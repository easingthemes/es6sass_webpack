'use strict';

const myText = document.getElementById('mytext');
const dva = ' 2';
const te = [1, 3, ...dva];
myText.textContent = `Does it work? yes ${te}`;
console.log('app log');
