type Mods = Record<string, boolean | string>

export const classNames = (cls: string, mods: Mods, additional: string[]): string => {
    return [
        cls,
        ...additional,
        // Object.keys(mods).filter(key => mods[key])
        ...Object.entries(mods)
            .filter(([cls,value]) => Boolean(value))
            .map(([cls, value]) => cls)
    ]
        .join(' ')
}
