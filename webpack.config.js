const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/client/index.html',
  filename: 'index.html',
  inject: 'body'
});

module.exports = {
  entry: [
    './client/src/index.js'
  ],

  module: {
    loaders: [{
      include: __dirname + '/client',
      loader: 'babel-loader',
      test: /\.js$/
    }]
  },

  output: {
    filename: 'appBundle.js',
    path: __dirname + '/client/dist'
  },

  plugins: [
    HtmlWebpackPluginConfig
  ]
};
