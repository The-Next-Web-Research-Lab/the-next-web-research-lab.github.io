const queryToString = obj => {
  if (!obj) {
    return ''
  }

  const query = Object
    .entries(obj)
    .map(item => item.join('='))
    .join('&')
  return `?${query}`
}

console.log(queryToString({
  name: 'Peter.Cho',
  address: 'Korea'
}))