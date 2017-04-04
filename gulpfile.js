'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');

gulp.task('sass', function () {
  return gulp.src('./src/sass/style.scss')
    .pipe(postcss([ autoprefixer() ]))
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./public_html/assets/css'));
});

gulp.task('watch', function () {
  gulp.watch(['./src/sass/*.scss', './src/sass/**/*.scss'], ['sass']);
});

gulp.task('default', ['sass']);