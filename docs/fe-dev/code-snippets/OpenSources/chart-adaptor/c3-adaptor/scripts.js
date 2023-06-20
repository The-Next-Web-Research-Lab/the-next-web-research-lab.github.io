window.onload = () => {
  const element = document.querySelector('#chart-date')
  const labels = [
    '2010-01-01',
    '2011-01-01',
    '2012-01-01',
    '2013-01-01',
    '2014-01-01',
    '2015-01-01',
    '2016-01-01',
    '2017-01-01'
  ]
  const columns = Array
    .from({length: 10}, (v, index) => index + 1)
    .map(index => {
      return [`data${index}`]
        .concat([110, 90, 110, 90, 110, 90, 110, 90].map(v => v * index))
    })

  const chart = mountChart({
    element,
    labels,
    columns,
    xAxisFormat: (x) => {
      return x.getFullYear()
    },
    tooltipTitleFormat: (x) => {
      const year = x.getFullYear()
      const month = x.getMonth() + 1
      return `${year}.${month > 10 ? month : '0' + month}`
    },
    tooltipValueFormat: value => `${value}%`,
  })

  setTimeout(() => {
    const copiedLabels = [...labels]
    const copiedColumns = [...columns]

    copiedColumns.forEach(items => {
      items.length = items.length - 1
    })
    copiedLabels.length = copiedLabels.length - 1

    changeData({
      chart,
      labels: copiedLabels,
      columns: copiedColumns,
    })
  }, 5000)
}