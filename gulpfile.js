var gulp = require('gulp'),
  compass = require('gulp-compass');

gulp.task('compass', function() {
return gulp.src('dist/sass/main.scss')
    .pipe(compass({
      sass: 'dist/sass',
      image: 'dist/img',
      css: 'dist',
      sourcemap: true,
      //style: 'compressed'
    }));
});

gulp.task('default', function() {
  gulp.watch('dist/sass/**/*.scss', gulp.series('compass'));
});
