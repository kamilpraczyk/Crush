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
var gulpif = require('gulp-if');
var fs = require('fs');
var open = require('gulp-open');

var tsconfig = require('./tsconfig.json');
var version = require("./version.js");

const config = {
    isProduction: false,
    generatedConflictPath: __dirname + '/src/generated-config.ts',
    codePath: __dirname + '/src',// where is code
    publicPath: __dirname + '/build', // where is compiled file
    app: {
        path: __dirname + '/temp', //where is copied code of app
        main: 'app.ts',
        result: 'app.js'
    },
    www: {
        result: 'www/js/',
        index: 'www/index.html'
    }
};


gulp.task('clean', function() {
    return gulp.src([config.app.path + '/']).pipe(vinylPaths(del));
});


gulp.task('copy', function() {
    return gulp.src([config.codePath + '/**/*']).pipe(gulp.dest(config.app.path));
});

gulp.task('compile-js', function() {
    if (config.isProduction) process.env.NODE_ENV = 'production';

    return browserify({
        basedir: config.app.path,
        plugin: [["tsify", tsconfig.compilerOptions]],
        debug: !config.isProduction
    })
        .add(config.app.path + '/' + config.app.main)
        .plugin(tsify)
        .bundle()
        .on('error', function(e) { console.log('Browserify Error' + e) })
        .pipe(source(config.app.result))
        .pipe(buffer())
        .pipe(gulpif(!config.isProduction, sourcemaps.init({ loadMaps: true })))
        .pipe(gulpif(config.isProduction, uglify()))
        .pipe(gulpif(!config.isProduction, sourcemaps.write()))
        .pipe(gulp.dest(config.publicPath));
});


gulp.task('toWWW', function() {
    return gulp.src([config.publicPath + '/**/*']).pipe(gulp.dest(config.www.result));
});


gulp.task('saveConfig', function() {
    const saveConfig = {
        isProduction: config.isProduction,
        version: version.getVersion()
    }
    console.log('saving', saveConfig);
    const contents = '// Auto-generated by gulp\nexport = ' + JSON.stringify(saveConfig, null, '  ') + ';';
    return fs.writeFileSync(config.generatedConflictPath, contents, 'utf8');
});


gulp.task('_compileSource', function() {
    var mocha = require('gulp-mocha');
    var tsProject = ts.createProject('tsconfig.json');
    return gulp.src(['src/**/*.ts'])
        .pipe(ts(tsProject)).js
        .pipe(gulp.dest('temp/src'))
});

gulp.task('_test', function() {
    var mocha = require('gulp-mocha');
    var tsProject = ts.createProject('tsconfig.json');
    return gulp.src(['test/**/*.ts'])
        /*transpile*/
        .pipe(ts(tsProject)).js
        /*flush to disk*/
        .pipe(gulp.dest('temp/test'))
        /*execute tests*/
        .pipe(mocha({
            reporter: 'progress'
        }));
});

gulp.task('openBrowser', function() {
    gulp.src(config.www.index).pipe(open({ app: 'firefox' }));//'firefox', 'chrome'
});

gulp.task("watch", function() {
    return gulp.watch([config.codePath + '/**/*.ts', config.codePath + '/**/*.js'], { cwd: config.codePath }, ['default', 'clean']);
})

gulp.task("default", function(cb) {
    runSequence('clean', 'saveConfig', 'copy', 'compile-js', 'toWWW', 'openBrowser', 'watch', cb);
});

gulp.task("build", function(cb) {
    config.isProduction = true;
    runSequence('default');
});

gulp.task("test", function(cb) {
    runSequence('clean', '_compileSource', '_test');
});


