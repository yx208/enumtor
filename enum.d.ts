declare interface EnumMap<T> {
    [key: string]: {
        text: string
        value: T
    }
}

declare interface EnumInstance<T> {
    text: (enumValue: T) => string | null
    has: (enumValue: T) => boolean
    map: (handler: (text: string, value: T) => any) => any[]
    [key: keyof EnumMap<T>]: any
}

export function createEnum<T>(map: EnumMap<T>): EnumInstance<T>;