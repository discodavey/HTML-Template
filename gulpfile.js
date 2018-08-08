var gulp = require('gulp');

var gulp = require('gulp'),
	uglify = require('gulp-uglify'),
	sass = require('gulp-ruby-sass');

// Javascript Task
gulp.task('scripts', function() {
  return gulp.src('assets/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('build/js'));
});

// Sass Task
gulp.task('styles', () =>
    sass('assets/scss/screen.scss', { style: 'compressed' })
        .on('error', sass.logError)
        .pipe(gulp.dest('build/css'))
);


gulp.task('watch', function(){
	gulp.watch('assets/js/*.js', ['scripts']);
	gulp.watch('assets/scss/*.scss', ['styles']);
});


gulp.task('default', ['scripts', 'styles', 'watch']);