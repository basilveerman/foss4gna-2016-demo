var path = require('path');
var webpack = require('webpack');

var APP_DIR = path.resolve(__dirname, 'src');
var BUILD_DIR = path.resolve(__dirname, 'dist');

var PORT = 3000;

var config = {
  entry: [
    'webpack-dev-server/client?http://localhost:' + PORT,
    'webpack/hot/only-dev-server',
    path.resolve(APP_DIR + '/index.js')],

  output: {
    path: BUILD_DIR,
    filename: 'app.js',
  },

  module: {
    loaders: [{
      test: /\.(js|jsx)$/,
      loader: 'react-hot!babel-loader',
      include: APP_DIR,
    }],
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ],

  devServer: {
    contentBase: APP_DIR,
    historyApiFallback: true,
    hot: true,
    port: PORT,
    noInfo: false
  },
};

module.exports = config;