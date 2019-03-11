const path = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CompressionPlugin = require("compression-webpack-plugin");
//const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = {
    entry: "./Src/IndexPage/Scripts/index.js",
    output: {
        filename: "[name].bundle.[contenthash].js",
        path: path.resolve(__dirname, "./dist"),
        publicPath: ""
    },
    optimization: {
        splitChunks: {
            chunks: "all"
        }
    },
    mode: "production",
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
                    MiniCssExtractPlugin.loader, "css-loader" 
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
        new VueLoaderPlugin(),

        new MiniCssExtractPlugin({
            filename: "[name].styles.[contenthash].css"
        }),

        //new BundleAnalyzerPlugin()
    ],
    resolve: {
        extensions: [".vue", ".js", ".css", ".json"],
        alias: {
            "vue$": "vue/dist/vue.min.js"
        }
    }
}