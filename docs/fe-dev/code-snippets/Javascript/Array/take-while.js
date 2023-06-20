const takeWhile = (f, arr) => {
  const newArr = []
  arr.some((val, ...args) => {
    const result = !f(val, ...args)
    result || newArr.push(val)
    return result
  })
  return newArr
}

takeWhile(a => a, [1, 2, 3, 0, 4, 5])
/// [1, 2, 3]