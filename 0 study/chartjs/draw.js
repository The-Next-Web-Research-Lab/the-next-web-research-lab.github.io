const draw = (datasets) => {
  const ctx = document.getElementById('myChart').getContext('2d');
  return  new Chart(ctx, {
    type: 'line',
    data: {
      labels: datasets[0].data,
      datasets
    }
  })
}
