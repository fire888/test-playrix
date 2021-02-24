
const merge = require('webpack-merge');
const appCommonConfig = require('./webpackCommon.js');
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = () => {    
    const config = merge.merge(appCommonConfig(), {
        mode: 'production',
        output: {
            path: path.resolve(__dirname, '../dist'),
            filename: `app.bundle.js`
        },
        plugins: [
            new CleanWebpackPlugin()
        ],
    });

    return config
}