const isOverlap = (base, target) => {
  if (target.end <= base.begin) return false
  if (target.begin >= base.end) return false
  return true
}


const assert = v1 => v2 => console.log(v1 === v2)
const base = {begin: 2, end: 4}

assert(false)(isOverlap(base, {begin: 0, end: 1})) // true
assert(false)(isOverlap(base, {begin: 1, end: 2})) // true
assert(true)(isOverlap(base, {begin: 2, end: 3})) // true
assert(true)(isOverlap(base, {begin: 3, end: 4})) // true
assert(false)(isOverlap(base, {begin: 4, end: 5})) // true
assert(false)(isOverlap(base, {begin: 5, end: 6})) // true
assert(true)(isOverlap(base, {begin: 2, end: 4})) // true
assert(true)(isOverlap(base, {begin: 1, end: 5})) // true