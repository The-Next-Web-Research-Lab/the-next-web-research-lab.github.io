const mapValues = (f, obj) => Object
  .entries(obj)
  .map(([k, v]) => ({[k]: f(v)}))
  .reduce((acc, obj) => Object.assign(acc, obj))

const obj = {a: 1, b: 2, c: 3}
mapValues(n => n + 10, obj)
// {a: 11, b: 12, c: 13}