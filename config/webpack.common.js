const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');
const CopyWebpackPlugin = require('copy-webpack-plugin');

// utils
const __base = path.resolve(__dirname, '..');
const __src = path.resolve(__base, 'src');

module.exports = {

    // entry point
    entry: {
        app: path.resolve(__src, 'main.ts')
    },

    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },

    // general plugins
    plugins: [
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: '**/*',
                    context: path.resolve(__base, 'public'),
                    to: './'
                }
            ]
        }),
        new HtmlWebpackPlugin({
            title: 'base config',
            template: path.resolve(__src, 'html', 'index.html'),
            filename: 'index.html',
            minify: {
                // collapseWhitespace: true,
                removeComments: true,
                removeRedundantAttributes: true,
                useShortDoctype: true
            }
        }),
        new VueLoaderPlugin(),
        
    ],

    // general rules
    module: {
        rules: [
            // vue files
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
            // images
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/images/[name]-[hash:4][ext]'
                }
            },
            // fonts
            {
                test: /\.(woff(2)?|ttf|otf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                generator: {
                    filename: 'assets/fonts/[name]-[hash:4].[ext]'
                }
            }
        ]
    },

    // end point
    output: {
        filename: 'app.bundle.js',
        path: path.resolve(__base, 'build'),
        clean: true
    }




}