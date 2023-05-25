import webpack = require('webpack');
import path = require('path');
import { BuildPaths } from '../build/types/config';
import { buildCssLoaders } from '../build/loaders/buildCssLoaders';

export default ({ config }: {config: webpack.Configuration}) => {
    const paths: BuildPaths = {
        build: '',
        html: '',
        entry: '',
        src: path.resolve(__dirname, '..', '..', 'src'),
    };
    config.resolve.modules.push(paths.src);
    config.resolve.extensions.push('.ts', 'tsx');

    // eslint-disable-next-line no-param-reassign
    config.module.rules = config.module.rules.map((rule: webpack.RuleSetRule) => {
        if (/svg/.test(rule.test as string)) {
            return {
                ...rule,
                exclude: /\.svg$/i,
            };
        }

        return rule;
    }); // мы находим правило которое обрабатывает свг, и мы если это правильно нашли берем и исключаем обработку свг для этого правила

    config.module.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    });

    config.module.rules.push(buildCssLoaders(true));

    return config;
};
