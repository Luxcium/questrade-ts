const path = require('path');

module.exports = {
  entry: './build/js/questrade.amd.js',
  mode: 'development',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'build/dist'),
  },
  node: {
    fs: 'empty',
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
};
