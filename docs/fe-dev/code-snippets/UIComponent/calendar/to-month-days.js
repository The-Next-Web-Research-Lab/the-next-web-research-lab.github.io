const {toDayIndex, toLastDay} = require('../../Javascript/Date/fp')
const {chunk, range} = require('../../Functional/fp')

const toMonthDays = ({year, month}) => {
  const WEEK_LENGTH = 7
  const date = new Date(year, month - 1, 1)
  const dayIndex = toDayIndex(date)
  const lastDate = toLastDay({year, month})
  const restDay = (dayIndex + lastDate) % WEEK_LENGTH
  const nextMonthLength = restDay ? WEEK_LENGTH - restDay : restDay

  const prevMonthDays = range(dayIndex).map(() => '')
  const currentMonthDays = range(lastDate).map((_, i) => i + 1) // [1, 2, ...]
  const nextMonthDays = range(nextMonthLength).map(() => '')

  return chunk([].concat(prevMonthDays, currentMonthDays, nextMonthDays), WEEK_LENGTH)
}

module.exports = toMonthDays
