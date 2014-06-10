module.exports = {
    options: {
        mangle: true,
        sourceMap: true
    },
    main: {
        files: {
            'src/js/main.min.js': ['src/js/main.js']
        }
    }
};