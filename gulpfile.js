const gulp        = require('gulp');
const browserSync = require('browser-sync').create();
const reload      = browserSync.reload;

// 静态服务器
gulp.task('serve', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    gulp.watch("src/*.css", ["watch-style"], function(){
        console.log('css changed!');
    });
    gulp.watch("src/*.js").on('change', reload);
    gulp.watch("index.html").on('change', reload);
});

// css静态注入
gulp.task('watch-style', function(){
    return gulp.src('src/*.css')
        .pipe(gulp.dest('dist'))
        .pipe(reload({stream:true}));
});

gulp.task('default', ['serve']);