/* eslint-disable no-var */
var path = require('path');

module.exports = function webpackConfig(config) {
	config.set({
		basePath: '',
		frameworks: ['jasmine'],
		files: [
			'test/*.spec.js',
			// 'test/test_index.js',

		],

		preprocessors: {
			'src/js/*.js': ['webpack', 'sourcemap'],
			'test/*.spec.js': ['webpack', 'sourcemap'],
			// 'test/test_index.js': ['webpack', 'sourcemap'],
		},

		webpack: {
			devtool: 'inline-source-map',
			alias: {
				cheerio: 'cheerio/lib/cheerio',
			},
			module: {
				loaders: [{
					test: /\.js$/,
					loader: 'babel',
					query: {
						presets: ['airbnb'],
					},
					exclude: path.resolve(__dirname, 'node_modules'),
				}, {
					test: /\.json$/,
					loader: 'json',
				},
			],
			},
			externals: {
				cherrio: 'window',
				'react/lib/ExecutionEnvironment': true,
				'react/lib/ReactContext': 'window',
				'react/addons': true,
			},
		},

		webpackServer: {
			noInfo: true,
		},

		plugins: [
			'karma-webpack',
			'karma-jasmine',
			'karma-sourcemap-loader',
			'karma-phantomjs-launcher',
			'karma-spec-reporter',
			'karma-chrome-launcher',
		],

		babelPreprocessor: {
			options: {
				presets: ['airbnb'],
			},
		},

		reporters: ['spec'],
		port: 9876,
		colors: true,
		logLevel: config.LOG_INFO,
		autoWatch: true,
		browsers: ['Chrome'],
		singleRun: false,
	});
};
