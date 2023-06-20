const safeChain = (state, mapper) => {
  try {
    return mapper(state)
  } catch (e) {
    return undefined
  }
}

module.exports = {safeChain}