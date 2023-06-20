const toMonthDays = require('./to-month-days')

const memoize = (fn) => {
  const cache = {}
  return ({year, month}) => {
    const key = `${year}${month}`
    if (!cache[key]) {
      cache[key] = fn(key)
    }
    return cache[key]
  }
}

const memoToMonthDays = memoize(toMonthDays)
console.time('Perf')
Array.from({length: 10000}).forEach(() => {
  const year = 2019
  const month = 9
  const result = memoToMonthDays({year, month})
})
console.timeEnd('Perf')
