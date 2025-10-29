const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env, argv) => {

    const isProduction = argv.mode === 'production';

    return {
        // 基础配置项目
        mode: isProduction ? 'production' : 'development',
        entry: path.resolve(__dirname, 'src', 'index.js'),
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: '[name].bundle.js',
            // 在生成文件之前清理输出目录
            clean: true,
        },
        plugins: [
            // public文件
            new HtmlWebpackPlugin({
                template: './public/index.html',
            }),
            new CopyWebpackPlugin({
                patterns: [
                    { from: 'public/manifest.json', to: 'manifest.json' },
                    { from: 'public/robots.txt', to: 'robots.txt' },
                    { from: 'public/favicon.ico', to: 'favicon.ico' },
                    { from: path.resolve(__dirname, 'public', 'logo192.png'), to: path.resolve(__dirname, 'dist') },
                    { from: path.resolve(__dirname, 'public', 'logo512.png'), to: path.resolve(__dirname, 'dist') },
                ]
            })
        ],

        // http服务
        devServer: {
            static: [
                {
                    directory: path.resolve(__dirname, 'dist'),
                    watch: true,
                },
                {
                    directory: path.resolve(__dirname, 'public'),
                    watch: true,
                }
            ],
            compress: true,
            port: 3000,
            open: true,
            hot: true,
        },
        // source-map
        devtool: 'source-map',
        // loader
        module: {
            rules: [
                {
                    test: /\.css$/,
                    use: [
                        'style-loader',
                        'css-loader',
                        // {
                        //     loader: 'css-loader',
                        //     options: {
                        //         modules: {
                        //             mode: 'local',
                        //             localIdentName: '[name]__[local]___[hash:base64:5]'
                        //         }
                        //     }
                        // },
                        "postcss-loader"
                    ]
                },
                {
                    test: /\.scss$/,
                    use: [
                        'style-loader',
                        'css-loader',
                        'postcss-loader',
                        // {
                        //     loader: 'postcss-loader',
                        //     options: {
                        //         postcssOptions: require('./postcss.config.js')
                        //     }
                        // },
                        'sass-loader'
                    ]
                },
                {
                    test: /\.js$/, // 匹配 .js 文件
                    exclude: /node_modules/, // 排除 node_modules 目录
                    use: ['babel-loader']
                },
                {
                    test: /\.ts$/, // 匹配 .ts 文件
                    use: 'ts-loader', // 使用 ts-loader 进行编译
                    exclude: /node_modules/, // 排除 node_modules 目录
                },
            ]
        }
    }
}

