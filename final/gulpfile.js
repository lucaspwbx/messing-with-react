var gulp = require('gulp'),
    connect = require('gulp-connect'),
    open = require('gulp-open'),
    browserify = require('gulp-browserify'),
    concat = require('gulp-concat'),
    port = process.env.port || 3031;

gulp.task('browserify', function() {
  gulp.src('./app/src/js/components/main.js')
  .pipe(browserify({ transform: 'reactify' }))
  .pipe(gulp.dest('./app/dist/js'));
});

gulp.task('open', function() {
  var options = {
    url: 'http://localhost:' + port
  };
  gulp.src('./app/index.html');
});
