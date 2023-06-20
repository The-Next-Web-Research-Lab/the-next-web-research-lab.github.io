var pick = function (keys, obj) {
    return keys
        .map(function (key) {
        var _a;
        return (_a = {}, _a[key] = obj[key], _a);
    })
        .reduce(function (acc, obj) { return Object.assign(acc, obj); });
};
var obj = { a: 1, b: 2, c: 3 };
console.log(pick(['a', 'b'], obj));
// {a: 1, b: 2}
