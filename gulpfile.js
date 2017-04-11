'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var postcss = require('gulp-postcss');
var flexbugs = require('postcss-flexbugs-fixes');
var flexibility = require('postcss-flexibility');
var autoprefixer = require('autoprefixer');

gulp.task('sass', function () {
  return gulp.src('./src/sass/style.scss')
    .pipe(postcss([
      flexbugs(),
      flexibility(),
      autoprefixer({
        browsers: ['> 1%']
      })
    ]))
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./public_html/assets/css'));
});

gulp.task('watch', function () {
  gulp.watch(['./src/sass/*.scss', './src/sass/**/*.scss'], ['sass']);
});

gulp.task('default', ['sass']);
