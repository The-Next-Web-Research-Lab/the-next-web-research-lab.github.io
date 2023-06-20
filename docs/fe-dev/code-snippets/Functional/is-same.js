"use strict";
exports.__esModule = true;
exports.isSame = function (src) {
    return function (target) { return Object.is(src, target); };
};
console.log(exports.isSame('foo')('foo') === true);
// console.log(isSame(window)(window) ===true)
console.log(exports.isSame('foo')('bar') === false);
console.log(exports.isSame([])([]) === false);
var test = { a: 1 };
console.log(exports.isSame(test)(test) === true);
console.log(exports.isSame(null)(null) === true);
console.log(exports.isSame(0)(-0) === false);
console.log(exports.isSame(-0)(-0) === true);
console.log(exports.isSame(NaN)(0 / 0) === true);
