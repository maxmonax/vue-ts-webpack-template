const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// utils
const __base = path.resolve(__dirname, '..');
const __src = path.resolve(__base, 'src');

module.exports = {

    // entry point
    entry: {
        app: path.resolve(__src, 'main.ts')
    },

    // general plugins
    plugins: [
        new HtmlWebpackPlugin({
            title: 'base config',
            // favicon: path.resolve(__src, 'static', 'favicon.ico'),
            template: path.resolve(__src, 'templates', 'index.html'),
        })
    ],

    // general rules
    module: {
        rules: [
            // ts files
            {
                test: /\.ts$/,
                loader: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },

    // end point
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__base, 'dist'),
        clean: true
    }




}