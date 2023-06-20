// base: [begin: number, end: number]
// target: [begin: number, end: number]
const isSubset = (base, target) => {
  if (base[0] > target[0]) return false
  if (base[1] < target[1]) return false
  if (base[0] >= target[1] ) return false
  if (base[1] <= target[0] ) return false
  return true
}


const assert = v1 => v2 => console.log(v1 === v2)
const base = [2, 4]

assert(false)(isSubset(base, [0, 1]))
assert(false)(isSubset(base, [1, 2]))
assert(true)(isSubset(base, [2, 3]))
assert(true)(isSubset(base, [3, 4]))
assert(false)(isSubset(base, [4, 5]))
assert(false)(isSubset(base, [5, 6]))

assert(true)(isSubset(base, [2, 4]))
assert(false)(isSubset(base, [1, 5]))