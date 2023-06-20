const clone = objOrArr => {
  switch (true) {
    case isPrimitive(objOrArr):
      return objOrArr
    case Array.isArray(objOrArr):
      return objOrArr.map(clone)
    default:
      return cloneObject(objOrArr)
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

const cloneObject = obj => {
  const cloned = Object.create(Object.getPrototypeOf(obj))
  for (const key in obj) {
    cloned[key] = clone(obj[key])
  }
  return cloned
}

module.exports = {clone}