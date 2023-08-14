const path = require('path/posix');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    // prod mode
    mode: 'production'
});
