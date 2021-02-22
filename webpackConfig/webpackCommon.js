const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = () => {
    return ({
        entry: './src/index.js',
        module: {
            rules: [
                {
                    test: /\.txt$/,
                    loader: 'file-loader',
                },
                {
                    test: /\.atlas$/,
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'images/'
                    }
                },
                {
                    test: /\.css$/i,
                    use: ['style-loader', 'css-loader']
                },
                {
                    test: /\.(png|svg|jpg|gif)$/,
                    use: [{
                        loader: 'file-loader',
                            options: {
                                name: '[name].[ext]',
                                outputPath: 'images/'
                            }
                    }]
                },
                {
                    test: /\.(wav|ogg|mp3)$/,
                    use: [{
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'audio/'
                        }
                    }]
                },
                {
                    type: 'javascript/auto',
                    test: /\.(json|fnt)$/,
                    use: [{
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'images/'
                        }
                    }]
                },
                {
                    test: /\.(ttf)(\?v=\d+\.\d+\.\d+)?$/,
                    use: [
                        {
                            loader: 'file-loader',
                            options: {
                                name: '[name].[ext]',
                                outputPath: 'fonts/'
                            }
                        }
                    ]
                }
            ]
        },
        plugins: [
            new HtmlWebpackPlugin({template: 'public/index.html'}),
            new webpack.ProvidePlugin({
                'PIXI': 'pixi.js-legacy',
            })
        ]
    })
}