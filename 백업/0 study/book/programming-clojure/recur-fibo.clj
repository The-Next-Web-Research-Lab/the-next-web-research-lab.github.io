(defn recur-fibo [n]
    (letfn [(fib
            [current next n]
            (if (zero? n)
                current
                (recur next (+ current next) (dec n))))]
    (fib 0 1 n)))

(recur-fibo 9); 34
