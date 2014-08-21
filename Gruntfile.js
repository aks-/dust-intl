module.exports = function (grunt) {

    var libpath = require('path');

    grunt.initConfig({
        clean: {
            dist: 'dist/',
            lib : 'lib/',
            tmp : 'tmp/'
        },

        copy: {
            tmp: {
                expand : true,
                flatten: true,
                src    : 'tmp/src/*.js',
                dest   : 'lib/'
            }
        },

        jshint: {
            all: ['src/*.js', 'tests/*.js']
        },

        bundle_jsnext: {
            dest: 'dist/dust-intl.js',

            options: {
                namespace: 'DustIntl'
            }
        },

        cjs_jsnext: {
            dest: 'tmp/'
        },

        uglify: {
            options: {
                preserveComments: 'some'
            },

            dist: {
                src : 'dist/dust-intl.js',
                dest: 'dist/dust-intl.min.js'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-bundle-jsnext-lib');

    grunt.registerTask('default', [
        'jshint', 'clean', 'bundle_jsnext', 'uglify', 'cjs_jsnext', 'copy'
    ]);
};
