import {deleteAsync} from 'del';

const babel = require('gulp-babel');
const gulp = require("gulp");
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const ts = require("gulp-typescript");
const os = require("os");
const spawn = require("child_process").spawn;
const sourcemaps = require("gulp-sourcemaps");

exports.default = function() {
  return gulp.src('src/*.js')
    .pipe(babel())
    .pipe(gulp.dest('output/'));
}
