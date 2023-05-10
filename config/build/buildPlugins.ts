import HTMLWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";
import {BuildOptions} from "./types/config";

export const buildPlugins = ({paths}: BuildOptions): webpack.WebpackPluginInstance[] => {
    return [
        new HTMLWebpackPlugin({
            template: paths.html // говорим брать за темплейт наш хтмл файл.
        }),
        new webpack.ProgressPlugin() // прогресс при сборке проекта
    ]
}
