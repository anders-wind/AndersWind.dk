'use strict';
const path = require('path');

const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

const ENV = process.env.npm_lifecycle_event;
const isProd = ENV === 'build';

module.exports = {
    entry: {
        app: ['scripts/app.ts'],
    },

    context: path.join(process.cwd(), 'src'),

    output: {
        path: path.join(process.cwd(), 'dist'),
        filename: 'scripts/[name].[hash].js',
    },

    module: {
        rules: [{
                enforce: 'pre',
                test: /\.glsl$/,
                loader: 'webpack-glsl-loader',
                include: __dirname + '/src',
            },
            {
                test: /\.ts$/,
                loader: 'ts-loader',
            },
            {
                enforce: 'pre',
                test: /\.ts$/,
                loader: 'tslint-loader',
            },
            {
                test: /\.s?[ac]ss$/,
                use: [!isProd ? 'style-loader' : MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                ],
            },
        ],
    },

    plugins: [
        new CleanWebpackPlugin(['dist']),

        new HtmlWebpackPlugin({
            template: 'public/index.html',
            chunksSortMode: 'dependency',
        }),

        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: !isProd ? '[name].css' : '[name].[hash].css',
            chunkFilename: !isProd ? '[id].css' : '[id].[hash].css',
        }),

        new CopyWebpackPlugin([{ from: 'public' }]),
    ],

    resolve: {
        modules: ['node_modules', path.resolve(process.cwd(), 'src')],
        extensions: ['.ts', '.js', 'scss'],
    },
};