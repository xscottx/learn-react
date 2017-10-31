// arguments object - no longer bound with arrow functions
const add = function(a, b) {
    console.log(arguments);
    return a + b;
};

const addArrowSpread = (a, b) => {
    // console.log(arguments); // no longer have access to this in ES6 if u try to access a parameter not in arrow function definition
    return a + b;
};
const addArrow = (a, b) => a + b;

console.log(add(1,1));
console.log(add(1,1,1001));
console.log(addArrow(1,1));
console.log(addArrow(1,2,1001));
console.log(addArrowSpread(1,2,1001));


// this keyword - no longer bound
const user = {
    name: 'Hoang',
    cities: ['Euless', 'Austin'],
    printPlacesLived() {    // alternative to below but u can do this to define function
    // printPlacesLived: function() {  
        // this.name does exist in function
        return this.cities.map((city) => {
            return this.name + ' has lived in ' + city;
        });
        console.log(this.name);
        console.log(this.cities);

        // this.name does not exist inside funtion
        return cityMessages;
        // this.cities.forEach((city) => {
        //     console.log(this.name + ' has lived in ' + city);
        // });
    }
};

console.log(user.printPlacesLived());

// Challenge area

const multiplier = {
    // numbers - array of numbers
    // multiplyBy - single number
    // multiply - return a new array where the number has been multiplied
    numbers: [1, 2, 3, 4, 5],
    multiplyBy: 2,
    multiply() {
        return this.numbers.map((number) => number * this.multiplyBy);
    }
};

console.log(multiplier.multiply());