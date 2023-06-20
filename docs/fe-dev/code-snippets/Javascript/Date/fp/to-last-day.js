const isLeapYear = require('./is-leap-year')

const toLastDay = ({year, month}) => {
  const LAST_DAYS = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
  const LEAP_YEAR_LAST_DATE = 29
  const MONTH_FEBRUARY = 2

  if (isLeapYear(year) && month === MONTH_FEBRUARY) {
    return LEAP_YEAR_LAST_DATE
  }
  return LAST_DAYS[month - 1]
}

module.exports = toLastDay