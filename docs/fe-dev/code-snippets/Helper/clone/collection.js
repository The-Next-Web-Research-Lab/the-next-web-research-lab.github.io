const clone = value => {
  switch (true) {
    case isPrimitive(value):
      return value
    case isArray(value):
      return value.map(clone)
    case isMap(value):
      return new Map(value)
    case isSet(value):
      return new Set(value)
    default:
      return cloneObject(value)
  }
}

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
const isArray = target => Array.isArray(target)
const isMap = target => target instanceof Map
const isSet = target => target instanceof Set

const cloneObject = obj => {
  const cloned = Object.create(Object.getPrototypeOf(obj))
  for (const key in obj) {
    cloned[key] = clone(obj[key])
  }
  return cloned
}

module.exports = {clone}