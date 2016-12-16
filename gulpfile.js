var gulp = require('gulp');
var inject = require('gulp-inject');
var server = require('gulp-server-livereload');


var lib_path = "node_modules";
var inject_file = [
    "./src/css/*.css",
    lib_path + "/vue/dist/vue.js",
    "./src/js/*.js"
];

//注入js 和  css文件
gulp.task('inject', function() {
    var target = gulp.src('index.html');

    var sources = gulp.src( inject_file, {read: false});
    return target.pipe(inject(sources))
        .pipe(gulp.dest(''));

});

gulp.task('webserver', ['inject'], function() {
    gulp.src('')
        .pipe(server({
            host: '127.0.0.1',
            port: '9000',
            livereload: true,
            open: true,
            defaultFile: 'index.html'
        }));
});