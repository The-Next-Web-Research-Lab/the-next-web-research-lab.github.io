// fun [] ++ ys = ys
//   | (x :: xs) ++ ys = x :: (xs ++ ys)
const cons = ([x, xs], ys) => {
  return x === undefined ?
    ys :
    [x, cons(xs, ys)]
}
// val xs = [0, 1, 2]
// val ys = [3, 4, 5]
// val zs = xs ++ ys;
const xs = [0, [1, [2, []]]]
const ys = [3, [4, [5, []]]]
const zs = cons(xs, ys) //[0,[1,[2,[3,[4,[5,[]]]]]]]
