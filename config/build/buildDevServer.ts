import type { Configuration as DevServerConfigurations } from 'webpack-dev-server';
import { BuildOptions } from './types/config';

export const buildDevServer = (options: BuildOptions): DevServerConfigurations => ({
    port: options.port,
    open: true,
    hot: true,
    historyApiFallback: true, // прокси реквестов через index page
});
