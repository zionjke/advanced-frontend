import HTMLWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";
import {BuildOptions} from "./types/config";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export const buildPlugins = ({paths}: BuildOptions): webpack.WebpackPluginInstance[] => {
    return [
        new HTMLWebpackPlugin({
            template: paths.html // говорим брать за темплейт наш хтмл файл.
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css'
        }), // нужен для того чтобы создавались отдельно цсс файлы в сборке
        new webpack.ProgressPlugin() // прогресс при сборке проекта
    ]
}
