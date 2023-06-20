const {clone: collectionClone} = require('./collection')
const {clone: jsonClone} = require('./json')
const {clone: objectArrayClone} = require('./object-array')

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
              },
            },
          },
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

arr.forEach((len) => {
  console.group(len)
  run(collectionClone, len, 'collectionClone')
  run(jsonClone, len, 'jsonClone')
  run(objectArrayClone, len, 'objectArrayClone')
  console.groupEnd()
})


