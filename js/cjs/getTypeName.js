const { toString } = String;
const { isArray } = Array;

module.exports = {
    getTypeName(value) {
        const type = typeof value;

        if (type === "object") {
            return value === null
                    ? "null"
                    : isArray.call(value)
                    ? "array"
                    : (
                        value.constructor?.name
                        ?? type
                    ).toLowerCase();
        } else if (type === "function") {
            return toString.call(value).match(/^[a-z]+/g)
                    ?.[0]
                    ?? type;
        }

        return type;
    }
}