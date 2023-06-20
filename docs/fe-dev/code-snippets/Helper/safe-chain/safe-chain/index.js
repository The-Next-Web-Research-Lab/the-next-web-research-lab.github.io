const {toProxy, isPack, unpack} = require('./core')

const safeChain = (state, mapper) => {
  const revokes = []
  const proxy = toProxy(state, revokes)
  const mappedResult = mapper(proxy)
  const result = isPack(mappedResult) ? unpack(mappedResult) : mappedResult

  revokes.forEach(fn => fn())
  return result
}

module.exports = {safeChain}