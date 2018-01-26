// entry point -> output bundle.js file

// require is built-in node function
const path = require('path');
// required to extract css files into their own file
const ExtractTextPlugin = require('extract-text-webpack-plugin');

console.log(path.join(__dirname, 'public'));

module.exports = (env) => {
  const isProduction = env === 'production';
  const CSSExtract = new ExtractTextPlugin('styles.css');

  console.log('env', env);
  return {
    entry: './src/app.js',
    output: {
      path: path.join(__dirname, 'public', 'dist'),
      filename: 'bundle.js'
    },
    module: {
      rules: [{
        loader: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      }, {
        test: /\.s?css$/,
        use: CSSExtract.extract({
          use: [
            {
              loader: 'css-loader',
              options: { 
                sourceMap: true
              }
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true
              }
            }
          ]
        })
      }]
    },
    plugins: [
      CSSExtract
    ],
    // LIFE HACK! source map shows exact file and line of code where error is in development
    devtool: isProduction ? 'source-map' : 'inline-source-map',
    devServer: {
      contentBase: path.join(__dirname, 'public'),
      historyApiFallback: true,
      publicPath: '/dist/'
    }
  }
}
// node thing, allows node to see configs
// can't just use JSX inside webpack without babel
// created a rule for file that ends in .js not in node_modules, run thru babel
// created new rule to handle css and scss (style) loaders
// module.exports = {
//   entry: './src/app.js',
//   output: {
//     path: path.join(__dirname, 'public'),
//     filename: 'bundle.js'
//   },
//   module: {
//     rules: [{
//       loader: 'babel-loader',
//       test: /\.js$/,
//       exclude: /node_modules/
//     }, {
//       test: /\.s?css$/,
//       use: [
//         'style-loader',
//         'css-loader',
//         'sass-loader'
//       ]
//     }]
//   },
//   // LIFE HACK! source map shows exact file and line of code where error is in development
//   devtool: 'cheap-module-eval-source-map',
//   devServer: {
//     contentBase: path.join(__dirname, 'public'),
//     historyApiFallback: true
//   }
// };

// loader