class Enum {

    /**
     * @private
     */
    _text = {};

    /**
     * @param {EnumMap} enumMap
     */
    constructor(enumMap) {
        Object.keys(enumMap).forEach(key => {
            const item = enumMap[key];
            this[key] = item.value;
            this[key + '_T'] = item.text || null;
            this._text[item.value] = item.text || null;
        });
        Object.freeze(this._text);
    }

    /**
     * @param {any} enumValue - 枚举值
     */
    text(enumValue) {
        return this._text[enumValue] || null;
    }

    /**
     * @param { (text: any, key: string) => {} } handler
     */
    map(handler) {
        return Object.keys(this._text).reduce((arr, key) => {
            arr.push(handler(this.text(key), key));
            return arr;
        }, []);
    }

    /**
     * @description 判断枚举值是否在当前枚举中
     * @param {any} enumValue
     */
    has(enumValue) {
        return enumValue in this._text;
    }
}

/**
 * @param {EnumMap} enumMap
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

export {
    createEnum
}
