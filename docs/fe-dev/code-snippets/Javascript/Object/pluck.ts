const pluck = function <T, K extends keyof T>(keys: K[], obj: T): T[K][] {
  return keys.map(key => obj[key])
}

const obj = {a: 1, b: 2, c: 3}
console.log(pluck(['a', 'b'], obj))
// [1, 2]