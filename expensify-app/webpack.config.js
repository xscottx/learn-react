// entry point -> output bundle.js file

// require is built-in node function
const path = require('path');
// require webpack for bringing in new dev env variables
const webpack = require('webpack');
// required to extract css files into their own file
const ExtractTextPlugin = require('extract-text-webpack-plugin');

console.log(path.join(__dirname, 'public'));

// gets set in production, otherwise set to development
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

if (process.env.NODE_ENV === 'test') {
  console.log('test environment');
  require('dotenv').config({ path: '.env.test' });
} else if (process.env.NODE_ENV === 'development') {
  console.log('dev environment');
  require('dotenv').config({ path: '.env.development' });
}

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
      CSSExtract,
      new webpack.DefinePlugin({
        'process.env.FIREBASE_API_KEY': JSON.stringify(process.env.FIREBASE_API_KEY),
        'process.env.FIREBASE_AUTH_DOMAIN': JSON.stringify(process.env.FIREBASE_AUTH_DOMAIN),
        'process.env.FIREBASE_DATABASE_URL': JSON.stringify(process.env.FIREBASE_DATABASE_URL),
        'process.env.FIREBASE_PROJECT_ID': JSON.stringify(process.env.FIREBASE_PROJECT_ID),
        'process.env.FIREBASE_STORAGE_BUCKET': JSON.stringify(process.env.FIREBASE_STORAGE_BUCKET),
        'process.env.FIREBASE_MESSAGING_SENDER_ID': JSON.stringify(process.env.FIREBASE_MESSAGING_SENDER_ID)
      })
    ],
    // LIFE HACK! source map shows exact file and line of code where error is in development
    devtool: isProduction ? 'source-map' : 'inline-source-map',
    // devServer never writes files to the system
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