const peek = function <T, K extends keyof T>(key: K, obj: T) {
  return obj[key]
}

const obj = {a: 1, b: 2, c: 3}
console.log(peek('a', obj))
// 1
console.log(peek('b', obj))
// 2