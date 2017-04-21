var gulp = require('gulp')
var uglify=require('gulp-uglify')
var concat=require('gulp-concat')
var cssnano=require('gulp-cssnano')
var htmlmin=require('gulp-htmlmin')
gulp.task('test',function(){
	console.log('test')
})

gulp.task('script',function(){
	gulp.src(['./a.js','./b.js'])
	.pipe(concat('index.js'))
	.pipe(uglify())
	.pipe(gulp.dest('./dist'))
})

gulp.task('style',function(){
	gulp.src(['./*.css'])
	.pipe(concat('./index.css'))
	.pipe(cssnano())
	.pipe(gulp.dest('./dist'))
})

gulp.task('html',function(){
	gulp.src('index.html')
	.pipe(htmlmin({collapseWhitespace:true}))
	.pipe(gulp.dest('./dist'))
})

gulp.task('mywatch',function(){
	gulp.run('script')
	gulp.watch(['./*.js'],['script'])
})