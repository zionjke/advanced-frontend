import {ResolveOptions} from "webpack";

export const buildResolvers = (): ResolveOptions => {
    return {
        extensions: ['.tsx', '.ts', '.js'], // указываем типы файлов для которых при импорте мы не будем указывать расширение
    }
}
