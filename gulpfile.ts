import gulp from 'gulp';
// import gulpConcat from 'gulp-concat';
import uglify from 'gulp-uglify';
import del from 'del';
import ts from 'gulp-typescript/release/main';

const tsProject = ts.createProject('tsconfig.json');
const outputFolder = 'dist';

gulp.task('clean', () => del([outputFolder]));

gulp.task('compile', () => tsProject
  .src()
  .pipe(tsProject())
  .js.pipe(uglify())
  // .pipe(gulpConcat('main.js'))
  .pipe(gulp.dest(outputFolder)));

gulp.task('copyContent', () => gulp
  .src('src')
  .pipe(gulp.dest(outputFolder)));

gulp.task('default', gulp.series('clean', 'compile', 'copyContent'));
