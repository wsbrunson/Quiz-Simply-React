var webpackConfig = require('./webpack.config.dev.js');

module.exports = function(config) {
	config.set({
		basePath: '',

		colors: true,

		frameworks: ['jasmine'],

		files: [
			'src/js/**/*.spec.js'
		],

		preprocessors: {
			'src/js/**/*.spec.js': ['webpack', 'sourcemap']
		},

		plugins: [
			require('karma-webpack'),
			require('karma-jasmine'),
			require('karma-phantomjs-launcher'),
			require('karma-coverage'),
			require('karma-spec-reporter'),
			require('karma-sourcemap-loader')
		],

		browsers: [
			'PhantomJS'
		],

		reporters: [
			'spec',
			'coverage'
		],
		coverageReporter: {
			dir: 'build/reports/coverage',
			reporters: [
				{ type: 'html', subdir: 'report-html' },
				{ type: 'lcov', subdir: 'report-lcov' },
				{ type: 'cobertura', subdir: '.', file: 'cobertura.txt' }
			]
		},
		// webpack: {
		// 	resolve: {
		// 		extensions: ['', '.js']
		// 	},
		// 	module: {
		// 		loaders: [{
		// 			test: /\.(js|jsx)$/, exclude: /(bower_components|node_modules)/,
		// 			loader: 'babel-loader'
		// 		}]
		// 	}
		// },
		webpack: webpackConfig,

		webpackMiddleware: {
			noInfo: true,
			stats: {
				colors: true
			}
		}
	});
};
