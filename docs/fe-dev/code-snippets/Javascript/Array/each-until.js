const eachUntil = (f, arr) => {
  arr.some((val, ...args) => {
    return f(val, ...args)
  })
}

eachUntil(a => {
  console.log(a);
  return a;
}, [0, false, undefined, null, 1, 2, 3])

// 0
// false
// undefined
// null
// 1
