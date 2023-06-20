const diffDay = (srcDate, targetDate) => {
  const DAY = 1000 * 60 * 60 * 24
  return Math.floor((targetDate - srcDate) / DAY)
}

module.exports = diffDay