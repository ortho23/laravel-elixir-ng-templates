var gulp          = require('gulp');
var templateCache = require('gulp-angular-templatecache');

var elixir        = require('laravel-elixir');

elixir.extend('ngTemplates', function(source, output, options) {

    var config = this;

    source = source || config.assetsPath + 'templates/**/*.html';
    output = output || config.publicPath + 'templates';

    new this.Task('ng-templates', function() {
        return gulp.src(source)
            .pipe(templateCache(options))
            .pipe(gulp.dest(output));
    }).watch(source);

});
