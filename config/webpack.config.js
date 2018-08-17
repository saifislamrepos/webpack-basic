const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const cleanWebpackPlugin = require('clean-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const HotModuleReplacementPlugin = require("webpack-hot-middleware");
function resolve (dir) {
	return path.join(__dirname, '..', dir)
  }
module.exports = {
	mode : 'development',
	entry: ['./src/index.js', "./build/client.js"],
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, '../dist')
	},
	plugins: [
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: 'index_tem.html',
			inject: true
		}),
		new cleanWebpackPlugin('dist'),
		new webpack.HotModuleReplacementPlugin(),
		new ManifestPlugin()
	],
	devtool: '#cheap-module-eval-source-map',
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [{
						loader: 'style-loader/url'
					},
					{
						loader: 'file-loader'
					}
				]
			},
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/
			}
		]
	}
};