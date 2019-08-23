const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = {
  plugins: [new CleanWebpackPlugin()],
  node: {
    fs: 'empty',
  },
  optimization: {
    usedExports: true,
    splitChunks: {
      chunks: 'all',
    },
  },
  entry: './build/src/debug.js',
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'build/dist/bundle'),
    filename: './[name].bundle.js',
  },
};
