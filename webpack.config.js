const path = require("path")
const HtmlWebpackPlugun = require("html-webpack-plugin")
const webpack = require("webpack")
// const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
    // 配置此项用于区别于process.cwd，因为默认使用的是node运行的工作目录
    context: path.resolve(__dirname),

    // 如果传入一个字符串或字符串数组，chunk 会被命名为 main。如果传入一个对象，则每个属性的键(key)会是 chunk 的名称
    entry: './src/main.js',
    // entry: {
    //     a: './src/a.js'  // 这样写生成的bundle名称就是 a.bundle.js
    // },

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename:"[name].bundle.js",
        clean: true,  // 生成文件之前清空output目录
        chunkFilename: 'js/[name].bundle.js'
    },

    resolve: {
        // 方便导入文件，不用写相对路径
        alias: {
            '@': path.resolve(__dirname, 'src/'),
            vue$: 'vue/dist/vue.runtime.esm.js' // 这个指定导入的vue是哪个版本的vue
        },
        extensions: ['.js','.vue'], // 这样js文件 vue文件就可以不用写后缀名了
        // 指定解析模块时应该搜索的目录
        // modules: [
        //     'node_modules',
        //     path.resolve(__dirname, 'node_modules'),
        // ]
    },

    // 解析webpack的loader包
    // resolveLoaders: {
    //     modules: [
    //         'node_modules',
    //         path.resolve(__dirname, 'node_modules'),
    //     ]
    // },

    module:{
        rules:[
            // 
            // babel-loader的使用
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    "presets": [
                        ["@babel/preset-env", {
                        "useBuiltIns": "usage",
                        "corejs": {
                          "version": 3
                        },
                        "targets": {
                          "chrome": "60",
                          "firefox": "50"
                        }
                      }]
                      ]
                }
            },
            // vue文件解析
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            // css
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugun({
            template:'./public/index.html'
        }),
        // new VueLoaderPlugin()
    ],
    mode: "development",
    devServer: {
        open: true,
        port: 8080,
        hot: true,
        proxy: {
            '/login':{
                changeOrigin: true,
                target: 'http://localhost:8088'
            }
        }
    }
}