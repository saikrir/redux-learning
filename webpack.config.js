const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
devtool: 'inline-source-map',



    module.exports = {
        entry: './src/index.js',
        output: {
            filename: '[name].min.js',
            path: path.resolve(__dirname, 'dist')
        },
        devtool: 'inline-source-map',
        /*plugins: [
            new CleanWebpackPlugin(),
            new HtmlWebpackPlugin({
                title: 'Development'
            })
        ],*/
        devServer: {
            contentBase: './dist'
        },
        module: {
            rules: [
                { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
            ]
        }
    };