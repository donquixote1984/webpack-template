const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');
module.exports = {
  entry: {
  	app: './src/index.js',
  	vendors: ['jquery']
  },
  output: {
  	path: path.resolve(__dirname, 'dist'),
  	filename: '[name].js'
  },
  module: {
  	rules: [
  		{
  			test: /\.scss$/,
  			use: ['style-loader', 'css-loader', 'sass-loader']
  		}, 
  		{
  			test: /\.js$/,
  			use: ['babel-loader']
  		}
  	]
  },
  devServer: {
  	contentBase: './dist'
  },
  plugins: [
  	new HtmlWebpackPlugin({template: './src/index.html'})
  ],
  devtool:'sourcemap',
  mode: 'production'||'development'
};