var gulp = require('gulp')
var sass = require('gulp-sass')
var connect = require('gulp-connect')
var concat = require('gulp-concat')
var uglify = require('gulp-uglify')
var rename = require('gulp-rename')


gulp.task('test',function(){
    //123;
    console.log('hahahaha')
})

gulp.task('test2',function(){
    //123;
    console.log('heheheheh')
})

gulp.task('default',['test','test2'])

gulp.task('task1',function(){
    gulp.src('index.html').pipe(gulp.dest('dest')).pipe(connect.reload())
})

gulp.task('watch',function(){
    gulp.watch('index.html',['task1'])
    gulp.watch('src/sass/*.scss',['sass'])

})

gulp.task('copy-img',function(){
    gulp.src('src/images/*.png').pipe(gulp.dest('dest/img'))
})

gulp.task('sass',function(){
    gulp.src('src/sass/*.scss').pipe(sass()).pipe(gulp.dest('dest/css')).pipe(connect.reload())
})

gulp.task('servers',function(){
    connect.server({    //gulp.connect??
        root:'dest',
        livereload:true
    })
})

gulp.task('a',['servers','watch'])

gulp.task('concat',function(){
    gulp.src(['src/js/index.js','src/js/index2.js'])
        .pipe(concat('bundle.js'))
        .pipe(uglify())
        .pipe(rename('uglify.min.js'))
        .pipe(gulp.dest('dest/js'))
})




















