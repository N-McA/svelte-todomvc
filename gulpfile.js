
var gulp = require('gulp');
var inlinesource = require('gulp-inline-source');

gulp.task('inline', function () {
    return gulp.src('./public/*.html')
        .pipe(inlinesource({compress: false}))
        .pipe(gulp.dest('./inlined'));
});
