const linkedList = arr => arr.reduceRight((a, b) => [b, a], [])

function *concat(a, list) {
  yield [a, list]
}

function *map(fn, [head, tail]) {
  if (head === undefined) {
    yield []
  }
  yield* concat(fn(head), map(fn, tail))
}

function *filter(pred, [head, tail]) {
  if (head === undefined) {
    yield []
  }
  if (pred(head)) {
    yield concat(head, filter(pred, tail))
  } else {
    yield filter(pred, tail)
  }
}

const xs = linkedList([0, 1, 2, 3])
const ys = map(n => n * 10, xs)
const zs = filter(n => n > 1, xs)

console.log(ys.next())
console.log(ys.next())
console.log(ys.next())
console.log(ys.next())
console.log(ys.next())
