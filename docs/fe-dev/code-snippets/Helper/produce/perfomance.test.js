const {produce} = require('./persistant/produce')
const {produce: produceOop} = require('./persistant-oop/produce')

const clone = obj => JSON.parse(JSON.stringify(obj))
const cloneProduce = (fn) => (state) => {
  const clonedState = clone(state)
  fn(clonedState)
  return clonedState
}

const run = (fn, len, name) => {
  const obj = {
    num: 100000000,
    str: 'qwertyuiopsdfghjklzxcvbnm',
    message: 'Hello',
    inner: {
      num: 100000000,
      str: 'qwertyuiopsdfghjklzxcvbnm',
      message: 'Hello',
      inner: {
        num: 100000000,
        str: 'qwertyuiopsdfghjklzxcvbnm',
        message: 'Hello',
        inner: {
          num: 100000000,
          str: 'qwertyuiopsdfghjklzxcvbnm',
        },
      },
    },
  }
  const start = Date.now()
  for (let i = 0; i < len; i++) {
    fn(obj)
  }
  console.log(name, Date.now() - start)
}

const arr = [
  10,
  1000,
  1000000
]

const callback = obj => {
  obj.inner.inner.inner.str = ''
}

arr.forEach((len) => {
  console.group(len)
  run(cloneProduce(callback), len, 'cloneProduce')
  run(produce(callback), len, 'produce'),
  run(produceOop(callback), len, 'produceOop')
  console.groupEnd()
})


