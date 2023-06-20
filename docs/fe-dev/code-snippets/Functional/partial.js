const partial = (fn, ...arg1) => (...arg2) => fn(...arg1, ...arg2)

const add = (a, b) => a + b
const add10 = partial(add, 10)

add10(5) // 15

const addAll = (a, b, c, d) => a + b + c + d
const addTwo = partial(addAll, 10, 10)

addTwo(5, 5) // 30