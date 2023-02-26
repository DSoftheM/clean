import { Configuration, HotModuleReplacementPlugin } from "webpack";
import * as webpackDevServer from "webpack-dev-server";

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const webpackConfig: Configuration = {
    mode: "development",
    entry: "./src/index.tsx",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].[hash].js",
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({ template: "./public/index.html" }),
        new HotModuleReplacementPlugin(),
    ],
    devServer: {
        port: 3000,
    },
    module: {
        rules: [
            {
                test: /\.(css|scss|sass)$/,
                use: ["style-loader", "css-loader", "sass-loader"],
            },
            {
                test: /\.(png|jpeg|jpg|svg|webp)$/,
                use: ["file-loader"],
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"],
                    },
                },
            },
            {
                test: /\.(tsx?|jsx?)$/,
                use: "ts-loader",
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js", ".jsx", ".jpeg"],
        alias: {
            "@root": path.resolve(__dirname, "src"),
        },
    },
};

module.exports = webpackConfig;
