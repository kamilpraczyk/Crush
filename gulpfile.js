var gulp = require('gulp');
var browserify = require('browserify');
var ts = require("gulp-typescript");
var del = require('del');
var vinylPaths = require('vinyl-paths');
var tsify = require('tsify');
var source = require('vinyl-source-stream');

var tsconfig = require('./tsconfig.json');


var config = {
    codePath: __dirname + '/src',// where is code
    publicPath: __dirname + '/build', // where is compiled file
    app: {
        path: __dirname + '/temp', //where is copied code of app
        main: 'app.ts',
        result: 'app.js'
    }
};

gulp.task('clean', function () {
    return gulp.src([config.app.path + '/**/*']).pipe(vinylPaths(del));
});


gulp.task('copy', function () {
    return gulp.src([config.codePath + '/**/*']).pipe(gulp.dest(config.app.path));
});


gulp.task('compile-js', ['copy'], function () {

    return browserify({
        basedir: config.app.path,
        plugin: [["tsify", tsconfig.compilerOptions]]
    })
        .add(config.app.path + '/' + config.app.main)
        .plugin(tsify)
        .bundle()
        .on('error', function (e) { console.log('Browserify Error' + e) })
        .pipe(source(config.app.result))
        .pipe(gulp.dest(config.publicPath));
});


gulp.task("watch", function () {
    return gulp.watch([config.codePath + '/**/*.ts'], { cwd: config.codePath }, ['compile-js', 'clean']);
})

gulp.task("default", ['compile-js', 'watch'], function(){
    
});

