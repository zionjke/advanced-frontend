import {ResolveOptions} from "webpack";
import {BuildOptions} from "./types/config";

export const buildResolvers = (options: BuildOptions): ResolveOptions => {
    return {
        extensions: ['.tsx', '.ts', '.js'], // указываем типы файлов для которых при импорте мы не будем указывать расширение
        preferAbsolute: true, // абсолютые пути в приоритете
        modules: [options.paths.src, 'node_modules'],
        mainFiles: ['index'], // для каждого модуль мейн файлом будет являтся index
        alias: {} // можем сделать alias для путей
    }
}
