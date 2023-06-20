const {specLog, logResult} = require('../../../../0 todo/spec-log')
const toMonthDays = require('./to-month-days')

specLog('toMonthDays - 2019/9', function () {
  const year = 2019
  const month = 9
  const result = toMonthDays({year, month})

  // console.log('week length', result.length === 5)
  // console.log('day length', result[0].length === 7)
  // console.log('first week', result[0].join('') === '1234567', result[0].join(''))
  // console.log('last week', result[4].join('') === '2930', result[4].join(''))

  return result.length === 5 &&
    result[0].length === 7 &&
    result[0].join('') === '1234567' &&
    result[4].join('') === '2930'
})

specLog('toMonthDays - 2019/1', function () {
  const year = 2019
  const month = 1
  const result = toMonthDays({year, month})

  return result.length === 5 &&
    result[0].length === 7 &&
    result[0].join('') === '12345' &&
    result[4].join('') === '2728293031'
})

specLog('toMonthDays - 2019/6', function () {
  const year = 2019
  const month = 6
  const result = toMonthDays({year, month})

  return result.length === 6 &&
    result[0].length === 7 &&
    result[0].join('') === '1' &&
    result[5].join('') === '30'
})

specLog('toMonthDays - 2020/2', function () {
  const year = 2020
  const month = 2
  const result = toMonthDays({year, month})

  return result.length === 5 &&
    result[0].length === 7 &&
    result[0].join('') === '1' &&
    result[4].join('') === '23242526272829'
})

logResult()

