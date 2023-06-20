// map + reduce
const fromEntries = arr => arr
  .map(([k, v]) => ({[k]: v}))
  .reduce((acc, obj) => Object.assign(acc, obj))

// reduce
const fromEntries = arr => arr
  .reduce((obj, [k, v]) => {
    return Object.assign(obj, {[k]: v})
  }, {})

const arr = [['a', 1], ['b', 2], ['c', 3]]
fromEntries(arr) // {a: 1, b: 2, c: 3}