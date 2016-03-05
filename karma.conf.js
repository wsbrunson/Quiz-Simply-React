/* eslint-disable no-var */
var webpackConfig = require('./webpack.config.dev.js');
/* eslint-enable no-var */

module.exports = function webpackConfigFunction(config) {
	config.set({
		basePath: '',

		colors: true,

		frameworks: ['jasmine'],

		files: [
			'src/js/**/*.spec.js',
		],

		preprocessors: {
			'src/js/**/*.spec.js': ['webpack', 'sourcemap'],
		},

		plugins: [
			require('karma-webpack'),
			require('karma-jasmine'),
			require('karma-phantomjs-launcher'),
			require('karma-coverage'),
			require('karma-spec-reporter'),
			require('karma-sourcemap-loader'),
		],

		browsers: ['PhantomJS'],

		reporters: [
			'spec',
			'coverage',
		],
		coverageReporter: {
			dir: 'build/reports/coverage',
			reporters: [
				{ type: 'html', subdir: 'report-html' },
				{ type: 'lcov', subdir: 'report-lcov' },
				{ type: 'cobertura', subdir: '.', file: 'cobertura.txt' },
			],
		},

		webpack: webpackConfig,

		webpackMiddleware: {
			noInfo: true,
			stats: {
				colors: true,
			},
		},
	});
};
