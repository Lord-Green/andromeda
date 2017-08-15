'use strict';

const isDevelopment = !process.env.NODE_ENV || process.env.NODE_ENV == 'development';


// plugins for development
const gulp = require('gulp'),
  // $ = require('gulp-load-plugins')(),
  // rimraf = require('rimraf'),
  postcss = require('gulp-postcss'),
  sprites = require('postcss-sprites')
  // spritesmith = require('gulp-spritesmith'),

  , sass = require('gulp-sass'),

  assets = require('postcss-assets'),
  autoprefixer = require('gulp-autoprefixer')

  , inlineimage = require('gulp-inline-image')
  , plumber = require('gulp-plumber')
  , cssnano = require('cssnano')
  // dirSync = require('gulp-directory-sync'),

  // browserSync = require('browser-sync').create(),
  // reload = browserSync.reload(),

  // concat = require('gulp-concat'),
  // cssfont64 = require('gulp-cssfont64'),
  // sourcemaps = require('gulp-sourcemaps'),

  // svgSprite = require('gulp-svg-sprite'),
  // svgmin = require('gulp-svgmin'),
  // cheerio = require('gulp-cheerio'),
  // sudo npm link gulp-load-plugins rimraf postcss-sprites gulp-spritesmith gulp-sass gulp-postcss postcss-assets gulp-autoprefixer gulp-inline-image gulp-plumber gulp-directory-sync browser-sync gulp-concat gulp-cssfont64 gulp-sourcemaps gulp-svg-sprite gulp-svgmin gulp-cheerio gulp-replace gulp-if-else gulp-if gulp-data fs path
  // replace = require('gulp-replace')
  // ifElse = require('gulp-if-else'),
  // gulpIf = require('gulp-if'),
  // data = require('gulp-data'),
  // fs = require('fs'),
  // path = require('path')
  ;
// sudo npm install gulp-purifycss gulp-uglify gulp-imagemin magemin-pngquant gulp-csso
// plugins for build
const purify = require('gulp-purifycss'),
  uglify = require('gulp-uglify'),
  imagemin = require('gulp-imagemin'),
  // pngquant = require('imagemin-pngquant'),
  csso = require('gulp-csso');

const assetsDir = 'assets/',
  outputDir = 'dist/',
  buildDir = 'build/',
  opts = {
    spritePath: 'dist/img'
  },
  base_plugins = [
    sprites(opts)
  ];;



//----------------------------------------------------Compiling
gulp.task('html', function () {
  gulp.src([assetsDir + 'html/*.html'])
    .pipe(plumber())
    .pipe(gulp.dest(outputDir));
  // .pipe(browserSync.stream());
});

gulp.task('sass', function () {
  gulp.src([assetsDir + 'sass/**/*.scss', '!' + assetsDir + 'sass/**/_*.scss'])
    .pipe(plumber())
    // .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(inlineimage())

    .pipe(postcss([assets({
      basePath: outputDir,
      loadPaths: ['img/sprites']
    })]))
    .pipe(postcss(base_plugins))
    // .pipe(cssnano)
    .pipe(autoprefixer())

    // .pipe(sourcemaps.write())
    .pipe(gulp.dest(outputDir + 'styles/'))
  // .pipe(browserSync.stream());
});

// gulp.task('jsConcat', function () {
//   return gulp.src(assetsDir + 'js/all/**/*.js')
//     .pipe(concat('all.js', { newLine: ';' }))
//     .pipe(gulp.dest(outputDir + 'js/'))
//     .pipe(browserSync.stream());
// });


gulp.task('img', function () {
  return gulp.src('assets/img/**/*.*')
    .pipe(gulp.dest('dist/img'))
});

gulp.task('css', function () {
  return gulp.src('assets/sass/**/*.css')
    .pipe(gulp.dest('dist/styles'))
});




//watching files and run tasks
gulp.task('watch', function () {
  gulp.watch(assetsDir + 'html/**/*.html', gulp.series('html'));
  gulp.watch(assetsDir + 'sass/**/*.scss', gulp.series('sass', 'css'));
  // gulp.watch(assetsDir + 'js/**/*.js', ['jsSync']);
  // gulp.watch(assetsDir + 'js/all/**/*.js', ['jsConcat']);
  // gulp.watch(assetsDir + 'i/**/*', ['imageSync']);
});




gulp.task('default', gulp.series('img', 'sass', 'css', 'html', 'watch'));



// gulp.task('sprites', function () {
//   return gulp.src('dist/styles/style.css')
//     .pipe(postcss(base_plugins))
//     .pipe(gulp.dest('dist/styles'))
// });


//livereload and open project in browser
// gulp.task('browser-sync', function () {
//   browserSync.init({
//     port: 1337,
//     server: {
//       baseDir: outputDir
//     }
//   });
// });



/*gulp.task('default', ['html', 'sass', 'imageSync', 'jsConcat', 'jsSync', 'watch', 'browser-sync']);*/



