const toNextMonth = (option) => {
  const FIRST_MONTH = 1
  const LAST_MONTH = 12

  const nextMonth = option.month + 1
  const isNextYear = nextMonth > LAST_MONTH
  const month = isNextYear ? FIRST_MONTH : nextMonth
  const year = option.year + (isNextYear ? 1 : 0)

  return { year, month }
}

module.exports = toNextMonth