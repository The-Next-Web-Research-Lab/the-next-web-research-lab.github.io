var pluck = function (keys, obj) {
    return keys.map(function (key) { return obj[key]; });
};
var obj = { a: 1, b: 2, c: 3 };
console.log(pluck(['a', 'b'], obj));
// [1, 2]
