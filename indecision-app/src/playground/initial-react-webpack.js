// import subtract, {square, add} from './utils'; // subtract is default export, square and add are named exports
import sub, {square, add} from './utils'; // default export allows u to change to an alias
import isSenior, {isAdult, canDrink} from './person';
import validator from 'validator';
import React from 'react';
import ReactDOM from 'react-dom';

console.log('app.js is running');
console.log('square: ' + square(4));
console.log('add: ' + add(4, 2));
console.log('subtract: ' + sub(4, 2));
console.log('isAdult: ' + isAdult(18));
console.log('canDrink: ' + canDrink(21));
console.log('isSenior: ' + isSenior(65));

console.log('validator-email: ' + validator.isEmail('test'));
console.log('validator-email: ' + validator.isEmail('test@gmail.com'));

const template = <p>THIS IS JSX FROM WEBPACK</p>;

ReactDOM.render(template, document.getElementById('app'));  // app id from div's id