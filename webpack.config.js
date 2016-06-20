var path = require('path');
var webpack = require('webpack');

var ExtractTextPlugin = require('extract-text-webpack-plugin');

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
    }, {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract('style-loader', 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'),
    }, {
        test: /\.(png|jpg)$/,
        loader: 'url-loader?limit=10000',
    }],
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new ExtractTextPlugin('style.css', { allChunks: true }),
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
