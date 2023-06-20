const test = (message, fn) => {
  console.group(message)
  fn()
  console.groupEnd()
}
const assert = (src, target) => console.log(src === target)

test('프로퍼티 변경 시 주소가 변경된다.', () => {
  const baseState = {
    done: false
  }

  const nextState = produce(baseState, (draft) => {
    draft.done = true
  })

  assert(baseState === nextState, false)
  assert(baseState.done === nextState.done, false)
})


test('변경하지 않는 객체는 변경되면 안된다.', () => {
const baseState = {
  done: false,
  inner: {
    done: false,
  }
}

const nextState = produce(baseState, (draft) => {
  draft.done = true
})

assert(baseState.done === nextState.done, false)
assert(baseState.inner === nextState.inner, true)
})

test('객체 변경 시, 새로운 객체가 만들어진다.', () => {
  const baseState = {
    done: false,
    inner: {
      done: false,
    }
  }

  const nextState = produce(baseState, (draft) => {
    draft.inner.done = true
  })

  assert(baseState.done === nextState.done, true)
  assert(baseState.inner === nextState.inner, false)
})

test('객체 변경 시, 새로운 객체가 만들어진다. - 프로퍼티 두개일 때', () => {
  const baseState = {
    done: false,
    inner: {
      txt: 'Text',
      done: false,
    }
  }

  const nextState = produce(baseState, (draft) => {
    draft.inner.done = true
  })

  assert(baseState.done === nextState.done, true)
  assert(baseState.inner === nextState.inner, false)
  assert(baseState.inner.txt === nextState.inner.txt, true)
})

test('변경하지 않는 객체는 변경되면 안된다.', () => {
  const baseState = {
    done: false,
    inner: {
      txt: 'Text',
      done: false,
    },
    inner2: {
      txt: 'Text',
      done: false,
    }
  }

  const nextState = produce(baseState, (draft) => {
    draft.inner.txt = 'Hello'
  })

  assert(baseState.inner2 === nextState.inner2, true)
})

test('변경하지 않는 객체는 변경되면 안된다. - 깊은 객체', () => {
  const baseState = {
    done: false,
    inner: {
      txt: 'Text',
      done: false,
    },
    inner2: {
      txt: 'Text',
      done: false,
      inner: {
        inner: {
          txt: 'Text',
          done: false,
        },
        inner2: {
          txt: 'Text',
          done: false,
        }
      }
    }
  }

  const nextState = produce(baseState, (draft) => {
    draft.inner2.inner.inner.txt = 'Hello'
  })

  assert(baseState.inner === nextState.inner, true)
  assert(baseState.inner2.inner.inner2 === nextState.inner2.inner.inner2, true)
})

test('변경이 원하는 값은 모두 정상적으로 변경되야 한다.', () => {
  const baseState = {
    done: false,
    inner: {
      txt: 'Text',
      done: false,
    },
    inner2: {
      txt: 'Text',
      done: false,
      inner: {
        inner: {
          txt: 'Text',
          done: false,
        },
        inner2: {
          txt: 'Text',
          done: false,
        }
      }
    }
  }

  const nextState = produce(baseState, (draft) => {
    draft.inner2.txt = 'Hello1'
    draft.inner2.inner.inner.done = true
    draft.inner2.inner.inner2.done = true
    draft.inner2.inner.inner2.txt = 'Hello World'
  })

  assert(nextState.inner2.txt === 'Hello1', true)
  assert(nextState.inner2.inner.inner.done === true, true)
  assert(nextState.inner2.inner.inner2.done === true, true)
  assert(nextState.inner2.inner.inner2.txt === 'Hello World', true)
})

test('변경 후 내부적으로 사용 가능하다.', () => {
  const baseState = {
    done: false,
    inner: {
      count: 1,
      message: ''
    },
  }

  const nextState = produce(baseState, (draft) => {
    draft.inner.count++
    draft.inner.count++
    draft.inner.count++
    draft.inner.count++
    draft.inner.message = `count is ${draft.inner.count}`
  })

  assert(nextState.inner.count === 5, true)
  assert(nextState.inner.message === 'count is 5', true)
})