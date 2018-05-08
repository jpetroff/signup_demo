var gulp = require('gulp')
var express = require('express')
var livereload = require('livereload')
var path = require('path')
var fs = require('fs')

var src = global.__src;
var dst = global.__dst;

var changeLog = function(watcher, name) {
	watcher.on('change', function(ev) {
		console.log('['+name+'] → File '+path.basename(ev.path)+' was '+ev.type)
	})
}

gulp.task('server', function() {
	var lr = livereload.createServer({
		exclusions: ['.git/', '.svn/', '.hg/', 'includes/'],
		exts: ['css', 'js', 'woff', 'jpeg', 'jpg', 'png', 'svg']
	});
	lr.watch(dst);

	var wJSLibs = gulp.watch(src + 'libs/*.js', ['js-libs'])
	changeLog(wJSLibs, 'js-libs')

	var wJSBuild = gulp.watch([src + 'js/**/*.js', src + 'components/**/*.vue'], ['js-build'])
	changeLog(wJSBuild, 'js-build')

	var wLess = gulp.watch([src + 'less/**/*.less', src + 'components/**/*.vue'], ['less'])
	changeLog(wLess, 'less');

	var wAssets = gulp.watch(src + 'assets/*.*', ['assets'])
	changeLog(wAssets, 'assets');

	var wPages = gulp.watch(src + '*.html', ['pages']);
	changeLog(wPages, 'pages');
});
