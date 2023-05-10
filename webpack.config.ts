import path from "path";
import webpack from "webpack"
import HTMLWebpackPlugin from 'html-webpack-plugin';

const config: webpack.Configuration = {
    mode: "development",
    entry: path.resolve(__dirname, 'src', 'index.ts'),
    output: {
        filename: '[name].[contenthash].js', // contenthash - хеширование
        path: path.resolve(__dirname, 'build'),
        clean: true
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'], // указываем типы файлов для которых при импорте мы не будем указывать расширение
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html') // говорим брать за темплейт наш хтмл файл.
        }),
        new webpack.ProgressPlugin() // прогресс при сборке проекта
    ]
}

export default config;
