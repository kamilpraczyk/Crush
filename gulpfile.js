var gulp = require('gulp');
var browserify = require('browserify');
var ts = require("gulp-typescript");
var del = require('del');
var vinylPaths = require('vinyl-paths');
var buffer = require('vinyl-buffer');
var tsify = require('tsify');
var source = require('vinyl-source-stream');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var runSequence = require('run-sequence');



var tsconfig = require('./tsconfig.json');
var cordova = require("cordova-lib").cordova;

var config = {
    codePath: __dirname + '/src',// where is code
    publicPath: __dirname + '/build', // where is compiled file
    app: {
        path: __dirname + '/temp', //where is copied code of app
        main: 'app.ts',
        result: 'app.js'
    },
    cordova: {
        result: 'www/js/'
    }
};

gulp.task('clean', function () {
    return gulp.src([config.app.path + '/']).pipe(vinylPaths(del));
});


gulp.task('copy', function () {
    return gulp.src([config.codePath + '/**/*']).pipe(gulp.dest(config.app.path));
});


gulp.task('compile-js', function () {

    return browserify({
        basedir: config.app.path,
        plugin: [["tsify", tsconfig.compilerOptions]],
        debug: true
    })
        .add(config.app.path + '/' + config.app.main)
        .plugin(tsify)
        .bundle()
        .on('error', function (e) { console.log('Browserify Error' + e) })
        .pipe(source(config.app.result))
        .pipe(gulp.dest(config.publicPath));
});


gulp.task('compress', function () {
    return gulp.src(config.publicPath + '/*.js')
        .pipe(sourcemaps.init())
        .pipe(uglify())
        //.pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(config.publicPath));
});


gulp.task('toCordova', function () {
    return gulp.src([config.publicPath + '/**/*']).pipe(gulp.dest(config.cordova.result));
});



gulp.task("package", function () {

    return cordova.build({
        "platforms": ["browser"],//android ios windows wp8
        "options": {
            argv: ["--release", "--gradleArg=--no-daemon"]
        }

    }, function () {
        cordova.run({
            "platforms": ["browser"]
        })

    });


    //   "options": ["BILLING_KEY='MIIB...AQAB'"]
    //       ]
    //    }
});



gulp.task("watch", function () {
    return gulp.watch([config.codePath + '/**/*.ts', config.codePath + '/**/*.js'], { cwd: config.codePath }, ['default', 'clean']);
})

gulp.task("default", function (cb) {
    runSequence('clean', 'copy', 'compile-js', 'toCordova', 'package', 'clean', 'watch', cb);
});

gulp.task("build", function (cb) {
    runSequence('clean', 'copy', 'compile-js', 'compress', 'toCordova', 'package', 'clean', 'watch', cb);
});



gulp.task('test-build', function () {
    var mocha = require('gulp-mocha');
    var tsProject = ts.createProject('tsconfig.json');
    return gulp.src(['test/**/*.ts'])
        /*transpile*/
        .pipe(ts(tsProject)).js
        /*flush to disk*/
        .pipe(gulp.dest('temp/'))
        /*execute tests*/
        .pipe(mocha({
            reporter: 'progress'
        }));
});

gulp.task("test", function (cb) {
    runSequence('clean', 'test-build', 'clean');
});


