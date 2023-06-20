const {safeChain} = require('./index')
let fail = 0
let success = 0
const test = (a, b) => {
  const result = a === b
  console.log(result, a, b)
  if (result) {
    success++
  } else {
    fail++
  }
}

const STEP = [
  { p: 'p', v: 'v' },
  { p: { p: 'p1', v: 'v' }, v: 'v' },
  { p: { p: { p: 'p2', v: 'v' }, v: 'v' }, v: 'v' },
  { n: null },
  [{ p: 'p' }]
]

console.group('dot')
test(safeChain(STEP[0], o => o.p), 'p')
test(safeChain(STEP[1], o => o.p.p), 'p1')
test(safeChain(STEP[2], o => o.p.p.p), 'p2')
test(safeChain(STEP[3], o => o.n), null)
test(safeChain(STEP[3], o => o.n.p), undefined)
test(safeChain(STEP[4], o => o[0].p), 'p')
test(safeChain([{ p: 'p' }], o => o[0].v), undefined)

test(safeChain(STEP[0], o => o.v), 'v')
test(safeChain(STEP[1], o => o.v), 'v')
test(safeChain(STEP[2], o => o.v), 'v')

test(safeChain(STEP[1], o => o.p.v), 'v')
test(safeChain(STEP[2], o => o.p.v), 'v')

test(safeChain(STEP[1], o => o.p.p.v), undefined)
test(safeChain(STEP[2], o => o.p.p.v), 'v')

test(safeChain(STEP[2], o => o.p.p.p.v), undefined)
console.groupEnd()

console.group('undefined - leaf')
test(safeChain(STEP[0], o => o.p1), undefined)
test(safeChain(STEP[1], o => o.p.p1), undefined)
test(safeChain(STEP[2], o => o.p.p.p1), undefined)
console.groupEnd()

console.group('undefined - middle')
test(safeChain(STEP[1], o => o.p1.p), undefined)
test(safeChain(STEP[2], o => o.p.p1.p), undefined)
test(safeChain(STEP[2], o => o.p1.p.p), undefined)
console.groupEnd()

console.group('destructure')
test(safeChain(STEP[0], ({p}) => p), 'p')
test(safeChain(STEP[3], ({n}) => n), null)
test(safeChain(STEP[3], ({n: {p}}) => p), undefined)
test(safeChain(STEP[0], ({v}) => v), 'v')
test(safeChain(STEP[1], ({p: {v}}) => v), 'v')

console.group('undefined - leaf')
test(safeChain(STEP[0], ({p1}) => p1), undefined)
test(safeChain(STEP[1], ({p: {p1}}) => p1), undefined)
console.groupEnd()

console.group('undefined - middle')
test(safeChain(STEP[1], ({p1: {p}}) => p), undefined)
test(safeChain(STEP[2], ({p:{p1}}) => p1.p), undefined)
test(safeChain(STEP[2], ({p1: {p}}) => p.p), undefined)
console.groupEnd()
console.groupEnd()

console.group('attack')
test(safeChain(STEP[1], () => 1), 1)
test(safeChain(STEP[1], o => o.p.p.p.p.p.p.p), undefined)
console.groupEnd()

console.group('Total')
console.log('Success', success)
console.log('Fail', fail)
console.groupEnd()