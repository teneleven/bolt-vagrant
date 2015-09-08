module.exports = function(grunt) {

    var path = require('path'),
        boltPath = path.join(process.cwd(), '../../vendor/bolt/bolt/app/src');

    grunt.util.linefeed = '\n';

    var options = {
        sourcemap: {
            css: false,
            js: false
        },
        path: {
            tmp: 'tmp',
            pages: 'tmp/pages',
            doc: {
                js: 'docs/js',
                php: 'docs/php'
            },
            src: {
                js: 'js',
                lib: 'lib',
                sass: 'sass',
                node: 'node_modules',
                bower: 'bower_components'
            },
            dest: {
                js: '../view/js',
                fonts: '../view/fonts',
                img: '../view/img',
                css: '../view/css'
            }
        },

        files: {
            boltJs: [
                path.join(boltPath, '<%= path.src.js %>/*.js'),
                path.join(boltPath, '<%= path.src.js %>/**/*.js'),
                '<%= path.src.js %>/*.js'
            ]
        },

        banner: {
            boltJs: [
                '/**',
                ' * These are Bolt’s COMPILED JS files!',
                ' * You can edit *.js files in /app/src/js/ and then run "grunt updateBolt" to generate this file.',
                ' */'
            ].join('\n'),
            boltCss: [
                '/**',
                ' * These are Bolt’s COMPILED CSS files!',
                ' * Do not edit these files, because all changes will be lost.',
                ' * You can edit *.scss files in /app/src/scss/ and then run "grunt updateBolt" to generate this file.',
                ' */'
            ].join('\n')
        }
    };

    // Optionally overwrite options with grunt-local/*.js
    var localOptions = {};

    grunt.file.expand('./grunt-local/*.js').map(function (confPath) {
        grunt.verbose.writeln('Load local options "' + confPath + '"');
        localOptions[path.basename(confPath, '.js')] = require(confPath);
    });
    require('deep-extend')(options, localOptions);

    // Start
    require('load-grunt-config')(grunt, {
        configPath: path.join(boltPath, 'grunt'),
        data: options,
        jitGrunt: {
            staticMappings: {
                pages: path.join(boltPath, 'grunt-tasks/pages.js'),
                htmllint: 'grunt-html',
                bom: 'grunt-bom-removal'
            }
        }
    });

};
