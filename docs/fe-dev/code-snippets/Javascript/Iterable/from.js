const from = iter => Array.from(iter)

const map = new Map()
map.set('a', 1)
map.set('b', 2)
map.set('c', 3)

from(map)
// [['a', 1], ['b', 2], ['c', 3]]