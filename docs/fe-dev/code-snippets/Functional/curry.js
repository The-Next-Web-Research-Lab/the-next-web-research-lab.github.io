const curry1 = fn => arg => fn(arg)

parseInt('11') // => 11
parseInt('11', 2) // => 3

['11', '11', '11'].map(parseInt)
// => [11, NaN, 3]

['11', '11', '11'].map(curry1(parseInt))
// => [11, 11, 11]

const curry2 = fn => arg1 => arg2 => fn(arg1, arg2)

const map = curry2((fn, arr) => arr.map(fn))
map(v => v * 10)([1, 2, 3])
// [10, 20, 30]