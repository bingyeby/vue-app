const webpack = require("webpack");
//webpack.config.js
module.exports = {
    // 入口文件
    // entry: './src/main.js',
    entry: {
        main: [
            'webpack-dev-server/client?http://localhost:8080/',
            './src/main.js'
        ],
        test_bs: [
            'webpack-dev-server/client?http://localhost:8080/',
            './src/test_bs.js'
        ]
    },
    // 编译输出的文件路径
    output: {
        //`dist`文件夹
        path: './dist',
        // 文件 `build.js` 即 dist/build.js
        filename: '[name].js',
        publicPath: '/dist/'
    },
    //加载器
    module: {
        loaders: [
            {
                test: /\.vue$/,
                exclude: /node_modules/,
                loader: 'vue-loader'
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.stylus$/,
                exclude: /node_modules/,
                loader: 'style-loader!css-loader!stylus-loader'
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel'
            },
            {
                test: /\.(png)|(jpg)|(gif)|(woff)|(svg)|(eot)|(ttf)$/,
                loader: "url-loader",
                options: {
                    limit: 1,   //小于50K的 都打包
                }
            }
        ]
    },
    babel: {
        presets: ['es2015', 'stage-0'],
        plugins: ['transform-runtime']
    },
    resolve: {
        /* http://blog.csdn.net/fengjingyu168/article/details/72911421 */
        alias: {
            "vue$": "vue/dist/vue.common.js"
        },
        extensions: ["", ".vue", ".js", ".css"]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery"
        })
    ],
    devtool: 'source-map'/*  */
};