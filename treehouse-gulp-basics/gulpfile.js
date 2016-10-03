'use strict'

var gulp = require('gulp')

gulp.task('hello', function () {
  console.log('Hi!')
})

gulp.task('default', ['hello'], function () {
  console.log('Default task running!')
})
