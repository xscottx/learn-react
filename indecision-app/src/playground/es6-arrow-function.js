const square = function(x) {
    return x * x;
};

// arrow functions are anonymous
// arrow functions implicitly perform a 'return'
const squareArrow = (x) => x * x;

// console.log(square(8));
console.log(squareArrow(8));

const getFirstNameES5 = (name) => {
    return name.split(' ')[0];
}
// ES6
const getFirstName = (name) => name.split(' ')[0];

console.log(getFirstNameES5('Hoang Vo'));
console.log(getFirstName('Hoang Vo'));