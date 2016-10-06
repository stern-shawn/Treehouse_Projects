'use strict'

var gulp = require('gulp')
var concat = require('gulp-concat')
var uglify = require('gulp-uglify')
var rename = require('gulp-rename')
var sass = require('gulp-sass')
var maps = require('gulp-sourcemaps')
var del = require('del')
var connect = require('gulp-connect')

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

gulp.task('watchFiles', function () {
  // Use glob pattern scss/ (all subdirectories) / (allfiles ending in scss)
  gulp.watch('scss/**/*.scss', ['compileSass'])
  gulp.watch('js/main.js', ['concatScripts'])
})

gulp.task('clean', function () {
  del(['dist', 'css/application.css*', 'js/app*.js*'])
})

// Run all tasks in parallel BAD SINCE THERE ARE DEPENDENCIES
// gulp.task('build', ['concatScripts', 'minifyScripts', 'compileSass'])

// Build the app and send oroduction version to /dist
gulp.task('build', ['minifyScripts', 'compileSass'], function () {
  // Use the base parameter set to current directory to maintain file structure in dist
  return gulp.src(['css/application.css', 'js/app.min.js', 'index.html', 'img/**', 'fonts/**'], {
      base: './'
    })
    .pipe(gulp.dest('dist'))
})

// Create a task which will serve us a server that will update with any file changes,
// great for live development workflow
gulp.task('serve', ['watchFiles'], function () {
  connect.server({
    port: 3000
  })
})

// Clean up the directory before building a new /dist
gulp.task('default', ['clean'], function () {
  gulp.start('build')
})
