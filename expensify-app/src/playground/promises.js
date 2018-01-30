// Promise notes: 
// 0. a way to sync up async tasks
// 1. can only resolve or reject once, anything after 1st resolve/reject will be ignored
// 2. u can register multiple callbacks (or handlers) to a promise
// 3. can only pass in 1 param to resolve, if need multiple elements pass into object
// 4. when promises are rejected, they by default show up as exception in browser
// 4a. need to throw in a 'catch' to properly handle
// 4b. can handle error without explicitly calling 'catch', and just using another parameter into 'then'
// 5. MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises

const promise = new Promise((resolve, reject) => {
  // Long running async task here
  setTimeout(() => {
    resolve({
      name: 'Scott',
      age: 21
    });
  }, 5000);

})

console.log('before');

// register callback
promise.then((data) => {
  console.log('1', data);

  // returning a string for the next promise
  // return 'some data';

  // returning a promise to ensure it's the success case passed in
  return new Promise((resolve, reject) => {
    // Long running async task here
    setTimeout(() => {
      resolve('This is my other promise')      
    }, 5000);
  
  });
}).then((str) => {
  console.log('does this run?', str);
}).catch((error) => {
  console.log('error: ', error);
});

console.log('after');