const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');
module.exports = {
  entry: {
  	app: './src/index.js'
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
  			use: ['babel-loader'],
        exclude: /node_modules/
  		}
  	]
  },
  devServer: {
      contentBase: [path.join(__dirname, 'dist'), path.join(__dirname, 'src/models'), path.join(__dirname, 'src/js/lib')]
  },
  plugins: [
  	new HtmlWebpackPlugin({template: './src/index.html', inject: true})
  ],
  devtool:'sourcemap',
  mode: 'production'||'development'
};