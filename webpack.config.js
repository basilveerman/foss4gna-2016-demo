var path = require('path');
var webpack = require('webpack');

var APP_DIR = path.resolve(__dirname, 'src');
var BUILD_DIR = path.resolve(__dirname, 'dist');

var PORT = 3000;

var config = {
  entry: [
    path.resolve(APP_DIR + '/index.js')],

  output: {
    path: BUILD_DIR,
    filename: 'app.js',
  },

  module: {
    loaders: [{
      test: /\.(js|jsx)$/,
      loader: 'babel-loader',
      include: APP_DIR,
    }],
  },
};

module.exports = config;