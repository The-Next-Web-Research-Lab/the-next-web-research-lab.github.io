const ZOOM_OPTION = {
  enabled: true,
  initialRange: [0, 3]
};

const draw = (columns, zoom = false) => {
  return c3.generate({
    bindto: '#chart',
    data: {
      columns
    },
    zoom: zoom ? ZOOM_OPTION : undefined
  });
};

const updateData = (chart, columns, unmount = false, zoom = false) => {
  setTimeout(function () {
    if (unmount) {
      document.querySelector('#chart').innerHTML = '';
      setTimeout(function () {
        chart = draw(columns, zoom)
      })
    } else {
      chart.load({columns});
      if (zoom) {
        chart.zoom(ZOOM_OPTION.initialRange)
      }
    }
  }, 1000);
};

const createChart = ({
                       columns,
                       unmount = false,
                       zoom = false
                     }) => {
  const createdChart = draw(columns, zoom);
  return {
    update: columns => updateData(createdChart, columns, unmount, zoom)
  }
};
