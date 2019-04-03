const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: {
        main: [
            './src/js/App.js',
            './src/sass/main.sass'
        ]
    },
    output: {
        filename: '[name].js',
        path: __dirname + '/public'
    },
    module: {
        rules: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
            {
                test: /\.sass$/,
                use: [{
                    loader: MiniCssExtractPlugin.loader
                }, {
                    loader: 'css-loader?url=false'
                }, {
                    loader: 'postcss-loader', options: {
                        config: {
                            path: './'
                        }
                    }
                }, {
                    loader: 'sass-loader'
                }
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: "[name].css",
        })
    ]
};
