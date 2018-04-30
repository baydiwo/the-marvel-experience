var gulp = require('gulp');

// plugins
var sass = require('gulp-sass');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var watch = require('gulp-watch');

// compile sass
gulp.task('sass', function() {
    gulp.src('src/sass/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('dist/css'))
        .pipe(reload({ stream:true }));
});

gulp.task('js_copy', function() {
    return gulp.src('src/build/js/*.js')
        .pipe(gulp.dest('dist/build/js'))
});

gulp.task('img', function() {
    return gulp.src('src/images/**/*')
        .pipe(gulp.dest('dist/images'))
});

gulp.task('font', function() {
    return gulp.src('src/fonts/**/*')
        .pipe(gulp.dest('dist/fonts'))
});

// watch Sass files for changes, run the Sass preprocessor with the 'sass' task and reload
gulp.task('serve', ['sass'], function() {
  browserSync({
    server: {
      baseDir: './'
    }
  });

  gulp.watch('src/sass/*.scss', ['sass']);
  gulp.watch("./*.html").on('change', browserSync.reload);
});

gulp.task('default', ['sass', 'js_copy' , 'font', 'img' , 'serve']);
