const last = arr => {
  const len = arr.length
  return arr.slice(len - 1, len)
}

last([]) // []
last([1, 2, 3]) // [3]