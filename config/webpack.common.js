const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');

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
        }),
        new VueLoaderPlugin()
    ],

    // general rules
    module: {
        rules: [
            //vue files
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            // ts files
            {
                test: /\.ts$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
                options: {
                    appendTsSuffixTo: [/\.vue$/]
                }
            },
        ]
    },

    // end point
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__base, 'dist'),
        clean: true
    }




}