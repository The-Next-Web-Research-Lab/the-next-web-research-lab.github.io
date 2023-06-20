const test = (message, fn) => {
  console.group(message)
  fn()
  console.groupEnd()
}
const assert = (src, target) => console.log(src === target)

test('모든 객체의 변경 감지한다.', () => {
const baseState = {
  done: false,
  inner: {
    txt: 'World',
  }
}

const nextState = proxyAll(baseState, (draft) => {
  draft.done = true
  draft.inner.txt = 'Hello'
})

console.log(baseState)
console.log(nextState)
})

test('linkedlist로 변경된다.', () => {
  const base = {
    value: 'Hello'
  }

  const state = toLinkedList(base)

  assert(state[0].base === base, true)
})

test('toLinkedList - inner', () => {
  const base = {
    value: 'Hello',
    inner: {
      message: 'Hello World'
    }
  }

  const state = toLinkedList(base)

  assert(state[0].base === base, true)
  assert(state[1].base === base.inner, true)
})

test('changeLinkedList', () => {
  const base = {
    value: 'Hello',
    inner1: {
      message: '1',
      count: 1
    },
    inner2: {
      message: '2',
      count: 2
    }
  }
  const state = toLinkedList(base)
  changeLinkedList(state[2], 'message', 3)

  assert(base.value === state[0].copy.value, true)
  assert(base.inner1 === state[0].copy.inner1, true)
  assert(base.inner2 === state[0].copy.inner2, false)
})

test('changeLinkedList - multiple change', () => {
  const base = {
    value: 'Hello',
    inner1: {
      message: '1',
      count: 1
    },
    inner2: {
      message: '2',
      count: 2
    }
  }
  const state = toLinkedList(base)
  changeLinkedList(state[0], 'value', 'Hello World')
  changeLinkedList(state[2], 'message', '3')
  changeLinkedList(state[2], 'count', 3)

  assert(state[0].copy.value === 'Hello World', true)
  assert(base.inner1 === state[0].copy.inner1, true)
  assert(state[0].copy.inner2.message === '3', true)
  assert(state[0].copy.inner2.count === 3, true)
})

test('changeLinkedList - inner1.inner1', () => {
  const base = { // [0]
    value: 'Hello',
    inner: { // [1]
      inner1: { // [2]
        message: '1',
        count: 1,
        inner: { // [3]
          // [4]
          inner1: { message: '1', count: 1, },
          // [5]
          inner2: { message: '2', count: 2 }
        }
      },
      // [6]
      inner2: { message: '2', count: 2 }
    }
  }
  const state = toLinkedList(base)
  changeLinkedList(state[6], 'message', '3')

  assert(state.length === 7, true)
  assert(base.inner.inner2 === state[0].copy.inner.inner2, false)
  assert(base.inner.inner1.inner.inner1 === state[0].copy.inner.inner1.inner.inner1, true)
  assert(base.inner.inner1.inner.inner2 === state[0].copy.inner.inner1.inner.inner2, true)
})

test('toBase', () => {
  const base = {
    value: 'Hello',
    inner1: {
      message: '1',
      count: 1
    },
    inner2: {
      message: '2',
      count: 2
    }
  }
  const state = toLinkedList(base)
  changeLinkedList(state[2], 'message', 3)

  const changeBase = toBase(state)

  assert(base.value === changeBase.value, true)
  assert(base.inner1 === changeBase.inner1, true)
  assert(base.inner2 === changeBase.inner2, false)
})


test('toBase - inner1.inner1', () => {
  const base = { // [0]
    value: 'Hello',
    inner: { // [1]
      inner1: { // [2]
        message: '1',
        count: 1,
        inner: { // [3]
          // [4]
          inner1: { message: '1', count: 1, },
          // [5]
          inner2: { message: '2', count: 2 }
        }
      },
      // [6]
      inner2: { message: '2', count: 2 }
    }
  }
  const state = toLinkedList(base)
  changeLinkedList(state[6], 'message', '3')

  const changedBase = toBase(state)

  assert(state.length === 7, true)
  assert(base.inner.inner2 === changedBase.inner.inner2, false)
  assert(base.inner.inner1.inner.inner1 === changedBase.inner.inner1.inner.inner1, true)
  assert(base.inner.inner1.inner.inner2 === changedBase.inner.inner1.inner.inner2, true)
})