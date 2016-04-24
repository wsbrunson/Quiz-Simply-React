var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	devtool: 'source-map',

	entry: ['./src/js/main'],

	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'bundle.js'
	},

	plugins: [
		new webpack.optimize.UglifyJsPlugin({
			compressor: {
				warnings: false
			}
		}),
		new webpack.optimize.OccurenceOrderPlugin(),
		new HtmlWebpackPlugin({
			template: './src/index.html'
		}),
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify('production')
		})
	],

	module: {
		loaders: [{
			test: /\.scss$/,
			loaders: ['style', 'css', 'sass']
		}, {
			test: /\.js$/,
			exclude: /node_modules\/(?!(stardust))/,
			loader: 'babel',
			query: {
				cacheDirectory: true,
				presets: ['es2015', 'react', 'stage-2']
			}
		}]
	}
};
