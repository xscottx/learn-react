console.log('utils.js is running');

// export const square = (x) => x * x;  // named export alt.
const square = (x) => x * x;
// export const add = (a, b) => a + b;  // named export alt.
const add = (a, b) => a + b;

// export default const subtract = (a, b) => a - b; <- DOES NOT WORK
// export default (a, b) => a - b; <- WORKS

const subtract = (a, b) => a - b;
// 2 types of exports
// 1. default export
// 2. named export

// export default subtract;  // default export syntax alt.

export { 
  square, 
  add , 
  subtract as default 
};  // mixed named export style, w/ default export