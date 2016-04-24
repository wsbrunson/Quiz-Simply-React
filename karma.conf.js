var path = require('path');

module.exports = function webpackConfigFunction(config) {
	config.set({
		basePath: '',

		colors: true,

		frameworks: ['jasmine'],

		files: [
			'src/js/tests/**/*.spec.js',
		],

		preprocessors: {
			'src/js/**/*.spec.js': ['webpack', 'sourcemap'],
		},

		plugins: [
			require('karma-webpack'),
			require('karma-jasmine'),
			require('karma-phantomjs-launcher'),
			require('karma-chrome-launcher'),
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

		webpack: {
			devtool: 'inline-source-map',
			module: {
				loaders: [{
					test: /\.js$/,
					exclude: /\/node_modules\//,
					loader: 'babel',
				}],
			},
			
			resolve: {
				root: path.resolve(__dirname),
				alias: {
					components: 'src/js/Components',
					helpers: 'src/js/Helpers',
					services: 'src/js/Services',
					app: 'src/js'
				},
				extensions: ['', '.js', '.jsx']
			},
		
			externals: {
				cheerio: 'window',
				'react/lib/ExecutionEnvironment': true,
				'react/lib/ReactContext': true,
			},
		},

		webpackMiddleware: {
			noInfo: true,
			stats: {
				colors: true,
			},
		},
	});
};
