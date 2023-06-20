const {clone} = require('./json')

const a = {}
const b = a
const c = clone(a)

console.log(a === b)
// true
console.log(a === c)