const addDay = (date, count) => {
  const clonedDate = new Date(date)
  clonedDate.setDate(clonedDate.getDate() + count)
  return clonedDate
}

module.exports = addDay