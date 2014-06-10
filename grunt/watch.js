module.exports = {
    tests: {
        options: {
            livereload: true
        },
        files: [
            'tests/js/*.js',
            'tests/*.html',
            'src/js/*.js'
        ],
        tasks: ['qunit']
    }
};