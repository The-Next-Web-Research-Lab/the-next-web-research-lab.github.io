const {specLog, logResult} = require('../../../../0 todo/spec-log')
const toPrevMonth = require('./to-prev-month')

specLog('toPrevMonth - 2019/1', function () {
  const year = 2019
  const month = 1
  const result = toPrevMonth({year, month})

  return result.year === 2018 && result.month === 12
})

specLog('toPrevMonth - 2019/6', function () {
  const year = 2019
  const month = 6
  const result = toPrevMonth({year, month})

  return result.year === 2019 && result.month === 5
})

specLog('toPrevMonth - 2019/12', function () {
  const year = 2019
  const month = 12
  const result = toPrevMonth({year, month})

  return result.year === 2019 && result.month === 11
})

logResult()
