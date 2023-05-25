import HTMLWebpackPlugin = require('html-webpack-plugin') ;
import webpack = require('webpack');
import MiniCssExtractPlugin = require('mini-css-extract-plugin');
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import { BuildOptions } from './types/config';

export const buildPlugins = ({ paths, isDev }: BuildOptions): webpack.WebpackPluginInstance[] => {
    const plugins = [
        new HTMLWebpackPlugin({
            template: paths.html, // говорим брать за темплейт наш хтмл файл.
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css',
        }), // нужен для того чтобы создавались отдельно цсс файлы в сборке
        new webpack.ProgressPlugin(), // прогресс при сборке проекта
        new webpack.DefinePlugin({ // для создания глобальных переменных
            __IS_DEV__: JSON.stringify(isDev),
        }),
    ];

    if (isDev) {
        plugins.push(
            new webpack.HotModuleReplacementPlugin(),
            new BundleAnalyzerPlugin({
                openAnalyzer: false,
            }),
        );
    }

    return plugins;
};
