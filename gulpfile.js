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
        .pipe(shell([
            'cp -rf src/core/css dist/css'
        ]))
        .pipe(rename('main.js'))
        .pipe(gulp.dest('./dist/js'))
}));

gulp.task('clean', shell.task([
    'rm -rf ./dist'
]));

// Hack to enable configurable watchify watching
gulp.task('enable-watch-mode', function() { watching = true });

gulp.task('watchify', ['enable-watch-mode', 'build'])

// Rerun tasks when a file changes
gulp.task('watch', ['watchify'], function () {
   // ... other watch code ...
});

// The default task (called when you run `gulp` from cli)
 gulp.task('default', ['build'])
