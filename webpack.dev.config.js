const path = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");

module.exports = {
    entry: "./Src/IndexPage/Scripts/index.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "./dist"),
        publicPath: ""
    },
    mode: "development",
    devServer: { 
        contentBase: path.resolve(__dirname, "./dist"), 
        index: "index.html", 
        port: 9000
    },
    module: {
        rules: [
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    "file-loader"
                ]
            },
            {
                test: /\.css$/,
                use: [
                    "vue-style-loader", "css-loader" 
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            "@babel/preset-env"
                        ]
                    }
                }
            },
            {
                test: /\.vue$/,
                exclude: /node_modules/,
                use: [
                    "vue-loader"
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin("dist"),
        new HtmlWebpackPlugin({
            title: "Get Set Script",
            filename: "index.html",
            template: "./Src/IndexPage/templateIndex.html"
        }),
        new VueLoaderPlugin()
    ],
    resolve: {
        extensions: [".vue", ".js", ".css", ".json" ],
        alias: {
            "vue$": "vue/dist/vue.esm.js"
        }
    }
}