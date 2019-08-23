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
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'build/dist'),
    filename: './[name].bundle.js',
  },
};
