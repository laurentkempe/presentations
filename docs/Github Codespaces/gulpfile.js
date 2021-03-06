var gulp = require('gulp');
var sass = require('gulp-sass');
var cleanCSS = require('gulp-clean-css');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var browserSync = require('browser-sync').create();

gulp.task(
  'vendor',
  gulp.series(done => {
    gulp.src(['./node_modules/reveal.js/dist/**/*.css']).pipe(gulp.dest('./css'));
    gulp.src(['./node_modules/reveal.js/dist/**/*.js']).pipe(gulp.dest('./js'));
    gulp.src(['./node_modules/reveal.js/plugin/**/*']).pipe(gulp.dest('./plugin'));
    gulp.src(['./node_modules/reveal.js/lib/**/*']).pipe(gulp.dest('./lib'));
    done();
  }),
);

gulp.task(
  'css:compile',
  gulp.series(() => {
    return gulp
      .src('./scss/**/*.scss')
      .pipe(
        sass
          .sync({
            outputStyle: 'expanded',
          })
          .on('error', sass.logError),
      )
      .pipe(gulp.dest('./css'));
  }),
);

gulp.task(
  'css:minify',
  gulp.series('css:compile', () => {
    return gulp
      .src(['./css/*.css', '!./css/*.min.css'])
      .pipe(cleanCSS())
      .pipe(
        rename({
          suffix: '.min',
        }),
      )
      .pipe(gulp.dest('./css'))
      .pipe(browserSync.stream());
  }),
);

// CSS
gulp.task('css', gulp.series('css:compile', 'css:minify'));

gulp.task(
  'js:minify',
  gulp.series(() => {
    return gulp
      .src(['./dist/*.js', '!./dist/*.min.js'])
      .pipe(uglify())
      .pipe(
        rename({
          suffix: '.min',
        }),
      )
      .pipe(gulp.dest('./js'))
      .pipe(browserSync.stream());
  }),
);

gulp.task('js', gulp.series('js:minify'));

gulp.task('serve', function () {
  browserSync.init({
    server: {
      baseDir: './',
    },
  });
  gulp.watch('./scss/**/*.scss', gulp.series('css'));
  gulp.watch(['./dist/*.js', '!./dist/reveal*.js'], gulp.series('js'));
  gulp.watch('*.html').on('change', browserSync.reload);
  gulp.watch('*.md').on('change', browserSync.reload);
});

// Default
gulp.task('default', gulp.series('vendor', 'css', 'js'));

// Dev
gulp.task('dev', gulp.series('default', 'serve'));
