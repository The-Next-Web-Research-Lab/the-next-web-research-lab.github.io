/**
 * Throttle
 *
 * @param callback {Function} Callback function
 * @param _threshhold {Number} Throttle time
 * @return {Function} Event Listener
 */
const throttle = (callback, ms = 100) => {
  let timer = null
  let last = 0

  return function (...args) {
    const self = this
    const now = +new Date

    if (last && now < last + ms){
      clearTimeout(timer)
      timer = setTimeout(() => {
        last = now
        callback.apply(self, args)
      }, ms)
    } else {
      last = now
      callback.apply(self, args)
    }
  }
}


const log = throttle(console.log, 1000)
setInterval(() => {
  console.log('------')
  log('1000')
  console.log('------')
}, 500)