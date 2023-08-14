const path = require('path/posix');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {

    // dev mode
    mode: 'development',
    devtool: 'inline-source-map',

    // dev server
    devServer: {
        port: 8080,
        static: './dist',
        hot: true,
        client: {
            overlay: true
        }
    }

});
