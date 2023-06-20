const {clone} = require('./collection')

const a = {
  message: 'Hello',
  inner: {
    message: 'World',
    inner: {
      message: 'World'
    }
  },
  arr: [1, 2],
  set: new Set([1, 2]),
  map: new Map([['key1', 'value1'], ['key2', 'value2']])
}
const c = clone(a)

a.message = 'Hello World'
a.inner.message = 'Hello Earth'
a.inner.inner.message = 'Hello Earth'
a.arr.push(3)
a.set.add(3)
a.map.set('key3', 'value3')

console.group('Collection')
console.log(a === c, false)
console.log(a.message === c.message, false)
console.log(a.inner.message === c.inner.message, false)
console.log(a.inner.inner.message === c.inner.inner.message, false)
console.log(...a.arr, ...c.arr, false)
console.log(...a.set, ...c.set, false)
console.log(...a.map, ...c.map, false)
console.groupEnd()
console.group('Collection - null')
console.log(clone(null))
console.groupEnd()