// entry point -> output bundle.js file

// require is built-in node function
const path = require('path');

console.log(path.join(__dirname, 'public'));

// node thing, allows node to see configs
module.exports = {
  entry: './src/app.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  }
};