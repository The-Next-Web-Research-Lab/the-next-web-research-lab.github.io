export const tap = function<T>(callback: (value: T) => void) {
  return (value: T): T => {
    callback(value)
    return value
  }
}
