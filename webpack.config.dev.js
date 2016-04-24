/* eslint-disable no-var */
var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
/* eslint-enable no-var */

module.exports = {
	devtool: 'inline-source-map',

	entry: [
		'webpack-dev-server/client?http://localhost:8080',
		'webpack/hot/dev-server',
		'./src/js/main',
	],
	
	resolve: {
		root: path.resolve(__dirname),
		alias: {
			components: 'src/js/Components',
			TakeQuizComponent: '/src/js/Components/TakeQuiz/TakeQuizComponent',
			helpers: 'src/js/Helpers',
			services: 'src/js/Services',
			app: 'src/js'
		},
		extensions: ['', '.js', '.jsx']
	},

	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'bundle.js',
	},

	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new HtmlWebpackPlugin({
			template: './src/index.html',
		}),
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify('development'),
		}),
	],

	module: {
		preLoaders: [
			{ test: /\.jsx?$/, loader: 'eslint', exclude: /node_modules/ }
    ],
		loaders: [{
			test: /\.scss$/,
			loaders: ['style', 'css', 'sass'],
		}, {
			test: /\.js$/,
			exclude: /node_modules\/(?!(stardust))/,
			loader: 'babel',
			query: {
				cacheDirectory: true,
				plugins: [
					'transform-decorators-legacy',
				],
				presets: ['es2015', 'react', 'stage-2'],
			},
		}],
	},
	
	eslint: {
		failOnWarning: true,
		failOnError: true,
  },

	devServer: {
		contentBase: './dist',
		// hot: true,
		historyApiFallback: true,
	},
};
