
//处理任务
/*
在当前项目根目录下安装各模块
*/
var gulp = require("gulp");

//压缩图片模块
/*
npm install --save-dev gulp-imagemin
*/
var imagemin =require("gulp-imagemin");


//压缩js模块
/*
npm install --save-dev gulp-uglify
*/
var uglify = require("gulp-uglify");



//sass转css模块
/*
npm install gulp-sass --save-dev
*/
var sass = require('gulp-sass');



//代码合并模块
/*
npm install --save-dev gulp-concat
*/
var concat = require('gulp-concat');







/*

gulp.task		定义任务

gulp.src		找到需要执行任务的文件

gulp.dest 		执行任务的文件去处

gulop.watch 	观察文件是否发生变化

*/

//定义任务
gulp.task('message',function(){
	return console.log('message')
})



//拷贝文件
gulp.task("copyHtml",function(){
	gulp.src('src/*.html')
	.pipe(gulp.dest('dist'));
})


//图片压缩
gulp.task("imageMin",function(){
	gulp.src('src/image/*')
	.pipe(imagemin())
	.pipe(gulp.dest('dist/images'));
})


//压缩js文件
gulp.task("scriptMin",function(){
	gulp.src('src/script/*.js')
	.pipe(uglify())
	.pipe(gulp.dest('dist/script'));
})



// sass转css
gulp.task("sass",function(){
	gulp.src('src/sass/*.scss')
	.pipe(sass().on("error",sass.logError))
	.pipe(gulp.dest('dist/css'));
})


//代码合并&同时执行压缩代码
gulp.task('script-concat',function(){
	gulp.src('src/script/*.js')
	.pipe(concat('app.js'))
	.pipe(uglify())
	.pipe(gulp.dest('dist/script'))
})


//监听文件是否发生变化
gulp.task("watch",function(){
	gulp.watch('src/image/*',['imageMin']);
	gulp.watch('src/sass/*.scss',['sass'])
	gulp.watch('src/script/*.js',['script-concat'])
	gulp.watch('src/*.html',['copyHtml'])
})


//定义默认任务
/*
执行多个任务
*/
gulp.task("default",['message','copyHtml','imageMin','script-concat','sass'])

