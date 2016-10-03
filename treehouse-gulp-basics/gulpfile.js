'use strict'

var gulp = require('gulp')
var concat = require('gulp-concat')
var uglify = require('gulp-uglify')
var rename = require('gulp-rename')
var sass = require('gulp-sass')
var maps = require('gulp-sourcemaps')

gulp.task('concatScripts', function () {
  // Use return to let other methods know when it's finished
  return gulp.src([
        'js/jquery.js',
        'js/sticky/jquery.sticky.js',
        'js/main.js'
        ])
    .pipe(maps.init())
    .pipe(concat('app.js'))
    .pipe(maps.write('./'))
    .pipe(gulp.dest('js'))
})

// This task is dependent on concatScripts
gulp.task('minifyScripts', ['concatScripts'], function () {
  return gulp.src('js/app.js')
      .pipe(uglify())
      .pipe(rename('app.min.js'))
      .pipe(gulp.dest('js'))
})

gulp.task('compileSass', function () {
  return gulp.src('scss/application.scss')
      .pipe(maps.init())
      .pipe(sass())
      .pipe(maps.write('./'))
      .pipe(gulp.dest('css'))
})

// Run all tasks in parallel BAD SINCE THERE ARE DEPENDENCIES
// gulp.task('build', ['concatScripts', 'minifyScripts', 'compileSass'])
gulp.task('build', ['minifyScripts', 'compileSass'])

gulp.task('default', ['build'])
