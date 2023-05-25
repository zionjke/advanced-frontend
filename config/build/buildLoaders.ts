import webpack = require('webpack');
import { BuildOptions } from './types/config';
import { buildCssLoaders } from './loaders/buildCssLoaders';

export const buildLoaders = ({ isDev }: BuildOptions): webpack.RuleSetRule[] => {
    const babelLoader = { // траспилятор который преобразовывает код из одних стандартов в другие( чтобы работало во всех браузерах)
        test: /\.(js|jsx|tsx)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env'],
                plugins: [
                    [
                        'i18next-extract',
                        {
                            locales: ['ru', 'en'],
                            keyAsDefaultValue: true,
                        },
                    ],
                ],
            },
        },
    };

    const svgLoader = {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    };

    const fileLoader = {
        test: /\.(png|jpe?g|gif|woff|woff2)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    };

    const cssLoaders = buildCssLoaders(isDev);

    // Если не используем тайпскрипт - нужен babel-loader
    const typeScriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };

    return [babelLoader, fileLoader, svgLoader, typeScriptLoader, cssLoaders];
};
