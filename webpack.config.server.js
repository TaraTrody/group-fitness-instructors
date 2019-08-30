const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');


const CURRENT_WORKING_DIR = process.cwd();

const config = {
  name: 'server',
  entry: [path.join(CURRENT_WORKING_DIR, './src/server/app.js')],
  context: path.resolve(CURRENT_WORKING_DIR, 'app'),
  target: 'node',
  output: {
    path: path.join(CURRENT_WORKING_DIR, '/dist/'),
    filename: 'main.js',
    publicPath: '/dist/',
    libraryTarget: 'commonjs2',
  },
  devtool: 'source-map',
  watch: true,
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      }
    ],
  },

};

module.exports = config;
