const memoize = (fn) => {
  const cache = {}
  return (n) => {
    if (!cache[n]) {
      cache[n] = fn(n)
    }
    return cache[n]
  }
}
