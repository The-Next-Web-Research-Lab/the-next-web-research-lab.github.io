const createProxy = (state, revokes) => {
  const handler = {
    get (target, key) {
      const value = target[key]
      if (typeof value === 'object') {
        const {proxy} = createProxy(value, revokes)
        return proxy
      } else {
        return value
      }
    },
    set (target, key, value) {
      console.log('SET', key, value)
      target[key] = value
    }
  }

  const {proxy, revoke} = Proxy.revocable(state, handler)
  revokes.push(revoke)
  return {proxy, revoke, revokes}
}

const proxyAll = (base, fn) => {
  const {proxy, revokes} = createProxy(base, [])

  fn(proxy)
  revokes.forEach(fn => fn())

  return base
}