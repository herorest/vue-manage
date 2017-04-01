var path = require('path');
var config = require('../config')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var FriendlyErrors = require('friendly-errors-webpack-plugin')
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var ExtractCSS = new ExtractTextPlugin('assets/css/[name].css?[chunkhash]');
var ExtractLess = new ExtractTextPlugin('assets/css/style.css');

// NodeJS中的Path对象，用于处理目录的对象，提高开发效率。
// 模块导入
var env = process.env.NODE_ENV

module.exports = {
    // 入口文件地址，不需要写完，会自动查找
    entry: {
        app: './src/main.js'
    },
    // 输出
    output: {
        path: config.build.assetsRoot,
        // 文件地址，使用绝对路径形式
        filename: 'assets/[name].js',
        //[name]这里是webpack提供的根据路口文件自动生成的名字
        publicPath: '/'
        // 公共文件生成的地址
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
            { test: /\.(svg|jpe?g|png|gif|ico)$/,
                loaders: [
                    'file?hash=sha512&digest=hex&name=images/[name].[ext]',
                    'image-webpack?{progressive:true, optimizationLevel: 7, interlaced: false, pngquant:{quality: "65-90", speed: 4}}'
                ]
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.vue','.json'],
        alias: {
            components: path.join(__dirname, '../src/components'),
            vue: 'vue/dist/vue.js'
        }
    },
    plugins: [
        ExtractCSS,
        ExtractLess,
        new webpack.DefinePlugin({
            'process.env': config.build.env
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
