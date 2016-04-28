/* eslint-disable no-var */
var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var env = process.env.WEBPACK_ENV;

var config = {};
var testModule;

var output = {
	path: path.join(__dirname, 'dist'),
	filename: 'bundle.js',
};

switch (env) {

case ('prod'):
	config.entry = [
		'./src/js/main',
	];
	config.plugins = [
		new webpack.optimize.UglifyJsPlugin({
			compressor: { warnings: false },
		}),
		new webpack.optimize.OccurenceOrderPlugin(),
	];
	break;

case ('dev'):
	config.entry = [
		'webpack-dev-server/client?http://localhost:8080',
		'webpack/hot/dev-server',
		'./src/js/main',
	];
	config.plugins = [
		new webpack.HotModuleReplacementPlugin(),
	];
	config.devServer = {
		contentBase: './dist',
		// hot: true,
		historyApiFallback: true,
	};
	break;

case ('test'):
	testModule = {
		loaders: [{
			test: /\.js$/,
			exclude: /\/node_modules\//,
			loader: 'babel',
		}],
	};
	config.externals = {
		cheerio: 'window',
		'react/lib/ExecutionEnvironment': true,
		'react/lib/ReactContext': true,
		'react/addons': true,
	};
	break;
default:
	break;
}

if (env !== 'test') {
	config.plugins.push(
		new HtmlWebpackPlugin({
			template: './src/index.html',
		}),
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify(env),
		})
	);
}

config.devtool = env === 'prod' ? 'source-map' : 'inline-source-map';

config.output = env === 'test' ? null : output;

config.resolve = {
	root: path.resolve(__dirname),
	alias: {
		components: 'src/js/Components',
		helpers: 'src/js/Helpers',
		services: 'src/js/Services',
		app: 'src/js',
	},
	extensions: ['', '.js', '.jsx'],
};

config.module = env === 'test' ? testModule : {
	loaders: [{
		test: /\.scss$/,
		loaders: ['style', 'css', 'sass'],
	}, {
		test: /\.js$/,
		exclude: /node_modules\/(?!(stardust))/,
		loader: 'babel',
		query: {
			cacheDirectory: true,
			presets: ['es2015', 'react', 'stage-2'],
		},
	}],
};

module.exports = config;
