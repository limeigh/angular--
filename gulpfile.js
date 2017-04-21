var gulp = require('gulp')
// js压缩插件
var uglify=require('gulp-uglify')
// 文件合并插件
var concat=require('gulp-concat')
// css压缩插件
var cssnano=require('gulp-cssnano')
// html压缩插件
var htmlmin=require('gulp-htmlmin')
// gulp.task('test',function(){
// 	console.log('test')
// })

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
	.pipe(htmlmin({collapseWhitespace:true,minifyJS:true}))
	.pipe(gulp.dest('./dist'))
})

gulp.task('mywatch',function(){
	// gulp.run('script')
	gulp.watch(['./index.html'],['html'])
})