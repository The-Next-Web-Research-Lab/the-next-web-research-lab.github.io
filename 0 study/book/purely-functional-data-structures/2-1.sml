infix 3 ++
fun [] ++ ys = ys
  | (x :: xs) ++ ys = x :: (xs ++ ys)

val xs = [0, 1, 2]
val ys = [3, 4, 5]
val zs = xs ++ ys;
