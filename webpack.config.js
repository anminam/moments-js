const path = require('path');

module.exports = {
    mode: 'none',
    entry: './src/index.js',
    output: {
        finename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        port: 9000
    }
}