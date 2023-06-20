const CHART_OPTION = {
  HEIGHT: 380,
  PADDING_TOP: 50,
  COLOR_PATTERN: [
    '#45454d',
    '#ce2e6c',
    '#f75f00',
    '#43ab92',
    '#512c62',
    '#504658',
    '#1089ff'
  ],
  POINT_RADIUS: 4
}

const COMMON_CHART_OPTION = {
  padding: {
    top: CHART_OPTION.PADDING_TOP
  },
  size: {
    height: CHART_OPTION.HEIGHT
  },
  color: {
    pattern: CHART_OPTION.COLOR_PATTERN
  },
  point: {
    r: CHART_OPTION.POINT_RADIUS
  },
  legend: {
    position: 'inset',
    inset: {
      anchor: 'top-right',
      y: -CHART_OPTION.PADDING_TOP,
      step: 1
    }
  },
  grid: {
    y: {
      show: true
    }
  }
}