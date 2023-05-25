import MiniCssExtractPlugin = require('mini-css-extract-plugin');

export function buildCssLoaders(isDev: boolean) {
    return {
        test: /\.s[ac]ss$/i,
        use: [
            // Creates `style` nodes from JS strings
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader, // добавляем вместо style-loader
            // Translates CSS into CommonJS
            {
                loader: 'css-loader',
                options: {
                    modules: {
                        auto: (resPath: string) => resPath.includes('.module.'), // задаем условие, что если это не цсс модуль то он будет обрабатыватся как обычный цсс в сборке.
                        localIdentName: isDev // название файлов в сборке.
                            ? '[path][name]__[local]--[hash:base64:5]'
                            : '[hash:base64:8]',
                    },
                },
            },
            // Compiles Sass to CSS
            'sass-loader',
        ],
    };
}
