const gulp        = require('gulp');
const browserSync = require('browser-sync').create();
// var sass        = require('gulp-sass');
// const sass = require('gulp-sass')(require('sass'));
const sass = require('gulp-sass')(require('node-sass'));
const pug = require('gulp-pug');
const purgecss = require('gulp-purgecss');

var htmlbeautify = require('gulp-html-beautify');

gulp.task('htmlbeautify', () => {
///   var options = {
///     {indentSize: 2}
///   };
  var options = {
    indentSize: 2,
    useConfig: true // .jsbeautifyrc
  };
  gulp.src('./src/*.html')
    .pipe(htmlbeautify(options))
    .pipe(gulp.dest('./public/'))
});

// Compile sass into CSS & auto-inject into browsers
function gulpSass(){
    return gulp
        .src(['src/sass/*.s?ss'])
        .pipe(sass())
        .pipe(gulp.dest("dist/css"))
        .pipe(browserSync.stream());
}
// Pug render
function gulpPug(){
    return gulp
        .src('./src/*.pug')
        .pipe(
          pug({
            // Your options in here.
            // https://www.npmjs.com/package/gulp-pug
            verbose: true
          })
        )
        .pipe(gulp.dest('./src/'));
        // .pipe(dest('./dist'));
};


gulp.task(gulpSass);
gulp.task(gulpPug);


gulp.task('purgecss', () => {
    return gulp.src('src/**/*.css')
        .pipe(purgecss({
            content: ['src/**/*.html']
        }))
        .pipe(gulp.dest('dist/css'))
})



/*
exports.views = () => {
  return src('./src/*.pug')
    .pipe(
      pug({
        // Your options in here.
      })
    )
    .pipe(dest('./dist'));
};
*/

function jsDev(){
    return gulp
        .src(['src/js/*.js'])
        .pipe(gulp.dest("dist/js"))
        .pipe(browserSync.stream());
}
gulp.task(jsDev);
/******************************************************
 * SRC TO DIST
 */

// Move the javascript files into our /dist/js folder
function jsDist(){
    return gulp
        .src(['src/js/*.js'])
        .pipe(gulp.dest("dist/js")).pipe(browserSync.stream());
}
// Move the CSS files into our /dist/css folder
function cssDist(){
    return gulp
        .src(['src/css/*.css'])
        .pipe(gulp.dest("dist/css")).pipe(browserSync.stream());
}
// Move the HTML files into our /dist/ folder
function htmlDist(){
    return gulp
        .src(['src/*.html'])
        .pipe(gulp.dest("dist/")).pipe(browserSync.stream());
}

gulp.task(jsDist);
gulp.task(cssDist);
gulp.task(htmlDist);



// https://browsersync.io/docs/gulp
// Static Server + watching scss/html files
gulp.task('server', gulp.series('gulpSass', function() {
    browserSync.init({
        server: "./dist"
    });

    // gulp.watch('src/js/*.js', gulp.series('jsDev'));
    gulp.watch('src/js/*.js', gulp.series('gulpPug'));
    gulp.watch('src/sass/*.s?ss', gulp.series('gulpSass'));
    gulp.watch('src/js/*.js', gulp.series('purgecss'));
    gulp.watch('src/js/*.js', gulp.series('jsDist'));
    gulp.watch('src/js/*.js', gulp.series('cssDist'));
    gulp.watch('src/js/*.js', gulp.series('htmlDist'));
    gulp.watch("src/*.html").on('change', browserSync.reload);
}));


gulp.task('serve', gulp.series('gulpPug', 'gulpSass', 'purgecss', 'jsDist', 'cssDist', 'htmlDist', 'server'));
// allDist after gulpPug: any html fiole in the src folder, overrides the rendered pug template in dist
gulp.task('dev', gulp.series('gulpSass', 'gulpPug', 'jsDist', 'cssDist', 'htmlDist', 'server'));
gulp.task('build', gulp.series('gulpPug', 'gulpSass', 'purgecss', 'jsDist', 'cssDist', 'htmlDist'));
