module.exports = {
    testsDependencies: {
        expand: true,
        flatten: true,
        src: [
            'bower_components/jquery/dist/*',
            'bower_components/qunit/qunit/*'
        ],
        dest: 'tests/lib/',
        filter: 'isFile'
    }
};