const express = require('express');
const webpack = require('webpack');
const config = require('../config/webpack.config.js');
const webpackDevMiddleware = require('webpack-dev-middleware');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpackhotmodulereplacement = require("webpack-hot-middleware");
const app = express();
config.output.publicPath = '/';
var compiler = webpack(config);
var devmiddleware = webpackDevMiddleware(compiler, {
	publicPath: config.output.publicPath,
	watchOptions: {
		aggregateTimeout: 300,
		poll: 1000
	}
});
var hotreload = webpackhotmodulereplacement(compiler);
app.use(devmiddleware);
app.use(hotreload);
app.listen(3000, function () {
	console.log('Example app listening on port 3000!\n');
});
