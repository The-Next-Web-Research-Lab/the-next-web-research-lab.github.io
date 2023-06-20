export const throttle = (callback, ms = 100) => {
  let timer
  let last = 0

  return function(...args: any[]) {
    const now = Date.now()

    if (last && now < last + ms) {
      clearTimeout(timer)
      timer = setTimeout(() => {
        last = now
        callback(...args)
      }, ms)
    } else {
      last = now
      callback(...args)
    }
  }
}
