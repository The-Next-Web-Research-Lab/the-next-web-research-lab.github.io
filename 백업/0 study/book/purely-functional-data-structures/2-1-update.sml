fun update (x :: xs, 0, y) = y :: xs
  | update (x :: xs, i, y) = x :: update (xs, i - 1, y)

val xs = [0, 1, 2, 3, 4]
val ys = update(xs, 2, 7)
