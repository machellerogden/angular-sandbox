var gulp = require('gulp'),
    rename = require('gulp-rename'),
    shell = require('gulp-shell'),
    watching = false,
    watchify = require('gulp-watchify');

gulp.task('build', watchify(function (watchify) {
    gulp.src('src/core/js/main.js')
        .pipe(watchify({
            watch: watching,
            insertGlobals : true,
            debug : true
        }))
        .pipe(rename('main.js'))
        .pipe(gulp.dest('./dist/core/js'))
        .pipe(shell([
            'mkdir -p dist/vendor',
            'cp -r src/vendor/css dist/vendor/css',
            'mkdir -p dist/core',
            'cp -r src/core/css dist/core/css'
        ]));
}));

gulp.task('clean', shell.task([
    'rm -rf ./dist'
]));

// Hack to enable configurable watchify watching
gulp.task('enable-watch-mode', function() { watching = true; });

gulp.task('watchify', ['enable-watch-mode', 'build']);

// Rerun tasks when a file changes
gulp.task('watch', ['watchify'], function () {
   // ... other watch code ...
});

// The default task (called when you run `gulp` from cli)
gulp.task('default', ['build']);
