const { src, dest, watch, series } = require('gulp');
const gulpSass = require('gulp-sass');
const sass = require('sass');

const scssCompiler = gulpSass(sass);

function scss() {
  return src('sass/main.scss')
    .pipe(scssCompiler({ outputStyle: 'expanded' }))
    .pipe(dest('css'));
}

function watcher() {
  watch('sass/**/*.scss', scss);
}

exports.default = series(scss, watcher);
exports.scss = scss;
