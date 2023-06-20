const takeUntil = (f, arr) => {
  const newArr = []
  arr.some((val, ...args) => {
    newArr.push(val)
    return f(val, ...args)
  })
  return newArr
}

takeUntil(a => a, [0, false, undefined, null, 1, 2, 3])
// [0, false, undefined, null, 1]