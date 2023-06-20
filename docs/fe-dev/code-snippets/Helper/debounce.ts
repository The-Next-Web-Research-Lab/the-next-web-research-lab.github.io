export const debounce = (callback, ms = 100) => {
  let timer

  return function(...args: any[]) {
    clearTimeout(timer)
    timer = setTimeout(() => {
      callback(...args)
    }, ms)
  }
}
