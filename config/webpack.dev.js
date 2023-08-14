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
        static: './build',
        hot: true,
        client: {
            overlay: true
        }
    },

    // general rules
    module: {
        rules: [
            // css files
            {
                test: /\.css$/,
                use: ['vue-style-loader', 'css-loader']
            }
        ]
    },
    
});
