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

// Array destructuring

const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];

// creates vars for 4 element array
// const [street, citee, state, zip] = address;

// creates vars for X element array
// const [, , state] = address;

// creates vars for X element array w/ initializer
const [, , state = 'New York'] = address;
console.log(`you are in ${state}`);

// challenge
const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [name, , medium] = item;
console.log(`A medium ${name} costs ${medium}`);