module.exports = function(grunt)
{
    'use strict';

    require('time-grunt')(grunt);
    require('load-grunt-config')(grunt, {
        jitGrunt: true
    });

    // Default tasks
    grunt.registerTask('default', [
        'newer:copy',
        'newer:jshint:main',
        'newer:uglify'
    ]);

    // Tests tasks
    grunt.registerTask('test', [
        'connect:tests',
        'jshint:tests',
        'qunit',
        'watch'
    ]);
};