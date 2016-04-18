module.exports = {
  entry: [
    './client/src/index.js'
  ],

  module: {
    loaders: [{
      include: __dirname + '/client/src',
      loader: 'babel'
    }]
  },

  output: {
    filename: 'appBundle.js',
    path: __dirname + '/client/src'
  }
};
