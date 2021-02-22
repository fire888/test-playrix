const path = require('path');
const merge = require('webpack-merge');
const appCommonConfig = require('./webpackCommon.js');

module.exports = () => {
    const config = merge.merge(appCommonConfig(), {
        mode: 'development',
        devtool: 'inline-source-map',
        devServer: {
            contentBase: path.join(__dirname, '../public'),
            host: 'localhost',
            compress: true,
            port: 9000,
            // allowedHosts: ['ci.ait']
        }
    });
    return config
}


