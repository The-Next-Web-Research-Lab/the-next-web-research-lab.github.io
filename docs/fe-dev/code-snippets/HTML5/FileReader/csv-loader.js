const isCSVFormat = file => file.type === 'text/csv'

const onload = (callback) => ({target: {result}}) => {
  const csvData = result
    .split(/\r\n|\n/)
    .map(line => line.split(','))
  callback(csvData)
}
const onerror = (callback) => () => callback()
const onabort = onerror
const csvToObj = csvFile => {
  return new Promise((resolve, reject) => {
    const reader = Object.assign(new FileReader(), {
      onload: onload(resolve),
      onabort: onabort(reject),
      onerror: onerror(reject),
    })
    reader.readAsText(csvFile)
  })
}