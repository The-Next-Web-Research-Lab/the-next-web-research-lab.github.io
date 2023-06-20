const LABEL_NAME = 'x'
const AXIS_X_TYPE = 'timeseries'

const mountChart = (options) => {
  const {
    element,
    labels,
    columns,
    xAxisFormat,
    tooltipTitleFormat,
    tooltipValueFormat
  } = options

  const chart = c3.generate(Object.assign({
    bindto: element,
    data: {
      x: LABEL_NAME,
      columns: [
        [
          LABEL_NAME,
          ...labels
        ],
        ...columns
      ],
    },
    axis: {
      x: {
        type: AXIS_X_TYPE,
        tick: {
          format: xAxisFormat
        }
      }
    },
    tooltip: {
      format: {
        title: tooltipTitleFormat,
        value: tooltipValueFormat,
      }
    }
  }, COMMON_CHART_OPTION));

  return chart
}

const changeData = (options) => {
  const {
    chart,
    labels,
    columns
  } = options

  chart.load({
    columns: [
      [
        LABEL_NAME,
        ...labels
      ],
      ...columns
    ],
  })
  return chart
}