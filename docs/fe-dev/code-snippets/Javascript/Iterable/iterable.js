"use strict";
exports.__esModule = true;
var from = function (iter) { return Array.from(iter); };
exports.map = function (mapper, iterable) {
    return from(iterable).map(mapper);
};
exports.filter = function (predicate, iterable) {
    return from(iterable).filter(predicate);
};
exports.join = function (sep, iter) { return from(iter).join(sep); };
exports.size = function (iterable) { return from(iterable).length; };
console.log(exports.size(new Set(['1', '2'])));
console.log(exports.size(new Map()));
console.log(exports.size([]));
console.log(exports.size('sa'));
console.log(exports.size(0));
