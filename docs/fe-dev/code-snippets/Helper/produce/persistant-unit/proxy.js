const createProxy = target => {
  const handler = {
    get (target, key) {
      console.log('GET', key)
      return target[key]
    },
    set (target, key, value) {
      console.log('SET', key, value)
      target[key] = value
    }
  }
  return new Proxy(target, handler)
}

const target = {
  message: ''
}
const proxy = createProxy(target)

proxy.message = 'World!'
console.log(proxy.message)

console.group('Destructuring')
const {message} = proxy
console.log(message)
console.groupEnd()