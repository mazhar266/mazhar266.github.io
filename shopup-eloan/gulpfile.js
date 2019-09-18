var gulp = require('gulp');
var cssnano = require('gulp-cssnano');
// var sass = require('gulp-sass');
// var uglifycss = require('gulp-uglifycss');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var cleanCSS = require('gulp-clean-css');
const babel = require('gulp-babel');
var sourcemaps = require('gulp-sourcemaps');

// keep in mind the js order
var jsFiles = [
    'js/vendor/modernizr-3.7.1.min.js',
    'js/vendor/jquery-3.4.1.min.js',
    'js/plugins.js',
    'assets/jquery-migrate-1.2.1/build/jquery-migrate-1.2.1.min.js',
    'assets/slick/slick.min.js',
    'js/bootstrap.bundle.min.js',
];

var appFiles = [
    'node_modules/angular/angular.min.js',
    'node_modules/angular-sanitize/angular-sanitize.min.js',
    'node_modules/angularjs-slider/dist/rzslider.min.js',
    'app/app.js',
    // 'app/main.js'
]

// keep in mind the css order
var cssFiles = [
    'css/main.css',
    'css/bootstrap.min.css',
    'css/rzslider.min.css',
    'css/noto-sans-bengali.css',
    'css/select2.min.css',
    'css/all.min.css',
    'assets/slick/slick.css',
    'assets/slick/slick-theme.css',
    'node_modules/angularjs-slider/dist/rzslider.min.css',
    'css/common.css',
    'css/style.css',
];

gulp.task('css', function(){
    return gulp.src(cssFiles)
        .pipe(concat('all.css'))
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(cssnano())
        .pipe(gulp.dest('dist'));
});

gulp.task('app', function(){
    return gulp.src(jsFiles)
        .pipe(sourcemaps.init())
        .pipe(concat('app.js'))
        .pipe(babel())
        .on('error', console.error.bind(console))
        .pipe(uglify())
        .pipe(gulp.dest('dist'));
});

gulp.task('main', function(){
    return gulp.src(['app/main.js'])
        .pipe(sourcemaps.init())
        .pipe(concat('main.js'))
        // .pipe(babel())
        // .on('error', console.error.bind(console))
        .pipe(uglify())
        .pipe(gulp.dest('dist'));
});

gulp.task('js', function(){
    return gulp.src(jsFiles)
        // .pipe(sourcemaps.init())
        .pipe(concat('all.js'))
        // .pipe(uglify())
        .pipe(gulp.dest('dist'));
});

gulp.task('watch', function(){
    gulp.watch('css/*.css', gulp.series('css'));
    gulp.watch('js/*.js', gulp.series('js'));
    gulp.watch('app/*.js', gulp.series('app', 'main'));
});

gulp.task('build', gulp.series('css', 'js', 'app', 'main'));
gulp.task('default', gulp.series('css', 'js', 'app', 'main', 'watch'));
