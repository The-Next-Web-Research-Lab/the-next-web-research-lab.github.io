const isPrimitive = value => {
  switch (true) {
    case value === undefined:
    case value === null:
      return true
    case typeof value === 'object':
    case typeof value === 'function':
    case Number.isNaN(value):
      return false
    default:
      return true
  }
}

module.exports = {isPrimitive}