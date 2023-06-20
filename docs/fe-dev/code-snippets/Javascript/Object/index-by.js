const indexBy = (f, arr) => arr
  .map(obj => ({[f(obj)]: obj}))
  .reduce((acc, obj) => Object.assign(acc, obj))

const data = [{id: 1},{id: 2}, {id: 3}]
indexBy(v => v.id, data)
// {1: {id: 1}, 2: {id: 2}, 3: {id: 3}}