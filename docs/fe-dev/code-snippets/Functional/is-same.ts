export const isSame = function<T>(src: T) {
  return (target: T): boolean => Object.is(src, target)
}

console.log(isSame('foo')('foo') ===true)
console.log(isSame(window)(window) ===true)

console.log(isSame('foo')('bar') ===false)
console.log(isSame([])([]) ===false)

var test = { a: 1 }
console.log(isSame(test)(test) ===true)

console.log(isSame(null)(null) ===true)

console.log(isSame(0)(-0) === false)
console.log(isSame(-0)(-0) === true)
console.log(isSame(NaN)(0/0) ===true)
