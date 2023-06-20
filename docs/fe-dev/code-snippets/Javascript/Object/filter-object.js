const filterObject = (f, obj) => Object
  .entries(obj)
  .filter(([_, v]) => f(v))
  .map(([k, v]) => ({[k]: v}))
  .reduce((acc, obj) => Object.assign(acc, obj))

const obj = {a: 1, b: 2, c: 3}
filterObject(n => n == 2, obj)
// {b: 2}

const obj = {a: {age: 10}, b: {age: 15}, c: {age: 20}}
filterObject(({age}) => age < 20, obj)
// {a: {age: 10}, b: {age: 15}}