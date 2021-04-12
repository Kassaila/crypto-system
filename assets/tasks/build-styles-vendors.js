/**
 * Build styles for vendor from SASS
 */

const env = require('../helpers/env');
const gulp = require('gulp');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const cssimport = require('postcss-import');
const cssnano = require('cssnano');

const notifier = require('../helpers/notifier');
const global = require('../gulp-config.js');

env({ path: process.env.DOTENV_CONFIG_PATH });
sass.compiler = require('sass');

module.exports = function () {
  const plugins = [cssimport()];

  if (process.env.NODE_ENV === 'production') {
    plugins.push(cssnano());
  }

  return (done) =>
    gulp
      .src(`./vendor_entries/css/${global.file.styles.vendor}.scss`)
      .pipe(sass.sync())
      .on('error', (error) => notifier.error(error.message, 'Vendor Sass compiling error', done))
      .pipe(postcss(plugins))
      .pipe(gulp.dest(`../${global.folder.build}/css`));
};
