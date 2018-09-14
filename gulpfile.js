
//处理任务
var gulp = require("gulp");

//压缩图片模块
var imagemin =require("gulp-imagemin");


//压缩js模块
var uglify = require("gulp-uglify");

/*

gulp.task		定义任务

gulp.src		找到需要执行任务的文件

gulp.dest 		执行任务的文件去处

gulop.watch 	观察文件是否发生变化

*/

//定义任务
gulp.task('message',function(){
	return congole.log('message')
})


//定义默认任务
gulp.task("default",function () {
	return console.log('这是默认的任务，只需要执行gulp即可！')
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