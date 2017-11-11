const person = {
  name: 'Hoang',
  age: '21',
  location: {
    city: 'Little Elm',
    temp: 50
  }
}

// old school
// const name = person.name;
// const age = person.age;

// new school ES6 using object destructuring with default value, and custom local variable name
const {name: firstName = 'Anonymous', age} = person;
// new ES6 using object destructuring with custom variable name
const {city, temp: temperature} = person.location;

// old school
// console.log(`${person.name} is ${person.age}`);
// new es6 object destructuring
console.log(`${firstName} is ${age}`);
// new es6 object destructuring sub obj
if (city && temperature) {
  console.log(`It's ${temperature} in ${city}.`);  
}

const book = {
  title: 'Ego is the Enemy',
  author: 'Ryan Holiday',
  publisher: {
    name: 'Penguin'
  }
}

const {name: publisherName = 'Anonymous'} = book.publisher;

console.log(publisherName);