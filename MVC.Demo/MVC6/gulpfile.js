/// <binding Clean='clean' />
"use strict";

var gulp = require("gulp"),
    rimraf = require("rimraf"),
    concat = require("gulp-concat"),
    rename = require("gulp-rename"),
    cssmin = require("gulp-cssmin"),
    uglify = require("gulp-uglify");

var paths = {
    webroot: "./wwwroot/"
};

paths.js = paths.webroot + "js/**/*.js";
paths.minJs = paths.webroot + "js/**/*.min.js";
paths.css = paths.webroot + "css/**/*.css";
paths.minCss = paths.webroot + "css/**/*.min.css";
paths.concatJsDest = paths.webroot + "js/site.min.js";
paths.concatCssDest = paths.webroot + "css/site.min.css";

// custom
paths.angular = paths.webroot + "lib/angularjs_npm/";
paths.angularDest = paths.angular + "dist/";
paths.app = paths.webroot + "js/app/";
paths.appDest = paths.app + "dist/";

gulp.task("angular", function () {
    return gulp.src([
        paths.angular + "angular.js",
        paths.angular + "angular-route.js"
    ])
    .pipe(concat("angular.js"))
    .pipe(gulp.dest(paths.angularDest))
    .pipe(rename("angular.min.js"))
    .pipe(uglify())
    .pipe(gulp.dest(paths.angularDest));
});

gulp.task("app", function () {
    return gulp.src([
        paths.app + "app-startup.js",
        paths.app + "common/*js",
        paths.app + "models/*js",
        paths.app + "factories/*js",
        paths.app + "services/*js",
        paths.app + "filters/*js",
        paths.app + "directives/*js",
        paths.app + "controllers/*js",
        paths.app + "app.js"
    ])
    .pipe(concat("app.js"))
    .pipe(gulp.dest(paths.appDest))
    .pipe(rename("app.min.js"))
    .pipe(uglify())
    .pipe(gulp.dest(paths.appDest));
});
// end custom

gulp.task("clean:js", function (cb) {
    rimraf(paths.concatJsDest, cb); 
});

gulp.task("clean:css", function (cb) {
    rimraf(paths.concatCssDest, cb);
});

gulp.task("clean", ["clean:js", "clean:css"]);

gulp.task("min:js", function () {
    return gulp.src([paths.js, "!" + paths.minJs], { base: "." })
        .pipe(concat(paths.concatJsDest))
        .pipe(uglify())
        .pipe(gulp.dest("."));
});

gulp.task("min:css", function () {
    return gulp.src([paths.css, "!" + paths.minCss])
        .pipe(concat(paths.concatCssDest))
        .pipe(cssmin())
        .pipe(gulp.dest("."));
});

gulp.task("min", ["min:js", "min:css"]);
