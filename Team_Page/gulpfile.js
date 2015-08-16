var gulp = require('gulp'),
    watch = require('gulp-watch'),
    sass = require('gulp-sass'),
    htmlReplace = require('gulp-html-replace'),
    zip = require('gulp-zip');

var zipName = 'Greg-Harrison_Team-Page';

// Process SASS file and copy to Dist/
gulp.task('process-sass', function() {
    gulp.src(['_work/**/*.scss'])
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(gulp.dest('dist'));
});

// Copy Assets to Dist/
gulp.task('copy-assets', function() {
    gulp.src('_work/assets/*')
        .pipe(gulp.dest('dist/assets'));
});

// Copy HTML to Dist/
gulp.task('copy-html', function() {
    gulp.src('_work/team-page.html')
        .pipe(htmlReplace({
            'bootstrapCDN': 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css'
        }))
        .pipe(gulp.dest('dist'));
});

// Zip up Dist to deliver
gulp.task('zip-dist', function() {
    return gulp.src(['dist/**/*', '../assignment_files', '../README.md'])
        .pipe(zip(zipName + '.zip'))
        .pipe(gulp.dest('../'));
});

// Watch for changes to the source files
gulp.task('watch-all', function() {
    gulp.watch('src/**', ['build']);
});

// Build Tasks
gulp.task('default', ['build']);
gulp.task('build', ['process-sass', 'copy-html', 'copy-assets']);
gulp.task('watch', ['build', 'watch-all']);
gulp.task('package', ['build', 'zip-dist']);