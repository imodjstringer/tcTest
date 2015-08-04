var gulp = require("gulp");
var babel = require("gulp-babel");

gulp.task("babelTest", function () {
  return gulp.src("src/test.js")
    .pipe(babel())
    .pipe(gulp.dest("dist"));
});
