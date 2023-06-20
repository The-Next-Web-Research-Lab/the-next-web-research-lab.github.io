signature S = sig
  type t
  val f : t -> t
  val x : t
end

structure S1: S = struct
  type t = int
  val x = 0
  fun f (x) = x + 1
end
