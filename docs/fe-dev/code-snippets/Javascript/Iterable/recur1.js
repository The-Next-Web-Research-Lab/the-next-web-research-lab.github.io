const linkedList = arr => arr.reduceRight((a, b) => [b, a], [])

function concat(a, list) {
  return [a, list]
}

function map(fn, [head, tail]) {
  if (head === undefined) {
    return []
  }
  return concat(fn(head), map(fn, tail))
}

function filter(pred, [head, tail]) {
  if (head === undefined) {
    return []
  }
  if (pred(head)) {
    return concat(head, filter(pred, tail))
  } else {
    return filter(pred, tail)
  }
}

const xs = linkedList([0, 1, 2, 3])
const ys = map(n => n * 10, xs)
const zs = filter(n => n > 1, xs)

console.log(zs)
