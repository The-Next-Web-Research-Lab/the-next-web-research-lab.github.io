type OnceCallback<T> = (value?: T) => void
export const once = function<T>(callback: OnceCallback<T>): OnceCallback<T> {
  let isCalled = false
  return function(value?: T): void {
    if (!isCalled) {
      isCalled = true
      callback(value)
    }
  }
}

const onceFn = once(console.log)
onceFn('test')
onceFn('test')
onceFn('test')
onceFn('test')