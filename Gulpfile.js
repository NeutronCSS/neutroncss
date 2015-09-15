var gulp = require('gulp');
var sass = require('gulp-ruby-sass');

// SASS
gulp.task('sass', function() {
    return sass('tests/**/*.scss', {style: 'expanded'})
        // .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./tests/css/'));
});

//Watch task
gulp.task('watch',function() {
    gulp.watch('neutron/**/*.scss',['sass']);
    gulp.watch('tests/**/*.scss',['sass']);
});

//Watch task
gulp.task('default', ['sass', 'watch']);
