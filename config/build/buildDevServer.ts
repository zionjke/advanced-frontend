import {BuildOptions} from "./types/config";
import type {Configuration as DevServerConfigurations} from 'webpack-dev-server'

export const buildDevServer = (options: BuildOptions): DevServerConfigurations => {
    return {
        port: options.port,
        open: true,
        hot: true,
        historyApiFallback: true // прокси реквестов через index page
    }
}
