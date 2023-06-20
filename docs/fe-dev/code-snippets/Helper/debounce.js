/**
 * Debounce
 *
 * @param callback {Function} Callback function
 * @param _delay {Number} Delay time
 * @return {Function} Event Listener
 */
const debounce = (callback, ms) => {
  let timer = null

  return function(...args){
    const self = this
    clearTimeout(timer)
    timer = setTimeout(() => {
      callback.apply(self, args)
    }, ms)
  }
}

const log = debounce(console.log, 100)
log('1')
log('2')
log('3')
log('4')

// 4
