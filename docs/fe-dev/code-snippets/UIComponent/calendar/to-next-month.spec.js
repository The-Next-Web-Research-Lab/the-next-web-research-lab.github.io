const {specLog, logResult} = require('../../../../0 todo/spec-log')
const toNextMonth = require('./to-next-month')

specLog('toNextMonth - 2019/1', function () {
  const year = 2019
  const month = 1
  const result = toNextMonth({year, month})

  return result.year === 2019 && result.month === 2
})

specLog('toNextMonth - 2019/6', function () {
  const year = 2019
  const month = 6
  const result = toNextMonth({year, month})

  return result.year === 2019 && result.month === 7
})

specLog('toNextMonth - 2019/12', function () {
  const year = 2019
  const month = 12
  const result = toNextMonth({year, month})

  return result.year === 2020 && result.month === 1
})

logResult()
