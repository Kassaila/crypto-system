/**
 * Hint HTML
 */

const path = require('path');
const gulp = require('gulp');
const htmlhint = require('gulp-htmlhint');

const global = require('../gulp-config.js');

module.exports = function () {
  return () =>
    gulp
      .src(`./${global.folder.build}/**/*.html`)
      .pipe(htmlhint({ htmlhintrc: path.resolve(__dirname, '../.htmlhintrc.json') }))
      .pipe(htmlhint.reporter('htmlhint-stylish'));
};
