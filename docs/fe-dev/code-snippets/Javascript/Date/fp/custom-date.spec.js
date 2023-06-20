const {BeeDate} = require('./custom-date')
const {specLog, logResult} = require('../../../../../0 todo/spec-log')

specLog('create - nothing', function () {
  const nowDate = new Date()
  const date = BeeDate.create()

  const result = [
    nowDate.getFullYear() === date.getFullYear(),
    nowDate.getMonth() === date.getMonth(),
    nowDate.getDate() === date.getDate(),
    nowDate.getHours() === date.getHours(),
    nowDate.getMinutes() === date.getMinutes(),
    nowDate.getSeconds() === date.getSeconds(),
  ].every(v => v)

  return result
})

specLog('create - timestamp', () => {
	const nowDate = new Date()
	const date = BeeDate.create(+nowDate)

	const result = [
		nowDate.getFullYear() === date.getFullYear(),
		nowDate.getMonth() === date.getMonth(),
		nowDate.getDate() === date.getDate(),
		nowDate.getHours() === date.getHours(),
		nowDate.getMinutes() === date.getMinutes(),
		nowDate.getSeconds() === date.getSeconds(),
	].every(v => v)

	return result
})

specLog('create - BeeDate', () => {
	const srcDate = BeeDate.create()
	const targetDate = BeeDate.create(srcDate)

	const result = [
		srcDate.getFullYear() === targetDate.getFullYear(),
		srcDate.getMonth() === targetDate.getMonth(),
		srcDate.getDate() === targetDate.getDate(),
		srcDate.getHours() === targetDate.getHours(),
		srcDate.getMinutes() === targetDate.getMinutes(),
		srcDate.getSeconds() === targetDate.getSeconds(),
	].every(v => v)

	return result
})

specLog('create - Date', () => {
	const nowDate = new Date()
	const date = BeeDate.create(nowDate)

	const result = [
		nowDate.getFullYear() === date.getFullYear(),
		nowDate.getMonth() === date.getMonth(),
		nowDate.getDate() === date.getDate(),
		nowDate.getHours() === date.getHours(),
		nowDate.getMinutes() === date.getMinutes(),
		nowDate.getSeconds() === date.getSeconds(),
	].every(v => v)

	return result
})

specLog('createFromDate - Year', () => {
	const date = BeeDate.createFromDate(2019)
	const result = date.getFullYear() === 1970
	return result
})

specLog('createFromDate - Year, Month', () => {
	const date = BeeDate.createFromDate(2019, 10)
	const result = [
	  date.getFullYear() === 2019,
    date.getMonth() === 10
  ]
	return result.every(v => v)
})

specLog('createFromDate - Year, Month, Date', () => {
	const date = BeeDate.createFromDate(2019, 1, 2)
	const result = [
		date.getFullYear() === 2019,
		date.getMonth() === 1,
    date.getDate() === 2
	]
	return result.every(v => v)
})

specLog('clone', () => {
	const date = BeeDate.create()
	const clonedDate = date.clone()

	const result = [
		clonedDate.getFullYear() === date.getFullYear(),
		clonedDate.getMonth() === date.getMonth(),
		clonedDate.getDate() === date.getDate(),
		clonedDate.getHours() === date.getHours(),
		clonedDate.getMinutes() === date.getMinutes(),
		clonedDate.getSeconds() === date.getSeconds(),
	].every(v => v)

	return result
})

specLog('addDate', () => {
	const date = BeeDate.createFromDate(2019, 1, 1)
	const addedDate = date.addDate(5)

	const result = [
		date !== addedDate,
		addedDate.getMonth() === date.getMonth(),
		addedDate.getDate() === 6
	]

	return result.every(v => v)
})

specLog('subtractDate', () => {
	const date = BeeDate.createFromDate(2019, 1, 10)
	const addedDate = date.subtractDate(5)

	const result = [
		date !== addedDate,
		addedDate.getMonth() === date.getMonth(),
		addedDate.getDate() === 5
	]

	return result.every(v => v)
})

specLog('getYesterday', () => {
	const date = BeeDate.createFromDate(2019, 1, 2)
	const yesterday = date.getYesterday()

	const result = [
		date !== yesterday,
    yesterday.getDate() === 1,
	]

	return result.every(v => v)
})


specLog('formatDate - YYYY-MM-DD', () => {
	const date = BeeDate.createFromDate(2019, 1, 2)

	const result = date.formatDate('-')

	return result === '2019-02-02'
})

specLog('formatDate - YYYY.MM.DD', () => {
	const date = BeeDate.createFromDate(2019, 1, 2)

	const result = date.formatDate('.')

	return result === '2019.02.02'
})

specLog('formatTime - HH:mm:ss', () => {
	const date = BeeDate.createFromDate(2019, 1, 2, 10, 11, 13)

	const result = date.formatTime(':')

	return result === '10:11:13'
})

specLog('format - YYYY-MM-DD', () => {
	const date = BeeDate.createFromDate(2019, 1, 2)

	const result = date.format(({year, month, date}) => `${year}-${month}-${date}`)

	return result === '2019-02-02'
})

specLog('format - YYYY.MM.DD', () => {
	const date = BeeDate.createFromDate(2019, 1, 2)

	const result = date.format(({year, month, date}) => `${year}.${month}.${date}`)

	return result === '2019.02.02'
})

specLog('format - YYYY.MM.DD HH:mm:ss', () => {
	const date = BeeDate.createFromDate(2019, 1, 2, 10, 11, 13)

	const result = date.format(({year, month, date, hours, minutes, seconds}) => `${year}.${month}.${date} ${hours}:${minutes}:${seconds}`)

	return result === '2019.02.02 10:11:13'
})

specLog('isSameDate', () => {
	const srcDate = BeeDate.createFromDate(2019, 1, 2)
	const targetDate = BeeDate.createFromDate(2019, 1, 2)

	const result = srcDate.isSameDate(targetDate)

	return result
})

specLog('isSameDate - not', () => {
	const srcDate = BeeDate.createFromDate(2019, 1, 2)
	const targetDate = BeeDate.createFromDate(2019, 1, 3)

	const result = !srcDate.isSameDate(targetDate)

	return result
})

specLog('isSameMonth', () => {
	const srcDate = BeeDate.createFromDate(2019, 1, 2)
	const targetDate = BeeDate.createFromDate(2019, 1, 2)

	const result = srcDate.isSameMonth(targetDate)

	return result
})

specLog('isSameMonth - not', () => {
	const srcDate = BeeDate.createFromDate(2019, 1, 2)
	const targetDate = BeeDate.createFromDate(2019, 2, 3)

	const result = !srcDate.isSameMonth(targetDate)

	return result
})

specLog('isSameYear', () => {
	const srcDate = BeeDate.createFromDate(2019, 1, 2)
	const targetDate = BeeDate.createFromDate(2019, 1, 2)

	const result = srcDate.isSameYear(targetDate)

	return result
})

specLog('isSameYear - not', () => {
	const srcDate = BeeDate.createFromDate(2019, 1, 2)
	const targetDate = BeeDate.createFromDate(2018, 2, 3)

	const result = !srcDate.isSameYear(targetDate)

	return result
})

specLog('isLeapYear', () => {
	const date = BeeDate.createFromDate(2016, 2)

	const result = date.isLeapYear()

	return result
})

specLog('isLeapYear - not', () => {
	const date = BeeDate.createFromDate(2017, 2)

	const result = !date.isLeapYear()

	return result
})

specLog('getLastDate', () => {
	const LAST_DAYS = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
	const date = Array
    .from({length: 12}, (v, i) => {
      return BeeDate.createFromDate(2017, i)
    })
    .map(date => {
      return date.getLastDate()
    })

  const result = LAST_DAYS.join('') === date.join('')

	return result
})

specLog('getLastDate - leap year', () => {
	const date = BeeDate.createFromDate(2016, 2)

	const result = date.getLastDate() === 29

	return result
})

specLog('range', () => {
	const startDate = BeeDate.createFromDate(2016, 0, 1)
	const endDate = BeeDate.createFromDate(2016, 0, 20)
	const range = startDate.range(endDate)

	const result = [
		startDate.isSameDate(range[0]),
		endDate.isSameDate(range[19]),
	]

	return result.every(v => v)
})

specLog('range - past', () => {
	const startDate = BeeDate.createFromDate(2016, 0, 20)
	const endDate = BeeDate.createFromDate(2016, 0, 1)

	const result = startDate.range(endDate).length === 0

	return result
})

specLog('range - limit 365', () => {
	const startDate = BeeDate.createFromDate(2016, 0, 1)
	const endDate = BeeDate.createFromDate(2017, 12, 31)

	const result = startDate.range(endDate).length === 365

	return result
})

logResult()
