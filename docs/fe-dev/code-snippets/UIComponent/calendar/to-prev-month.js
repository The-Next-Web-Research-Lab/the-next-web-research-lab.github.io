const toPrevMonth = (option) => {
  const FIRST_MONTH = 1
  const LAST_MONTH = 12

  const prevMonth = option.month - 1
  const isPrevYear = prevMonth < FIRST_MONTH
  const month = isPrevYear ? LAST_MONTH : prevMonth
  const year = option.year - (isPrevYear ? 1 : 0)

  return { year, month }
}

module.exports = toPrevMonth