const path = require('path');

module.exports = {
  mode: 'development', // 'development' | 'production' | 'none',
  cache: true,
  devtool: false,
  performance: {
    hints: 'warning',
  },
  entry: './build/lib/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'build/src'),
  },
  resolve: {
    fallback: {
      path: false, //   require.resolve('path-browserify'),
      crypto: false, // require.resolve('crypto-browserify'),
      stream: false, // require.resolve('stream-browserify'),
      fs: false,
    },
  },
};
