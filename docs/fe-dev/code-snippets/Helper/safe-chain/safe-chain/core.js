const symbol = Symbol('safe')

const isNullish = value => value === undefined || value === null
const isPack = pack => typeof pack === 'object' && symbol in pack

const pack = value => ({ [symbol]: value })
const unpack = pack => pack[symbol]

const toProxy = (state, revokes) => {
  const wrap = pack(state)
  const handler = trap(revokes)
  const {proxy, revoke} = Proxy.revocable(wrap, handler)
  revokes.push(revoke)
  return proxy
}

const trap = (revokes) => {
  return {
    get (target, key) {
      const unpacked = unpack(target)
      return key === symbol ?
        unpacked :
        toProxy(isNullish(unpacked) ? undefined : unpacked[key], revokes)
    }
  }
}

module.exports = {toProxy, isPack, unpack}