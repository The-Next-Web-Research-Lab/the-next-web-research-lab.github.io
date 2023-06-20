const compare = () => 0.5 - Math.random()
const shuffle = arr => arr.concat().sort(compare)

module.exports = shuffle