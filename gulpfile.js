"use strict";

var gulp = require("gulp");
var less = require("gulp-less");
var sourcemaps = require("gulp-sourcemaps");
var plumber = require("gulp-plumber");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var server = require("browser-sync").create();

gulp.task("style", function () {
  gulp.src("source/less/style.less")
    .pipe(sourcemaps.init())
    .pipe(plumber())
    .pipe(less())
    .pipe(postcss([
      autoprefixer()
    ]))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest("source/css"))
    .pipe(server.stream());
});

gulp.task("serve", ["style"], function () {
  server.init({
    server: "source/",
    notify: false,
    open: true,
    cors: true,
    ui: false
  });

  gulp.watch("source/less/**/*.less", ["style"]);
  gulp.watch("source/*.html").on("change", server.reload);
});
