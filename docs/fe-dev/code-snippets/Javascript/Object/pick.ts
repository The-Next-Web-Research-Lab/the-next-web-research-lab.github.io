const pick = function <T, K extends keyof T>(keys: K[], obj: T) {
  return keys
    .map(key => ({[key]: obj[key]}))
    .reduce((acc, obj) => Object.assign(acc, obj))
}

const obj = {a: 1, b: 2, c: 3}
console.log(pick(['a', 'b'], obj))
// {a: 1, b: 2}