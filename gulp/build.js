var gulp = require('gulp')
var source = require('vinyl-source-stream')
var uglify = require('gulp-uglify')
var rename = require('gulp-rename')
var concat = require('gulp-concat')
var LessAutoprefix = require('less-plugin-autoprefix')
var sourcemaps = require('gulp-sourcemaps')
var less = require('gulp-less')
var cache = require('gulp-cached')
var vueSplit = require('gulp-vuesplit').default
var order = require('gulp-order')
var remember = require('gulp-remember')
var vueExtract = require('./vue-extract')
var wrapjs = require('./js-wrapper')
var print = require('gulp-print')
var cleancss = require('gulp-clean-css')

var src = global.__src;
var dst = global.__dst;

var autoprefix = new LessAutoprefix({ browsers: ['last 2 versions']})

global.__production = false
global.__injection = false

gulp.task('js-libs', function(){
	var base = src + 'libs/';

	gulp.src([
		base + 'underscore-min.js',
		base + 'vue.min.js',
		base + 'hammer.js',
		base + 'vue-touch.js'

	])
		.pipe(concat('libs.js'))
		.pipe(gulp.dest(dst + 'js'));

});

gulp.task('js-build', function(){
	var g = gulp.src([src + 'js/*.js', src + 'components/*.vue'])
		.pipe(vueExtract({
			type:'script',
			storeTemplate: 'inline'
		}))
		.pipe(cache('js-build'))
		.pipe(print())
		.pipe(wrapjs())
		.pipe(remember('js-build'))
		.pipe(order([
			'js/utils.js',
			'components/*.js',
			'js/main.js'
		], {base: src}))
		.pipe(concat('app.js'))
		.pipe(gulp.dest(dst + 'js'));

});

gulp.task('less', function(){
	var g = gulp.src([src + 'less/style.less', src + 'components/*.vue', src + 'libs/normalize.css'])
		.pipe(print())
		.pipe(vueExtract({
			type: 'style'
		}));


	g = g.pipe(less({
			paths: ['.'],
			plugins: [autoprefix]
		}));


	g = g.pipe(order([
			'libs/normalize.css',
			'components/*.vue',
			'less/style.less'
		],{base: src}))
		.pipe(concat('style.css'));

	g = g.pipe(gulp.dest(dst + 'css'));

});

gulp.task('assets', function() {
	gulp.src( src + 'assets/**/*' )
		.pipe(gulp.dest(dst));
});

gulp.task('pages', function() {
	gulp.src( src + '*.html')
		.pipe(gulp.dest(dst));
});
