var path = require('path');
var config = require('../config')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var FriendlyErrors = require('friendly-errors-webpack-plugin')
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var ExtractCSS = new ExtractTextPlugin('css/[name].css?[chunkhash]');
var ExtractLess = new ExtractTextPlugin('css/style.css');

// NodeJS中的Path对象，用于处理目录的对象，提高开发效率。
// 模块导入
var env = process.env.NODE_ENV
module.exports = {
    // 入口文件地址，不需要写完，会自动查找
    entry: {
        app: ['./test/dev-client','./src/main.js']
    },
    // 输出
    output: {
        path: config.build.assetsRoot,
        // 文件地址，使用绝对路径形式
        filename: '[name].js',
        //[name]这里是webpack提供的根据路口文件自动生成的名字
        publicPath: '/'
        // 公共文件生成的地址
    },
    // 服务器配置相关，自动刷新!
    devServer: {
        historyApiFallback: true,
        hot: false,
        inline: true,
        grogress: true
    },
    // 加载器
    module: {
        // 加载器
        loaders: [
        // 解析.vue文件
            { test: /\.vue$/, loader: 'vue' },
            { test: /\.js$/, loader: 'babel', exclude: /node_modules/ },
            { test: /\.css$/, loader: ExtractCSS.extract(['css']) },
            { test: /\.less$/,loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader")},
            { test: /\.(jpe?g|png|gif|ico)$/, loader: 'url-loader?limit=8192'},
            { test: /\.(woff|woff2?|eot|ttf|otf|svg)/, loader: "file-loader" }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.vue','.json'],
        alias: {
            components: path.join(__dirname, '../src/components'),
            vue: 'vue/dist/vue.js'
        }
    },
    devtool: 'eval',
    plugins: [
        ExtractCSS,
        ExtractLess,
        new webpack.DefinePlugin({
            'process.env': config.dev.env
        }),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new HtmlWebpackPlugin({
          filename: 'index.html',
          template: 'index.html',
          inject: true
        }),
        new FriendlyErrors()
    ]
};
