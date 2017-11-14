// entry point -> output bundle.js file

// require is built-in node function
const path = require('path');

console.log(path.join(__dirname, 'public'));

// node thing, allows node to see configs
// can't just use JSX inside webpack without babel
// created a rule for file that ends in .js not in node_modules, run thru babel
// created new rule to handle css and scss (style) loaders
module.exports = {
  entry: './src/playground/redux-expensify.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      loader: 'babel-loader',
      test: /\.js$/,
      exclude: /node_modules/
    }, {
      test: /\.s?css$/,
      use: [
        'style-loader',
        'css-loader',
        'sass-loader'
      ]
    }]
  },
  // LIFE HACK! source map shows exact file and line of code where error is in development
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    historyApiFallback: true
  }
};

// loader