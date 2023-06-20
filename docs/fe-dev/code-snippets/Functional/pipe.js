const pipe = (fn, ...fns) => (...arg) => {
  return fns.reduce((acc, fn) => fn(acc), fn(...arg))
}

pipe(
  v => v * 10,
  v => `${v}%`,
  console.log
)(10)
// 100%
