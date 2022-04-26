declare interface EnumMap {
    [key: string]: EnumItem
}

declare interface EnumItem {
    text: string
    value: any
}

declare type MapHandler = (text: string, value: string) => any;

declare interface EnumInstance {
    text: (enumValue: any) => string | null
    has: (enumValue: any) => boolean
    map: (handler: MapHandler) => any[]
    [key: string]: any
}

export function createEnum(map: EnumMap): EnumInstance;
