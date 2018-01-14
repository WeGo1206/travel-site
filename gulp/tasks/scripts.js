var gulp = require('gulp'),
webpack = require('webpack');

gulp.task('scripts', ['modernizr.js'], function(callback) {
	webpack(require('../../webpack.config.js'), function(err, stats) {
		if (err) {
			console.log(err.toString());
		}
		console.log(stats.toString());
		callback();
	});
});