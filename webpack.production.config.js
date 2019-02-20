const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "",
    output: {
        filename: "bundle.[contenthash].js",
        path: path.resolve(__dirname, "./dist"),
        publicPath: ""
    },
    mode: "production",
    module: {
        rules: [ 
            {
                test: /\.(png|jpg)$/,
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
                            "@babel/env"
                        ]
                    }
                }
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "styles.[contenthash].css"
        }),

        new CleanWebpackPlugin("dist"), 

        // new HtmlWebpackPlugin({ --this modifies the html page rendered
        //     title: "Hello world",
        //     filename: "subfolder/custom_filename.html",
        //     meta: {
        //         viewport: "width=device-width, initial-scale=1"
        //     }
        // })
        new HtmlWebpackPlugin({ 
            title: "Hello world",
            template: "src/index.hbs",
            description: "Some description"
        })
    ]
}