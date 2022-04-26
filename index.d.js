class Enum {

    /**
     * @param {EnumMap} enumMap
     */
    constructor(enumMap) {
        this._map = new Map();
        Object.keys(enumMap).forEach(key => {

            if (typeof key !== 'string') throw new Error("不能使用非字符串 key");

            const item = enumMap[key];
            this[key] = item.value;
            this[key + '_T'] = item.text || null;
            this._map.set(item.value, item.text || null);
        });
    }

    /**
     * @param {any} enumValue - 枚举值
     * @return {string|null}
     */
    text(enumValue) {
        return this._map.get(enumValue);
    }

    /**
     * @param { (text: string, value: any) => {} } handler
     * @return {unknown[]}
     */
    map(handler) {
        const arr = [];
        this._map.forEach((t, v) => arr.push(handler(t, v)));
        return arr;
    }

    /**
     * @description 判断枚举值是否在当前枚举中
     * @param {any} enumValue
     * @return {boolean}
     */
    has(enumValue) {
        return this._map.has(enumValue);
    }
}

/**
 * @param {EnumMap} enumMap
 * @return {EnumInstance}
 */
function createEnum(enumMap) {
    return new Proxy(new Enum(enumMap), {
        get(target, key, receiver) {
            return Reflect.get(target, key, receiver);
        },
        set() {
            throw new Error("不能为枚举赋值");
        },
        deleteProperty() {
            throw new Error("不能删除枚举值");
        }
    });
}

export { createEnum };
