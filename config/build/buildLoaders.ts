import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {BuildOptions} from "./types/config";

export const buildLoaders = ({isDev}: BuildOptions): webpack.RuleSetRule[] => {
    const cssLoaders = {
        test: /\.s[ac]ss$/i,
        use: [
            // Creates `style` nodes from JS strings
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader, // добавляем вместо style-loader
            // Translates CSS into CommonJS
            {
                loader: "css-loader",
                options: {
                    modules: {
                        auto: (resPath: string) => resPath.includes('.module.'), // задаем условие, что если это не цсс модуль то он будет обрабатыватся как обычный цсс в сборке.
                        localIdentName: isDev // название файлов в сборке.
                            ? '[path][name]__local--[hash:base64:5]'
                            : '[hash:base64:8]'
                    },
                }
            },
            // Compiles Sass to CSS
            "sass-loader",
        ],
    };

    // Если не используем тайпскрипт - нужен babel-loader
    const typeScriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };

    return [typeScriptLoader, cssLoaders]
}
