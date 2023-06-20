const {
  addDay,
  subtractDay,
  diffDay,
  isLeapYear,
  toLastDay,
  toDayIndex
} = require("./index");
const {specLog, logResult} = require('../../../../../0 todo/spec-log')

specLog('addDay - tomorrow', () => {
  const today = new Date(2019, 0, 1)
  const tomorrow = addDay(today, 1)

  return tomorrow.getDate() == 2
})

specLog('addDay - nextWeek', () => {
  const today = new Date(2019, 0, 1)
  const nextWeek = addDay(today, 7)

  return nextWeek.getDate() === 8
})

specLog('subtractDay - yesterday', () => {
  const today = new Date(2019, 0, 8)
  const yesterday = subtractDay(today, 1)

  return yesterday.getDate() === 7
})

specLog('subtractDay - prevWeek', () => {
  const today = new Date(2019, 0, 8)
  const prevWeek = subtractDay(today, 7)

  return prevWeek.getDate() === 1
})

specLog('diffDay', () => {
  const today = new Date(2019, 0, 1)
  const nextWeek = new Date(2019, 0, 8)

  return diffDay(today, nextWeek) === 7
})

specLog('isLeapYear - 2019', () => {
  const year = 2019
  const result = isLeapYear(year)

  return result === false
})

specLog('isLeapYear - 2020', () => {
  const year = 2020
  const result = isLeapYear(year)

  return result === true
})

specLog('toLastDay - 2020/1', () => {
  const year = 2020
  const month = 1
  const result = toLastDay({year, month})

  return result === 31
})

specLog('toLastDay - 2020/2', () => {
  const year = 2020
  const month = 2
  const result = toLastDay({year, month})

  return result === 29
})

specLog('toDayIndex - 2019/9/1', () => {
  const date = new Date(2019, 8, 1)
  const result = toDayIndex(date)

  return result === 0
})

specLog('toDayIndex - 2019/9/4', () => {
  const date = new Date(2019, 8, 4)
  const result = toDayIndex(date)

  return result === 3
})

specLog('toDayIndex - 2019/9/7', () => {
  const date = new Date(2019, 8, 7)
  const result = toDayIndex(date)

  return result === 6
})

logResult()
