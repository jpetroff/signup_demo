global.__src = __dirname + '/src/';
global.__dst = __dirname + '/public/';

global.__prod = (process.env.PROD == '1');

var gulp = require('gulp');

require('./gulp/build');
require('./gulp/watch');

gulp.task('build', ['js-libs', 'js-build', 'less', 'assets', 'pages']);
gulp.task('start', ['build', 'server']);
