var gulp = require('gulp');
/*var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var notify = require('gulp-notify');
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var minifyCSS = require('gulp-minify-css');
*/


//---------- Organización de carpetas. -----
    
gulp.task('javascript', function(){
  return gulp.src('node_modules/bootstrap/dist/js/bootstrap.min.js')
    .pipe(gulp.dest('src/js'))
});

gulp.task('estilo', function(){
  return gulp.src('node_modules/bootstrap/dist/css/bootstrap.min.css')
    .pipe(gulp.dest('src/css'))
});

gulp.task('jquery', function(){
  return gulp.src('node_modules/jquery/dist/jquery.min.js')
    .pipe(gulp.dest('src/js'))
});

gulp.task('sweetalert', function(){
  ;gulp.src('node_modules/sweetalert/dist/sweetalert.css')
    .pipe(gulp.dest('src/css'));
   gulp.src('node_modules/sweetalert/dist/sweetalert.min.js')
    .pipe(gulp.dest('src/js'));
});

//------- END organización de carpetas ----


gulp.task('script', function(cb){
	// tarea script
});

gulp.task('style', function() {
	// tarea style
});

gulp.task('images', function() {
	// tarea images
});


gulp.task('default', ['images', 'style', 'script','javascript','estilo', 'jquery', 'sweetalert']);