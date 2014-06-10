module.exports = {
    options: {
        reporter: require('jshint-stylish')
    },
    main: {
        src: [
            'Gruntfile.js',
            'grunt/*.js',
            'src/js/*.js',
            '!src/js/*.min.js'
        ]
    },
    tests: {
        src: ['tests/js/*.js']
    }
};