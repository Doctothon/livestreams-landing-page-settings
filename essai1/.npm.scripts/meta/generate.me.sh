#!/bin/bash

echo ""
echo "# you just before ran # npm init --yes"
echo ""
export GULP_CLI_VERSION=${GULP_CLI_VERSION:-"2.3.0"}

sudo --version  || (echo "You do not have sudo installed on this system." && exit 3)

sudo npm install --global gulp-cli@${GULP_CLI_VERSION}

# - dependencies :
# npm i -s bulma bulma-start css-loader mini-css-extract-plugin node-sass sass-loader style-loaderqc
npm i -s bulma bulma-start

# - dev dependencies :
npm i --save-dev browser-sync gulp gulp-sass



cat <<EOF>./gulpfile.js
var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');


// Compile sass into CSS & auto-inject into browsers
function gulpSass(){
    return gulp
        .src(['src/sass/*.s?ss'])
        .pipe(sass())
        .pipe(gulp.dest("src/css"))
        .pipe(browserSync.stream());
}

gulp.task(gulpSass);

// Move the javascript files into our /src/js folder
function js(){
    return gulp
        .src(['src/js/*.js'])
        .pipe(gulp.dest("src/js"))
        .pipe(browserSync.stream());
}

gulp.task(js);

// Static Server + watching scss/html files
gulp.task('server', gulp.series('gulpSass', function() {
    browserSync.init({
        server: "./src"
    });

    gulp.watch('src/sass/*.s?ss', gulp.series('gulpSass'));
    gulp.watch("src/*.html").on('change', browserSync.reload);
}));

gulp.task('serve', gulp.series('gulpSass', 'js', 'server'));
gulp.task('build', gulp.series('gulpSass', 'js'));

EOF
